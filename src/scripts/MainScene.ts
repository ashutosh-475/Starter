import * as PIXI from 'pixi.js';
import { config } from './appConfig';
import { Globals } from './Globals';
import { Scene } from './Scene';
import { CarMove } from './CarMove';
import { Player } from './Player';



export class MainScene extends Scene {

    bg!: PIXI.Sprite;
    array!: PIXI.Sprite[];
    speed !: number;
    car: CarMove[]= [];
    y_array : number[]=[config.logicalHeight/1.2, config.logicalHeight / 1.4, config.logicalHeight / 2, config.logicalHeight / 2.6, config.logicalHeight / 6, config.logicalHeight / 18];
    player: Player;

    constructor() {
        super(0xffff);
        this.BackgroundCreate();
        for (let i = 0; i < 1; i++)   {
            this.car[i] = new CarMove(this.y_array[i]);
            this.mainContainer.addChild(this.car[i].container);     
        }    
        this.player = new Player();
        this.mainContainer.addChild(this.player.container);
    }

    BackgroundCreate() {
        this.array = [];
        for (let i = 0; i < 3; i++) {
            this.BackgroundCreation(i);
        }
    }

    BackgroundCreation(i: number) 
    {
        this.bg = new PIXI.Sprite(Globals.resources['bg1'].texture);
        this.bg.x = config.logicalWidth / 2;
        this.bg.y = this.bg.height + 950 - 650 * i;
        this.bg.anchor.set(0.5);
        this.bg.scale.set(0.8, 1.7);
        this.bg.angle = 90;
        this.mainContainer.addChild(this.bg);       
        this.array.push(this.bg);
    }

    update(dt: number): void {
        for (let i = 0; i < 1; i++) {
            this.car[i].Carspeed(dt);
            this.car[i].Collision(this.car[i].sprite,this.player.playersprite);
        }
    }


    recievedMessage(msgType: string, msgParams: any): void {
        // throw new Error('Method not implemented.');
    }
}