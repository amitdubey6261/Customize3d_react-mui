import * as _ from "three";
import Experience from "./Experience";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";

export default class Camera {
  experience: Experience;
  camera: _.PerspectiveCamera;
  ctrls!: OrbitControls;
  gui: GUI;

  constructor() {
    this.experience = new Experience();
    this.camera = new _.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      20
    );
    // this.camera.position.set( 0 , 5 , 5 );
    this.camera.position.set( -0.14 , 3 , 0 );
    this.gui = this.experience.gui;

    // this.debugCam();
    this.intitOrbit();
  }

  intitOrbit() {
    this.ctrls = new OrbitControls(this.camera, this.experience.canvas);
    this.ctrls.target.set( 0 , 2.5 , -12 ) ; 
    this.ctrls.enableDamping = true;
    this.ctrls.maxDistance = 10;
    this.ctrls.zoomSpeed = 2;
    this.ctrls.enablePan = true;
    this.update();
  }

  update() {
    this.camera.position.x = _.MathUtils.clamp(this.camera.position.x , -5 , 2 ) ; 
    this.camera.position.y = _.MathUtils.clamp(this.camera.position.y , 1 , 5 ) ; 
    this.camera.position.z = _.MathUtils.clamp(this.camera.position.z , -10 , 0 ) ; 
    this.ctrls.update();
  }
}
