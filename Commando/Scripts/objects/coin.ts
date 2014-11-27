/// <reference path="../managers/asset.ts" />
/// <reference path="../box2d.ts" />
/// <reference path="../config.ts" />

module objects {
    export class Coin{
        bodyDef: Box2D.Dynamics.b2BodyDef;
        fixDef: Box2D.Dynamics.b2FixtureDef;
        fixDefShape: Box2D.Collision.Shapes.b2PolygonShape;
        body;
        view: createjs.Sprite;
        width: number;
        height: number;
        constructor() {
            this.view = new createjs.Sprite(managers.Assets.coinAtlas, "coin");

            this.width = this.view.getBounds().width / config.SCALE;
            this.height = this.view.getBounds().height / config.SCALE;

            this.view.regX = this.view.getBounds().width * 0.5 * config.SCALE;
            this.view.regY = this.view.getBounds().height * 0.5 * config.SCALE;
            
            this.createFixtureDefinition();
            this.createBodyDefinition();
            this.createCoin();
        }

        createFixtureDefinition() {
            this.fixDef = new box2d.b2FixtureDef();
            this.fixDef.density = 1.0;
            this.fixDef.friction = 0.2; // Add some Resistance
            this.fixDef.restitution = 0.2; // Add a little bounce

            // Define the shape, which will be a Polygon
            this.fixDefShape = new box2d.b2PolygonShape();
            this.fixDefShape.SetAsBox(this.width * 0.5, this.height * 0.5);

            this.fixDef.shape = this.fixDefShape;
        }

        createBodyDefinition() {
            this.bodyDef = new box2d.b2BodyDef();
            this.bodyDef.userData = this.view;
            this.bodyDef.type = box2d.b2Body.b2_dynamicBody;
            this.bodyDef.position.Set(this.view.x / config.SCALE, this.view.y / config.SCALE);
            this.bodyDef.fixedRotation = true; // prevent coin rotation
        }
        
        createCoin() {
            // Add Coin to world
            this.body = world.CreateBody(this.bodyDef)
            this.body.CreateFixture(this.fixDef);

            // Disallows our Hero from being disabled
            // or uncontrollable when he is not moving
            this.body.SetSleepingAllowed(false);

            // A velocity of zero
            this.body.SetLinearVelocity(new box2d.b2Vec2(0, 0));

            // And no spin
            this.body.SetAngularVelocity(0);

            // position Enemy
            var randomX = Math.floor(Math.random() * (stage.canvas.width - 30) + 30);
            this.body.SetPosition(new box2d.b2Vec2(randomX / config.SCALE, -this.height / config.SCALE));
        }

        update() {
            var finalVelocity, impulse, position, velocity;

            // Move our view (Our EaselJS Bitmap)
            // to the new coordinates to match the
            // Box2D Body's position of the hero
            position = this.body.GetPosition();
            console.log(position);

            this.view.x = position.x * config.SCALE;
            this.view.y = position.y * config.SCALE;

            // Gets the current spinning angle
            this.view.rotation = this.body.GetAngle() * (180 / Math.PI);
        }
    }
}