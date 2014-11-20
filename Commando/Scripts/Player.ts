module GameObjects {
    export class Player extends createjs.Sprite {
        constructor() {
            super(Manager.Assets.heroSprite,"heroWalk10");
            this.x = 100;
            this.y = 400;
            stage.addChild(this);
            this.assignControls();
        }

        // Bind key actions to player events
        private assignControls() {
            window.onkeydown = this.onControlDown;
            window.onkeyup = this.onControlUp;
        }
        // Switch statement to activate movement and rotation
        private onControlDown(event: KeyboardEvent) {
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
        }
        // switch statement to reset controls
        private onControlUp(event: KeyboardEvent) {
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
        }


        update() {

        }
        destroy() {
            stage.removeChild(this);
        }
    }
} 