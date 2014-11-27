var config;
(function (config) {
    // Canvases
    config.ARCADE_CANVAS = document.getElementById("arcade");
    config.DEBUG_CANVAS = document.getElementById("debug");

    // Some sizes used throughout
    config.WIDTH = 800;
    config.HEIGHT = 600;
    config.SCALE = 30;

    // Used for stats
    config.SHOW_FPS = true;

    // Hero Constants
    config.HERO_LIVES = 3;
})(config || (config = {}));
//# sourceMappingURL=config.js.map
