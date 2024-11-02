import * as _ from 'three';

import Experience from './Experience';

export default class Renderer {
    experience: Experience;
    scene: _.Scene;
    camera: _.PerspectiveCamera;
    renderer!: _.WebGLRenderer;

    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.camera = this.experience.camera.camera;

        this.createRenderer();
    }

    createRenderer() {
        this.renderer = new _.WebGLRenderer({
            antialias: true,
            alpha: true,
            canvas: this.experience.canvas,
            depth : true , 
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat : true , 
        })

        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = _.PCFSoftShadowMap;
        this.renderer.outputColorSpace = _.SRGBColorSpace;
        this.renderer.toneMapping = _.NeutralToneMapping ;
        this.renderer.toneMappingExposure = .7;
    }

    render() {
        this.renderer.render(this.experience.scene , this.experience.camera.camera );
    }
}   