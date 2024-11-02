import * as THREE from "three";
// import * as TWEEN from "@tweenjs/tween.js";
import {
  DRACOLoader,
  EXRLoader,
  GLTFLoader,
  KTX2Loader,
  RGBELoader,
} from "three/examples/jsm/Addons.js";
import Experience from "./Experience";
import { EventEmitter } from "events";
import { data, datatype } from "../Utils/AssetsData";

export type loadersType = {
  glbloader: GLTFLoader;
  dracoloader: DRACOLoader;
  exrloader: EXRLoader;
  rgbeloader: RGBELoader;
  textureloader: THREE.TextureLoader;
  ktx2loader: KTX2Loader;
};

export default class Resources extends EventEmitter {
  experience: Experience;
  loaders!: loadersType;
  data: datatype[];
  assets: Map<string, any>;
  manager: THREE.LoadingManager;
  reactEvents: EventEmitter;
  initialResourceLoaded: boolean;

  constructor() {
    super();
    this.experience = new Experience();
    this.data = data;
    this.manager = new THREE.LoadingManager();
    this.assets = new Map();
    this.reactEvents = this.experience.reactEvents;
    this.initialResourceLoaded = false;

    this.createLoaders();
    this.handleLoadingManager();
    this.loadModels();
  }

  createLoaders() {
    this.loaders = {
      dracoloader: new DRACOLoader(),
      glbloader: new GLTFLoader(this.manager),
      exrloader: new EXRLoader(this.manager),
      rgbeloader: new RGBELoader(this.manager),
      textureloader: new THREE.TextureLoader(this.manager),
      ktx2loader: new KTX2Loader(),
    };

    this.loaders.exrloader.setDataType(THREE.FloatType);
    this.loaders.rgbeloader.setDataType(THREE.FloatType);

    this.loaders.dracoloader.setDecoderConfig({ type: "js" });
    this.loaders.dracoloader.setDecoderPath(
      "https://www.gstatic.com/draco/v1/decoders/"
    );
    this.loaders.glbloader.setDRACOLoader(this.loaders.dracoloader);

    this.loaders.ktx2loader
      .setTranscoderPath("/basis/")
      .detectSupport(this.experience.renderer.renderer);
    this.loaders.glbloader.setKTX2Loader(this.loaders.ktx2loader);
  }

  loadModels() {
    this.data.forEach((e) => {
      this.load(e.name, e.path, e.type);
    });
  }

  async load(name: string, path: string, type: string) {
    let data: any;
    switch (type) {
      case "glbModel":
        data = await this.loaders.glbloader.loadAsync(path);
        data.scene.traverse((e:any)=>{
            if( e.name.startsWith('CA') ){
                e.castShadow = true ; 
            }
            if( e.name.startsWith('RS') ){
                e.receiveShadow = true ; 
            }
          })
        this.assets.set(name, data);
        break;
      case "texture":
        data = await this.loaders.textureloader.loadAsync(path);
        this.assets.set(name, data);
        break;
      case "hdri":
        data = await this.loaders.rgbeloader.loadAsync(path);
        data.mapping = THREE.EquirectangularReflectionMapping;
        this.assets.set(name, data);
        break;
    }

    return new Promise((res) => {
      res(data);
    });
  }

  handleLoadingManager() {
    this.manager.onStart = (url, itemsLoaded, itemsTotal) => {
      console.log(
        "Started loading file: " +
          url +
          ".\nLoaded " +
          itemsLoaded +
          " of " +
          itemsTotal +
          " files."
      );
    };

    this.manager.onLoad = () => {
      console.log("Loading complete!", this.assets);
      setTimeout(() => {
        if (!this.initialResourceLoaded) {
          this.emit("loaded");
          this.initialResourceLoaded = true;
        }
      }, 1000);
    };

    this.manager.onProgress = (url, itemsLoaded, itemsTotal) => {
      console.log(
        "Loading file: " +
          url +
          ".\nLoaded " +
          itemsLoaded +
          " of " +
          itemsTotal +
          " files."
      );
    };

    this.manager.onError = (url) => {
      console.log("There was an error loading " + url);
    };
  }

  clearResources(elem: THREE.Object3D): Promise<void> {
    return new Promise((resolve) => {
      elem.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.geometry) {
            child.geometry.dispose();
          }

          if (Array.isArray(child.material)) {
            child.material.forEach((material) => {
              if (material && typeof material.dispose === "function") {
                material.dispose();
              }
            });
          } else if (
            child.material &&
            typeof child.material.dispose === "function"
          ) {
            child.material.dispose();
          }
        }
      });

      // Resolve the promise once done
      resolve();
    });
  }
}
