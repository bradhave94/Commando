var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameObjects;
(function (GameObjects) {
    var Skeleton = (function (_super) {
        __extends(Skeleton, _super);
        function Skeleton() {
            _super.call(this, Manager.Assets.skeletonSprite, "SkeletonWalk1");
            this.x = 200;
            this.y = 500;
            stage.addChild(this);
        }
        return Skeleton;
    })(createjs.Sprite);
    GameObjects.Skeleton = Skeleton;
})(GameObjects || (GameObjects = {}));
//# sourceMappingURL=Skeleton.js.map
