var GameObjects;
(function (GameObjects) {
    var Level = (function () {
        function Level() {
            this.image = new createjs.Bitmap(queue.getResult("Level1"));
            stage.addChild(this.image);
        }
        return Level;
    })();
    GameObjects.Level = Level;
})(GameObjects || (GameObjects = {}));
//# sourceMappingURL=gameobjects.js.map
