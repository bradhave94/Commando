/// <reference path="label.ts" />
var objects;
(function (objects) {
    // Scoreboard Class
    var Scoreboard = (function () {
        function Scoreboard() {
            this.livesValueLabelString = "";
            this.scoreValueLabelString = "";
            this.lives = config.HERO_LIVES;
            this.score = 0;

            this.livesLabel = new objects.Label(stage.canvas.width * 0.10, 0, "lives");
            this.livesLabel.regX = 0;
            this.livesLabel.regY = 0;
            this.livesLabel.fontSize(40);

            this.livesValueLabel = new objects.Label(stage.canvas.width * 0.10, 40, this.lives.toString());
            this.livesValueLabel.regX = 0;
            this.livesValueLabel.regY = 0;
            this.livesValueLabel.fontSize(40);

            this.scoreLabel = new objects.Label(stage.canvas.width * 0.60, 0, "score");
            this.scoreLabel.regX = 0;
            this.scoreLabel.regY = 0;
            this.scoreLabel.fontSize(40);

            this.scoreValueLabel = new objects.Label(stage.canvas.width * 0.60, 40, this.score.toString());
            this.scoreValueLabel.regX = 0;
            this.scoreValueLabel.regY = 0;
            this.scoreValueLabel.fontSize(40);

            this.update();

            this.showScoreBoard();
        }
        Scoreboard.prototype.showScoreBoard = function () {
            stage.addChild(this.livesLabel);
            stage.addChild(this.livesValueLabel);
            stage.addChild(this.scoreLabel);
            stage.addChild(this.scoreValueLabel);
        };

        Scoreboard.prototype.update = function () {
            this.livesValueLabelString = this.lives.toString();
            this.livesValueLabel.text = this.livesValueLabelString;

            this.scoreValueLabelString = this.score.toString();
            this.scoreValueLabel.text = this.scoreValueLabelString;
        };

        Scoreboard.prototype.destroy = function () {
            stage.removeChild(this.livesLabel);
            stage.removeChild(this.livesValueLabel);
            stage.removeChild(this.scoreLabel);
            stage.removeChild(this.scoreValueLabel);
        };
        return Scoreboard;
    })();
    objects.Scoreboard = Scoreboard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map
