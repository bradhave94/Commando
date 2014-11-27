module config {
    // Canvases
    export var ARCADE_CANVAS = document.getElementById("arcade");
    export var DEBUG_CANVAS = document.getElementById("debug");

    // Some sizes used throughout
    export var WIDTH: number = 800;
    export var HEIGHT: number = 600;
    export var SCALE: number = 30;
    

    // Used for stats
    export var SHOW_FPS: boolean = true;

    // Hero Constants
    export var HERO_LIVES: number = 3;
} 