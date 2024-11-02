import * as THREE from "three";
import Camera from "./Camera";
import Renderer from "./Renderer";
import Time from "./Time";
import World from "./World";
import { store } from "../Rtk/Store";
import UndoManager from "undo-manager";
import eventEmitter from "../Utils/MyEventEmitter";
import { EventEmitter } from "events";
import Resources from "./Resources";
import World2 from "./World2";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import { setBackdropState } from "../Rtk/BackdropSlice";

export default class Experience {
  static instance: Experience;
  scene!: THREE.Scene;
  camera!: Camera;
  canvas!: HTMLCanvasElement;
  renderer!: Renderer;
  time!: Time;
  world!: World;
  world2!: World2;
  reactEvents!: EventEmitter;
  reduxStore: any;
  undoManager: any;
  resources!: Resources;
  gui!: GUI;

  constructor(canvas?: HTMLCanvasElement) {
    if (Experience.instance == undefined) {
      if (canvas !== undefined) {
        Experience.instance = this;
        this.reduxStore = store;
        this.reactEvents = eventEmitter;
        this.undoManager = new UndoManager();
        this.gui = new GUI();
        // this.gui.domElement.style.marginTop = '80px';
        this.reduxStore.dispatch(setBackdropState(true));

        this.canvas = canvas;
        this.time = new Time();
        this.scene = new THREE.Scene();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.resources = new Resources();

        const onLoaded = () => {
            this.world2 = new World2();
            // this.world = new World();
            this.resources.removeListener('loaded', onLoaded);
            this.reduxStore.dispatch(setBackdropState(false));
        };
        this.resources.on("loaded", onLoaded);

        this.time.on("update", () => {
          this.update();
        });
      }
    } else {
      return Experience.instance;
    }
  }

  update() {
    if (this.camera) {
      this.camera.update();
    }
    if (this.renderer) {
      this.renderer.render();
    }
    if (this.world) {
      this.world.update();
    }
    if (this.world2) {
      this.world2.update();
    }
  }
}
