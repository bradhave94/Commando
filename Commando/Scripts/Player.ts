module GameObjects {
    export class Player {
        image: createjs.Bitmap;
        constructor() {
            this.image = new createjs.Bitmap(queue.getResult("Level1"));
            stage.addChild(this.image);
        }
    }
} 