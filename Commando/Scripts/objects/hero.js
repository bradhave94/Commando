/// <reference path="../box2d.ts" />
/// <reference path="../config.ts" />
/// <reference path="../keys.ts" />
/// <reference path="../controls.ts" />
/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    var Hero = (function () {
        function Hero() {
            this.MAX_SPEED = 30;
            this.JUMP_TIMEOUT = 1000;
            this.JUMP_HEIGHT = 110;
            // Set our Hero controls initially to false
            // Sets last jump time to zero, to allow
            // for jumping immediately
            this.lastJumpTime = 0;

            this.view = new createjs.Sprite(managers.Assets.heroAtlas, "heroIdle");

            this.width = this.view.getBounds().width / config.SCALE;
            this.height = this.view.getBounds().height / config.SCALE;

            this.view.regX = this.width * 0.5 * config.SCALE;
            this.view.regY = this.height * 0.5 * config.SCALE;

            this.createFixtureDefinition();
            this.createBodyDefinition();
            this.createHero();

            // Set up movement and controls
            this.assignControls();
        }
        Hero.prototype.createFixtureDefinition = function () {
            this.fixDef = new box2d.b2FixtureDef();
            this.fixDef.density = 1.0;
            this.fixDef.friction = 0.2; // Add some Resistance
            this.fixDef.restitution = 0.2; // Add a little bounce

            // Define the shape, which will be a Polygon
            this.fixDefShape = new box2d.b2CircleShape();
            this.fixDefShape.SetRadius(this.width * 0.5);

            //this.fixDefShape.SetAsBox(this.width * 0.65, this.height * 0.5);
            this.fixDef.shape = this.fixDefShape;
        };

        Hero.prototype.createBodyDefinition = function () {
            this.bodyDef = new box2d.b2BodyDef();
            this.bodyDef.userData = this.view;
            this.bodyDef.type = box2d.b2Body.b2_dynamicBody;
            this.bodyDef.position.Set(this.view.x / config.SCALE, this.view.y / config.SCALE);
            this.bodyDef.fixedRotation = true; // prevent player rotation
        };

        Hero.prototype.createHero = function () {
            // Add Hero to world
            this.body = world.CreateBody(this.bodyDef);
            this.body.CreateFixture(this.fixDef);

            // Disallows our Hero from being disabled
            // or uncontrollable when he is not moving
            this.body.SetSleepingAllowed(false);

            // A velocity of zero
            this.body.SetLinearVelocity(new box2d.b2Vec2(0, 0));

            // And no spin
            this.body.SetAngularVelocity(0);

            // position Hero
            this.body.SetPosition(new box2d.b2Vec2(65 / config.SCALE, -this.height / config.SCALE));
        };

        Hero.prototype.assignControls = function () {
            // Binds key actions
            window.onkeydown = this.onControlDown;
            window.onkeyup = this.onControlUp;
        };

        Hero.prototype.onControlDown = function (e) {
            switch (e.which) {
                case keys.LEFT:
                case keys.A:
                    controls.left = true;
                    controls.lTally++;
                    controls.rTally = 0;
                    break;
                case keys.RIGHT:
                case keys.D:
                    controls.right = true;
                    controls.rTally++;
                    controls.lTally = 0;
                    break;
                case keys.SPACEBAR:
                case keys.W:
                case keys.UP:
                    controls.jumping = true;
                    break;
            }
        };

        Hero.prototype.onControlUp = function (e) {
            switch (e.which) {
                case keys.LEFT:
                case keys.A:
                    controls.left = false;
                    break;
                case keys.RIGHT:
                case keys.D:
                    controls.right = false;
                    break;
                case keys.SPACEBAR:
                case keys.W:
                case keys.UP:
                    controls.jumping = false;
                    break;
            }
        };

        Hero.prototype.onGround = function () {
            // If our Hero body is making contact
            // with another body, let him jump
            var contacts;
            contacts = this.body.GetContactList();
            return contacts && contacts.contact.IsTouching();
        };

        Hero.prototype.jumpTimePassed = function () {
            // At least the this.JUMP_TIMEOUT value has
            // passed since the last jump to disable
            // repeatable jumping.
            return createjs.Ticker.getTime() - this.lastJumpTime > this.JUMP_TIMEOUT;
        };

        // Fires on each iteration of our Game Loop
        Hero.prototype.update = function () {
            // Return if game currently paused
            var finalVelocity, impulse, position, velocity;

            /*     if (e.paused) {
            return;
            } */
            // Get the current position of our Hero
            position = this.body.GetPosition();

            // Get how fast
            velocity = this.body.GetLinearVelocity();

            // Move our view (Our EaselJS Bitmap)
            // to the new coordinates to match the
            // Box2D Body's position of the hero
            this.view.x = position.x * config.SCALE;
            this.view.y = position.y * config.SCALE;

            // Gets the current spinning angle
            this.view.rotation = this.body.GetAngle() * (180 / Math.PI);

            // Set the final velocity to the current
            // velocity
            finalVelocity = velocity.x;

            // Jumping
            if (controls.jumping && this.onGround() && this.jumpTimePassed()) {
                // Assign the last jump time to the current
                // time of the running game
                this.lastJumpTime = createjs.Ticker.getTime();

                // Apply an impulse by defining a new vector
                // point with a negative Y value-- jump height
                impulse = new box2d.b2Vec2(0, -this.JUMP_HEIGHT);
                this.body.ApplyImpulse(impulse, position);
                this.view.gotoAndPlay("heroJump");
                createjs.Sound.play("jump");
                controls.lTally = 0;
                controls.rTally = 0;
            }

            if (controls.right && velocity.x < this.MAX_SPEED) {
                finalVelocity += (velocity.x > 0 ? 0.45 : 0.6);

                this.view.scaleX = 1;

                // Only Play walk Animation once
                if (controls.rTally == 1) {
                    this.view.gotoAndPlay("heroWalk");
                }
            } else if (controls.left && velocity.x > -this.MAX_SPEED) {
                // Same as above, just different direction
                finalVelocity -= (velocity.x < 0 ? 0.45 : 0.6);

                // Slowing down
                this.view.scaleX = -1;

                // Only Play walk Animation once
                if (controls.lTally == 1) {
                    this.view.gotoAndPlay("heroWalk");
                }
            } else if (Math.abs(velocity.x) > 0.015) {
                // The lower this is the faster our hero
                // will slow down
                finalVelocity *= 0.96;
                // Come to a stop
            } else {
                finalVelocity = 0;
                this.view.gotoAndPlay("heroIdle");
            }

            // Set a new vector point for the hero
            // and apply the new linear velocity(left
            // and right) to our Hero's Box2D Body.
            velocity = new box2d.b2Vec2(finalVelocity, velocity.y);
            this.body.SetLinearVelocity(velocity);
        };
        return Hero;
    })();
    objects.Hero = Hero;
})(objects || (objects = {}));
//# sourceMappingURL=hero.js.map
