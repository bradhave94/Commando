var objects;
(function (objects) {
    var Level = (function () {
        function Level() {
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("level1"));
            stage.addChild(this.image);
        }
        return Level;
    })();
    objects.Level = Level;
})(objects || (objects = {}));
//# sourceMappingURL=Level.js.map
