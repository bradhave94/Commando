/// <reference path="gameobjects.ts" />

var stage: createjs.Stage;
var queue;
//Game Objects
var firstLevel: GameObjects.Level;
var player: GameObjects.Player;
var skeleton: GameObjects.Skeleton;
//Preload our assets
function preload(): void {
    Manager.Assets.init();
    Manager.Assets.loader.addEventListener("complete", init);
        
}

//Init function, called when the body of the html page is loaded. Enables mouse over and ticker
function init(): void {
    
    State.MAINMENU = true;
    stage = new createjs.Stage(document.getElementById("canvas"));
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    gameStart();
}

// Game Loop, called every frame. Update game objects
function gameLoop(event): void {


    stage.update();
}

//Initialize objects on start.
function gameStart(): void {
    firstLevel = new GameObjects.Level();
    player = new GameObjects.Player();
    skeleton = new GameObjects.Skeleton();
}