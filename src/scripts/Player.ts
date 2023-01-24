import * as PIXI from "pixi.js";
import { config } from "./appConfig";
import { Globals } from "./Globals";


export class Player {
    container: PIXI.Container;
    playersprite!: PIXI.Sprite;

    constructor() {
        this.container = new PIXI.Container();
        this.container.interactive = true;
        this.PlayerCreate();
        this.inputSystem();
    }

    PlayerCreate() {
        this.playersprite = new PIXI.Sprite(Globals.resources['player'].texture);
        this.playersprite.x = config.logicalWidth / 2;
        this.playersprite.y = config.logicalHeight / 2 + 880;
        this.container.addChild(this.playersprite);
    }



    inputSystem() {
        window.addEventListener('keyup', (event) => {
            var name = event.key;
            var code = event.code;
            if (event.key === "ArrowUp" && this.playersprite.y > 13) {
                this.playersprite.y -= 30;

            }
            else if (event.key === "ArrowDown" && this.playersprite.y < 1840) {
                this.playersprite.y += 30;
            }
            else if (event.key === "ArrowLeft" && this.playersprite.x > 30) {
                this.playersprite.x -= 30;
            }
            else if (event.key === "ArrowRight" && this.playersprite.x < 1020) {
                this.playersprite.x += 30;
            }

        }, false);
    }
}