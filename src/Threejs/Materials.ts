import * as THREE from "three";
import Experience from "./Experience";
import Resources from "./Resources";
import { EventEmitter } from "events";
import { setBackdropState } from "../Rtk/BackdropSlice";

export default class Material {
  experience: Experience;
  scene: THREE.Scene;
  resources: Resources;
  reactEvents: EventEmitter;
  reduxStore: any;
  call_for_embed: any;

  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.reactEvents = this.experience.reactEvents;
    this.reduxStore = this.experience.reduxStore;

    this.createMaterial();
  }

  createMaterial() {
    this.reactEvents.on("load", (data) => {
      // Set loading state
      this.reduxStore.dispatch(setBackdropState(true));

      if (data.type === "texture") {
        const material = new THREE.MeshPhysicalMaterial();
        material.side = THREE.DoubleSide;
        material.emissiveIntensity = 0.2;

        const texturePromises = [
          "base.webp",
          "normal.webp",
          "rough.webp",
          "height.webp",
        ].map((e, idx) => {
          return this.resources
            .load(`${data.name}_${e}`, `${data.path}${e}`, data.type)
            .then((texture:any) => {
              texture.wrapS = THREE.RepeatWrapping;
              texture.wrapT = THREE.RepeatWrapping;
              texture.repeat.set(5, 5);

              // Assign textures to the new material
              switch (idx) {
                case 0:
                  material.map = texture;
                  break;
                case 1:
                  material.normalMap = texture;
                  break;
                case 2:
                  material.roughnessMap = texture;
                  break;
                case 3:
                  material.bumpMap = texture;
                  break;
              }
            });
        });

        Promise.all(texturePromises)
          .then(() => {
            this.experience.world2.sofa_grp.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                if (child.name.startsWith(data.embedOn)) {
                  child.material = material; 
                  child.material.needsUpdate = true; 
                }
              }
            });

            this.reduxStore.dispatch(setBackdropState(false));
          })
          .catch((error) => {
            console.error("Error loading textures:", error);
            this.reduxStore.dispatch(setBackdropState(false));
          });
      }
    });
  }
}
