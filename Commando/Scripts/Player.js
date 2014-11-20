var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameObjects;
(function (GameObjects) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            _super.call(this, Manager.Assets.heroSprite, "heroWalk10");
            this.x = 100;
            this.y = 400;
            stage.addChild(this);
            this.assignControls();
        }
        // Bind key actions to player events
        Player.prototype.assignControls = function () {
            window.onkeydown = this.onControlDown;
            window.onkeyup = this.onControlUp;
        };

        // Switch statement to activate movement and rotation
        Player.prototype.onControlDown = function (event) {
            switch (event.keyCode) {
                case Keys.A:
                case Keys.LEFT:
                    Controls.LEFT = true;
                    break;
                case Keys.D:
                case Keys.RIGHT:
                    Controls.RIGHT = true;
                    break;
                case Keys.W:
                case Keys.UP:
                    Controls.JUMP = true;
                    break;
                case Keys.S:
                case Keys.DOWN:
                    Controls.CROUCH = true;
                    break;
                case Keys.SPACE:
                    Controls.SHOOT = true;
                    break;
            }
        };

        // switch statement to reset controls
        Player.prototype.onControlUp = function (event) {
            switch (event.keyCode) {
                case Keys.A:
                case Keys.LEFT:
                    Controls.LEFT = false;
                    break;
                case Keys.D:
                case Keys.RIGHT:
                    Controls.RIGHT = false;
                    break;
                case Keys.W:
                case Keys.UP:
                    Controls.JUMP = false;
                    break;
                case Keys.S:
                case Keys.DOWN:
                    Controls.CROUCH = false;
                    break;
                case Keys.SPACE:
                    Controls.SHOOT = false;
                    break;
            }
        };

        Player.prototype.update = function () {
        };
        Player.prototype.destroy = function () {
            stage.removeChild(this);
        };
        return Player;
    })(createjs.Sprite);
    GameObjects.Player = Player;
})(GameObjects || (GameObjects = {}));
//# sourceMappingURL=Player.js.map
