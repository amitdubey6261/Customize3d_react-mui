import {EventEmitter} from 'events' ; 
import Stats from 'three/examples/jsm/libs/stats.module.js';

export default class Time extends EventEmitter{
    start : number ; 
    current : number ; 
    elapsed : number ; 
    delta : number ; 
    stats : Stats ; 
    
    constructor(){
        super() ; 
        this.start = Date.now() ;
        this.current = this.start ; 
        this.elapsed = 0 ; 
        this.delta = 16 ; 
        this.stats = new Stats() ; 
        
        this.update() ; 
    }

    update():void{
        this.stats.begin() ; 
        const currentTime: number = Date.now();
        this.current = currentTime - this.current ; 
        this.current = currentTime ; 
        this.elapsed = this.current - this.start ; 

        this.emit('update');
        window.requestAnimationFrame(this.update.bind(this));
        this.stats.end() ; 
    }
}