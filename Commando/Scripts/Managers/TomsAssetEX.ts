module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "pickup", src: "assets/sounds/coin.mp3" },
        { id: "hurt", src: "assets/sounds/hurt.mp3" },
        { id: "jump", src: "assets/sounds/jump.mp3" }
    ];

    var heroData = {
        "images": ["assets/images/hero/heroAtlas.png"],
        "frames": [

            [178, 2, 67, 65],
            [178, 69, 67, 65],
            [178, 136, 67, 65],
            [178, 203, 67, 65],
            [178, 270, 67, 65],
            [178, 337, 67, 65],
            [178, 404, 67, 65],
            [2, 938, 67, 65],
            [90, 464, 67, 65],
            [78, 531, 67, 65],
            [78, 598, 67, 65],
            [78, 665, 67, 65],
            [78, 732, 67, 65],
            [78, 799, 67, 65],
            [78, 866, 67, 65],
            [159, 471, 67, 65],
            [147, 538, 67, 65],
            [147, 605, 67, 65],
            [147, 672, 67, 65],
            [147, 739, 67, 65],
            [147, 806, 67, 65],
            [147, 873, 67, 65],
            [71, 940, 67, 65],
            [140, 940, 67, 65],
            [2, 530, 74, 66],
            [2, 598, 74, 66],
            [2, 666, 74, 66],
            [2, 734, 74, 66],
            [2, 802, 74, 66],
            [2, 870, 74, 66],
            [2, 2, 86, 64],
            [2, 68, 86, 64],
            [90, 2, 86, 64],
            [90, 68, 86, 64],
            [2, 134, 86, 64],
            [90, 134, 86, 64],
            [2, 200, 86, 64],
            [90, 200, 86, 64],
            [2, 266, 86, 64],
            [90, 266, 86, 64],
            [2, 332, 86, 64],
            [90, 332, 86, 64],
            [2, 398, 86, 64],
            [90, 398, 86, 64],
            [2, 464, 86, 64]
        ],
        "animations": {

            "heroIdle": {
                frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
                speed: 0.5,
            }, 
            "heroJump": {
                frames: [24, 25, 26, 27, 28, 29],
                speed: 0.2,
            },
            "heroWalk": {
                frames: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
                speed: 0.5,
            }
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