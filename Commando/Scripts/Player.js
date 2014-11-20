var GameObjects;
(function (GameObjects) {
    var Player = (function () {
        function Player() {
            this.image = new createjs.Bitmap(queue.getResult("Level1"));
            stage.addChild(this.image);
        }
        return Player;
    })();
    GameObjects.Player = Player;
})(GameObjects || (GameObjects = {}));
//# sourceMappingURL=Player.js.map
