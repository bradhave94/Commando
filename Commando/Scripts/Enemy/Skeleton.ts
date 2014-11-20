module GameObjects {
    export class Skeleton extends createjs.Sprite {

        constructor() {
            super(Manager.Assets.skeletonSprite, "SkeletonWalk1");
            this.x = 200;
            this.y = 500;
            stage.addChild(this);
        }
    }   
} 