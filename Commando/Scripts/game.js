/// <reference path="box2d.ts" />
/// <reference path="config.ts" />
/// <reference path="keys.ts" />
/// <reference path="controls.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/reality.ts" />
/// <reference path="objects/platform.ts" />
/// <reference path="objects/hero.ts" />
/// <reference path="objects/enemy.ts" />
/// <reference path="objects/coin.ts" />
// Game Variables
var arcadeCanvas;
var debugCanvas;
var stats;
var stage;
var ground;
var level;

// Physics Variables
var world;
var reality;

// Game Objects
var hero;
var coin;
var scoreboard;

function preload() {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}

function init() {
    // Setup box2d reality
    reality = new objects.Reality();
    stage = new createjs.Stage(arcadeCanvas);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    setupStats();
    gameStart();
}

function gameLoop(event) {
    // Start counting for FPS stats
    if (config.SHOW_FPS) {
        this.stats.begin();
    }
    hero.update();
    if (controls.right == true) {
        level.image.x -= 5;
    }

    //  scoreboard.update();
    stage.update();

    reality.update();

    // End counting for FPS stats
    if (config.SHOW_FPS) {
        return this.stats.end();
    }
}

function setupStats() {
    // Uses stats.js
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}

function gameStart() {
    ground = new objects.Platform(0, 20.8, 500, 1);

    //stage.addChild(ground.view);
    var leftWall = new objects.Platform(0, 0, 1, 40);
    stage.addChild(leftWall.view);

    var rightWall = new objects.Platform(1020, 0, 1, 40);
    stage.addChild(rightWall.view);

    level = new objects.Level();

    var platform1 = new objects.Platform(8, 16, 5, 1);
    stage.addChild(platform1.view);

    //var platform2 = new objects.Platform(11, 12, 5, 1);
    //stage.addChild(platform2.view);
    //var platform3 = new objects.Platform(14, 8, 5, 1);
    //stage.addChild(platform3.view);
    //var platform4 = new objects.Platform(22, 5, 9, 1);
    //stage.addChild(platform4.view);
    hero = new objects.Hero();
    stage.addChild(hero.view);

    //  scoreboard = new objects.Scoreboard();
    var fixDef = new box2d.b2FixtureDef;
    fixDef.density = 0.5;
    fixDef.friction = 0.2;
    fixDef.restitution = 0.5;

    var bodyDef = new box2d.b2BodyDef;
    var fixDefShape;
    //create some objects
    /*    bodyDef.type = box2d.b2Body.b2_dynamicBody;
    for (var i = 0; i < 10; ++i) {
    if (Math.random() > 0.5) {
    fixDefShape = new box2d.b2PolygonShape();
    fixDefShape.SetAsBox(
    Math.random() + 0.1 //half width
    , Math.random() + 0.1 //half height
    );
    fixDef.shape = fixDefShape;
    } else {
    fixDefShape = new box2d.b2CircleShape(
    Math.random() + 0.1 //radius
    );
    fixDef.shape = fixDefShape;
    }
    bodyDef.position.x = Math.random() * stage.canvas.width / config.SCALE;
    bodyDef.position.y = Math.random() * stage.canvas.height / config.SCALE;
    world.CreateBody(bodyDef).CreateFixture(fixDef);
    } */
}
//# sourceMappingURL=game.js.map
