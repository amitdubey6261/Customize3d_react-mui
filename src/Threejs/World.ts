import * as THREE from "three";
import Experience from "./Experience";
import { OrbitControls, TransformControls } from "three/examples/jsm/Addons.js";
import _ from "lodash";
import { EventEmitter } from "events";
import Resources from "./Resources";

interface MeshData {
  uuid: string;
  position: THREE.Vector3;
  quaternion: THREE.Quaternion;
  scale: THREE.Vector3;
}

export default class World {
  experience: Experience;
  scene: THREE.Scene;
  canvas: HTMLCanvasElement;
  camera: THREE.PerspectiveCamera;
  render: any;
  tcontrols: TransformControls;
  orbit: OrbitControls;
  reduxStore: any;
  undoManager: any;
  boxElem: THREE.Mesh;
  oldMeshData: MeshData | null;
  newMeshData: MeshData | null;
  reactEvents: EventEmitter;
  resources: Resources;

  constructor() {
    this.experience = new Experience();
    this.reduxStore = this.experience.reduxStore;
    this.undoManager = this.experience.undoManager;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera.camera;
    this.canvas = this.experience.canvas;
    this.render = this.experience.renderer.render;
    this.orbit = this.experience.camera.ctrls;
    this.tcontrols = new TransformControls(this.camera, this.canvas);
    this.reactEvents = this.experience.reactEvents;
    this.resources = this.experience.resources;

    const grid = new THREE.GridHelper(100, 70, 0xffffff);
    this.scene.add(grid);

    this.oldMeshData = null;
    this.newMeshData = null;

    this.boxElem = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshNormalMaterial()
    );
    this.boxElem.geometry.translate(0, 0.5, 0);
    this.scene.add(this.boxElem);

    this.tcontrols.addEventListener("dragging-changed", (e) => {
      this.orbit.enabled = !e.value;
    });

    this.tcontrols.attach(this.boxElem);

    const gizmo = this.tcontrols.getHelper();
    this.scene.add(gizmo);

    let old_state = this.reduxStore.getState();

    this.reduxStore.subscribe(() => {
      const new_state = this.reduxStore.getState();
      console.log(new_state);
      let res = _.isEqual(old_state, new_state);

      if (!res) {
        switch (new_state.transformState.value) {
          case 0:
            this.tcontrols.setMode("translate");
            break;
          case 1:
            this.tcontrols.setMode("rotate");
            break;
          case 2:
            this.tcontrols.setMode("scale");
            break;
        }
        old_state = new_state;
      }
    });

    this.tcontrols.addEventListener("mouseDown", () => {
      this.oldMeshData = this.getMeshData(this.boxElem);
      console.log("mouse-down", this.oldMeshData);
    });

    this.tcontrols.addEventListener("mouseUp", () => {
      this.newMeshData = this.getMeshData(this.boxElem);
      console.log("mouse-up", this.newMeshData);
    });

    this.tcontrols.addEventListener("dragging-changed", (e) => {
      if (!e.value) {
        if (this.oldMeshData && this.newMeshData) {
          this.addHistory(this.oldMeshData, this.newMeshData);
          console.log(this.oldMeshData, this.newMeshData);
        }
      }
    });

    this.reactEvents.on("Undo", () => {
      this.undoManager.undo();
    });

    this.reactEvents.on("Redo", () => {
      this.undoManager.redo();
    });
  }

  getMeshData(mesh: THREE.Mesh): MeshData {
    const data: MeshData = {
      uuid: mesh.uuid,
      position: mesh.position.clone(),
      quaternion: mesh.quaternion.clone(),
      scale: mesh.scale.clone(),
    };

    console.log(data);

    return data;
  }

  addHistory(old_mesh_data: MeshData, new_mesh_data: MeshData) {
    if (
      old_mesh_data &&
      new_mesh_data &&
      old_mesh_data.uuid == new_mesh_data.uuid
    ) {
      this.undoManager.add({
        undo: () => {
          this.resetMesh(old_mesh_data);
        },
        redo: () => {
          this.resetMesh(new_mesh_data);
        },
      });
    }
  }

  resetMesh(meshData: MeshData) {
    this.boxElem.position.copy(meshData.position);
    this.boxElem.quaternion.copy(meshData.quaternion);
    this.boxElem.scale.copy(meshData.scale);
  }

  update() {}
}
