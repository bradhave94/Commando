module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "level1", src: "Assets/Images/level1.jpg" },
        { id: "pickup", src: "assets/sounds/coin.mp3" },
        { id: "hurt", src: "assets/sounds/hurt.mp3" },
        { id: "jump", src: "assets/sounds/jump.mp3" }
    ];

   

    export var heroData = {
        "images": ["Assets/Images/Hero/hero.png"],
        "frames": [

            [134, 2, 42, 52],
            [46, 2, 42, 54],
            [90, 2, 42, 54],
            [178, 2, 42, 52],
            [2, 2, 42, 57],
            [222, 2, 42, 52],
            [266, 2, 42, 52],
            [310, 2, 42, 52],
            [354, 2, 42, 52],
            [398, 2, 42, 52],
            [442, 2, 42, 52],
            [486, 2, 42, 52],
            [530, 2, 42, 52],
            [574, 2, 42, 52],
            [618, 2, 42, 52],
            [662, 2, 42, 52],
            [706, 2, 42, 52],
            [750, 2, 14, 17]
        ],
        "animations": {

            "heroWalk": {
                frames: [6, 9, 10, 11, 12, 13, 14, 15, 16, 7, 8],
                speed: 0.2,
            },

            "heroJump": {
                frames: [3, 4, 5,],
                speed: 0.2,
            },

            "heroCrouch": {
                frames: [0, 1, 2, ],
                speed: 0.2,
            },


            "mussleFlare": [17],

            "heroIdle": [7]
        }
    };

    var enemyData = {
        "images": ["assets/images/enemy/enemyAtlas.png"],
        "frames": [

            [162, 564, 60, 119],
            [2, 2, 81, 145],
            [85, 2, 81, 145],
            [168, 2, 81, 145],
            [2, 149, 81, 145],
            [85, 149, 81, 145],
            [168, 149, 81, 145],
            [2, 296, 78, 132],
            [82, 296, 78, 132],
            [82, 296, 78, 132],
            [162, 296, 78, 132],
            [2, 430, 78, 132],
            [2, 430, 78, 132],
            [2, 564, 78, 132],
            [82, 430, 78, 132],
            [82, 430, 78, 132],
            [82, 564, 78, 132],
            [162, 430, 78, 132],
            [162, 430, 78, 132]
        ],
        "animations": {

            "enemyIdle": {
                frames: [0],
                speed: 0.5
            },
            "enemyJump": {
                frames: [1, 6],
                speed: 0.5
            },
            "enemyWalk": {
                frames: [7, 18],
                speed: 0.5
            }
        }
    };

    var coinData = {
        "images": ["assets/images/coin/coinAtlas.png"],
        "frames": [

            [2, 2, 44, 40],
            [48, 2, 44, 40],
            [94, 2, 44, 40],
            [140, 2, 44, 40],
            [186, 2, 44, 40],
            [232, 2, 44, 40],
            [278, 2, 44, 40],
            [324, 2, 44, 40],
            [370, 2, 44, 40],
            [416, 2, 44, 40]
        ],
        "animations": {

            "coin": {
                frames: [0, 9],
                speed: 0.5
            }
        }
    };

    // BitMap Font SpriteSheet Data object
    var bitMapFontData = {
        "images": ["assets/fonts/fontAtlas.png"],
        "frames": [

            [2, 169, 83, 82],
            [768, 166, 32, 81],
            [218, 168, 60, 83],
            [585, 87, 61, 82],
            [307, 85, 68, 81],
            [651, 166, 57, 82],
            [154, 169, 62, 82],
            [525, 170, 58, 81],
            [87, 169, 65, 82],
            [337, 170, 62, 81],
            [275, 2, 82, 81],
            [518, 87, 65, 81],
            [523, 2, 75, 83],
            [600, 2, 75, 80],
            [401, 170, 61, 81],
            [464, 170, 59, 81],
            [2, 84, 83, 83],
            [234, 86, 71, 80],
            [802, 166, 26, 80],
            [713, 84, 61, 80],
            [87, 86, 71, 81],
            [776, 84, 52, 80],
            [442, 2, 79, 80],
            [377, 84, 70, 80],
            [191, 2, 82, 82],
            [648, 84, 63, 80],
            [106, 2, 83, 82],
            [585, 171, 64, 80],
            [280, 168, 55, 83],
            [710, 166, 56, 80],
            [449, 84, 67, 80],
            [359, 2, 81, 80],
            [2, 2, 102, 80],
            [677, 2, 75, 80],
            [754, 2, 73, 80],
            [160, 86, 72, 80]
        ],
        "animations": {

            "0": [0],
            "1": [1],
            "2": [2],
            "3": [3],
            "4": [4],
            "5": [5],
            "6": [6],
            "7": [7],
            "8": [8],
            "9": [9],
            "a": [10],
            "b": [11],
            "c": [12],
            "d": [13],
            "e": [14],
            "f": [15],
            "g": [16],
            "h": [17],
            "i": [18],
            "j": [19],
            "k": [20],
            "l": [21],
            "m": [22],
            "n": [23],
            "o": [24],
            "p": [25],
            "q": [26],
            "r": [27],
            "s": [28],
            "t": [29],
            "u": [30],
            "v": [31],
            "w": [32],
            "x": [33],
            "y": [34],
            "z": [35]
        }
    };

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static heroAtlas: createjs.SpriteSheet;
        public static enemyAtlas: createjs.SpriteSheet;
        public static coinAtlas: createjs.SpriteSheet;
        public static bitMapFont: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            createjs.Sound.alternateExtensions = ["mp3"];
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);

            this.heroAtlas = new createjs.SpriteSheet(heroData);
            this.enemyAtlas = new createjs.SpriteSheet(enemyData);
            this.coinAtlas = new createjs.SpriteSheet(coinData);
            this.bitMapFont = new createjs.SpriteSheet(bitMapFontData);
        }

    }
} 