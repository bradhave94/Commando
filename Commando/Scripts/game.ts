/// <reference path="gameobjects.ts" />

var stage: createjs.Stage;
var queue;
//Game Objects
var firstLevel: GameObjects.Level;

//Preload our assets
function preload(): void {
    queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", init);
    queue.loadManifest([
        { id: "Level1", src: "Assets/Images/Levels/level1.png" },
        { id: "Player", src: "Assets/Images/Hero/heroWalk10.png" }
            ]);
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
    this.firstLevel = new GameObjects.Level();
}