import { log } from "console";
import * as PIXI from "pixi.js";
import { Sprite, Spritesheet } from "pixi.js";
import { config } from "./appConfig";
import { Globals } from "./Globals";


export class CarMove {

    sprite!: PIXI.Sprite;
    container: PIXI.Container;
    speed: number;

    constructor(public yPos: number) {
        this.speed = 4;
        this.container = new PIXI.Container();
        this.Car();

    }

    Car() {
        this.sprite = new PIXI.Sprite(Globals.resources['c1'].texture);
        this.sprite.x = config.logicalWidth / 5;
        this.sprite.y = this.yPos;
        this.sprite.angle = 90;
        this.container.addChild(this.sprite);
    }

    Carspeed(dt: number) {
        if (this.sprite.x <= config.logicalWidth + 500)
            this.sprite.x += this.speed * dt;
        else
            this.sprite.x = config.logicalWidth / 15;
    }

    Collision(car: Sprite, player: Sprite) {
        let ab = player.getBounds();
        let bb = car.getBounds();
        if (ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height) {
            console.log(`car x = ${car.x} and car y = ${car.y}`);
            console.log(`player x = ${player.x} and player y = ${player.y}`);
        }


    }
}