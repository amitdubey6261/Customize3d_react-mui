import * as THREE from "three";

import { EventEmitter } from "events";
import Experience from "./Experience";
import Resources from "./Resources";
import { setBackdropState } from "../Rtk/BackdropSlice";

export default class AddDelete {
  experience: Experience;
  resources: Resources;
  scene: THREE.Scene;
  reactEvents: EventEmitter;
  reduxStore: any;
  sofa_grp: any;

  constructor() {
    this.experience = new Experience();
    this.resources = this.experience.resources;
    this.reactEvents = this.experience.reactEvents;
    this.reduxStore = this.experience.reduxStore;
    this.scene = this.experience.scene;

    //handle single asset load
    this.reactEvents.on("load", async (e) => {
      if (e.type == "glbModel") {
        //SETTING LOADER
       this.reduxStore.dispatch(setBackdropState(true)) ; 

        //Clearing exting sofa_model  
        this.experience.scene.remove(this.experience.world2.sofa_grp) ; 
        await this.resources.clearResources(this.experience.world2.sofa_grp) ; 
        
        //Clearing new sofa_model  
        this.experience.world2.sofa_grp = new THREE.Group() ; 
        
        await this.resources.load(e.name, e.path, e.type);
        const gltf = this.resources.assets.get(e.name);
        
        gltf.scene.scale.multiplyScalar(2);
        this.experience.world2.sofa_grp.add(gltf.scene) ; 
        
        //Adding new sofa_model  
        this.experience.scene.add( this.experience.world2.sofa_grp ) ; 

        //UNSET LOADER
        this.reduxStore.dispatch(setBackdropState(false)) ; 
      }
    });
  }
}
