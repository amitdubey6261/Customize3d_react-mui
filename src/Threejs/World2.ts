import * as THREE from "three";
//@ts-ignore
import TWEEN from 'https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.5.0/dist/tween.esm.js';

import Experience from "./Experience";
import Resources from "./Resources";
import AddDelete from "./AddDelete";
import Material from "./Materials";
import eventEmitter from "../Utils/MyEventEmitter";

export default class World2 {
  experience: Experience;
  resources: Resources;
  scene: THREE.Scene;
  sofa_grp: THREE.Group;
  sunlight!: THREE.DirectionalLight;
  redux_store: any;

  constructor() {
    this.sofa_grp = new THREE.Group();
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.redux_store = this.experience.reduxStore;
    this.scene.add(this.sofa_grp);

    this.setupEnvironment();
  }

  setupEnvironment() {
    //HDRI Setup
    const hdri = this.resources.assets.get("Neutral HDRI");
    this.scene.environment = hdri;

    this.resources.assets.forEach((e) => {
      if (e.scene != undefined) {
        e.scene.scale.multiplyScalar(2);
        e.scene.matrixAutoUpdate = false;
        this.scene.add(e.scene);
        e.scene.updateMatrix();
      }
    });

    this.handleLighting();
    new AddDelete();
    new Material();
  }

  handleLighting() {
    const params = {
      color: 0xffffff,
      sunint: 2,
      ambint: 0,
      exposure: 0.624,
    };

    this.sunlight = new THREE.DirectionalLight(params.color, params.sunint);
    this.sunlight.position.set(-26, 12.5, 7);
    this.sunlight.castShadow = true;
    this.scene.add(this.sunlight);

    this.sunlight.shadow.mapSize.width = 2048;
    this.sunlight.shadow.mapSize.height = 2048;
    this.sunlight.shadow.bias = 0.0001;
    this.sunlight.shadow.camera.near = 20;
    this.sunlight.shadow.camera.far = 40;
    this.sunlight.shadow.camera.top = 5;
    this.sunlight.shadow.camera.bottom = -5;
    this.sunlight.shadow.camera.left = -15;
    this.sunlight.shadow.camera.right = 10;

    const amb = new THREE.AmbientLight(0xffffff, params.ambint);
    this.scene.add(amb);

    const startcolor = new THREE.Color(0xffffff);
    const endcolor = new THREE.Color(0x0000ff);

    const sunrise = new TWEEN.Tween(this.sunlight.position)
      .to({ x: -26, y: 12.5, z: 7 })
      .easing(TWEEN.Easing.Cubic.Out);
    const sunset = new TWEEN.Tween(this.sunlight.position)
      .to({ x: -26, y: 12.5, z: -7 })
      .easing(TWEEN.Easing.Cubic.Out);

    const tmapcolorInc = new TWEEN.Tween({
      tonemapping: 0.2,
      color: endcolor.getHex(),
      lampintensity: 20,
    })
      .to({ tonemapping: 0.63, color: startcolor.getHex(), lampintensity: 0.2 })
      .easing(TWEEN.Easing.Cubic.Out)
      .onUpdate((e:any) => {
        this.experience.renderer.renderer.toneMappingExposure = e.tonemapping;
        const color = new THREE.Color().lerpColors(startcolor, endcolor, 0);
        this.sunlight.color.set(color);
      });

    const tmapcolorDec = new TWEEN.Tween({
      tonemapping: 0.63,
      color: startcolor.getHex(),
      lampintensity: 0.2,
    })
      .to({ tonemapping: 0.2, color: endcolor.getHex(), lampintensity: 20 })
      .easing(TWEEN.Easing.Cubic.Out)
      .onUpdate((e:any) => {
        this.experience.renderer.renderer.toneMappingExposure = e.tonemapping;
        const color = new THREE.Color().lerpColors(startcolor, endcolor, 0.5);
        this.sunlight.color.set(color);
      });

    const SunSet = () => {
      sunset.start();
      tmapcolorDec.start();
    };

    //@ts-ignore
    const SunRise = () => {
      sunrise.start();
      tmapcolorInc.start();
    };

    eventEmitter.on('SUN_ON' , ()=>{
      SunSet() ; 
    })
    
    eventEmitter.on('SUN_OFF', ()=>{
      SunRise() ; 
    })

    setTimeout(() => {
      SunSet();
    }, 500);
  }

  update() {
    TWEEN.update();
  }
}
