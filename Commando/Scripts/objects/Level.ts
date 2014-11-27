module objects {
    export class Level {
        image: createjs.Bitmap;
        constructor() {
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("level1"));
            stage.addChild(this.image);
        }
    }
}