var objects;
(function (objects) {
    var Reality = (function () {
        function Reality() {
            this.createPhysics();
            this.createArcadeCanvas();
            this.createDebugCanvas();
            this.createDebugDraw();
        }
        Reality.prototype.createPhysics = function () {
            // Adds gravity to world, no horizontal
            // gravity, but 50 pixel vertical gravity
            this.gravity = new box2d.b2Vec2(0, 50);

            // Creates our Box2D World.CREATION!
            world = new box2d.b2World(this.gravity, true);
        };

        Reality.prototype.createArcadeCanvas = function () {
            arcadeCanvas = config.ARCADE_CANVAS;
        };

        Reality.prototype.createDebugCanvas = function () {
            debugCanvas = config.DEBUG_CANVAS;
            this.debugContext = debugCanvas.getContext("2d"); // set context
        };

        Reality.prototype.createDebugDraw = function () {
            // This is what our box2d bodies get drawn to
            this.debugDraw = new box2d.b2DebugDraw();
            this.debugDraw.SetSprite(this.debugContext);
            this.debugDraw.SetDrawScale(config.SCALE);
            this.debugDraw.SetFillAlpha(0.3); // Set the Opacity of objects
            this.debugDraw.SetLineThickness(1.0);
            this.debugDraw.SetFlags(box2d.b2DebugDraw.e_shapeBit | box2d.b2DebugDraw.e_jointBit);
            world.SetDebugDraw(this.debugDraw); // Set world's draw container
        };

        Reality.prototype.update = function () {
            world.Step(1 / 60, 10, 10);
            world.DrawDebugData();
            world.ClearForces();
        };
        return Reality;
    })();
    objects.Reality = Reality;
})(objects || (objects = {}));
//# sourceMappingURL=reality.js.map
