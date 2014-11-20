/// <reference path="gameobjects.ts" />
var stage;
var queue;

//Game Objects
var firstLevel;

//Preload our assets
function preload() {
    queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", init);
    queue.loadManifest([
        { id: "Level1", src: "Assets/Images/Levels/level1.png" },
        { id: "Player", src: "Assets/Images/Hero/heroWalk10.png" }
    ]);
}

//Init function, called when the body of the html page is loaded. Enables mouse over and ticker
function init() {
    State.MAINMENU = true;
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    gameStart();
}

// Game Loop, called every frame. Update game objects
function gameLoop(event) {
    stage.update();
}

//Initialize objects on start.
function gameStart() {
    firstLevel = new GameObjects.Level();
}
//# sourceMappingURL=game.js.map
