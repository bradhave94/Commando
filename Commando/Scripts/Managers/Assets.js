var Manager;
(function (Manager) {
    Manager.assetManifest = [{ id: "Level1", src: "Assets/Images/Levels/level1.png" }];

    Manager.skeletonData = {
        "images": ["Assets/Images/Skeleton/Skeleton.png"],
        "frames": [
            [310, 2, 75, 79],
            [2, 2, 75, 80],
            [79, 2, 75, 80],
            [156, 2, 75, 80],
            [233, 2, 75, 80],
            [387, 2, 55, 49],
            [444, 2, 55, 49],
            [501, 2, 55, 49],
            [558, 2, 55, 49],
            [615, 2, 55, 49],
            [672, 2, 55, 49],
            [729, 2, 55, 49]
        ],
        "animations": {
            "SkeletonAttack1": [0],
            "SkeletonAttack2": [1],
            "SkeletonAttack3": [2],
            "SkeletonAttack4": [3],
            "SkeletonAttack5": [4],
            "SkeletonWalk1": [5],
            "SkeletonWalk2": [6],
            "SkeletonWalk3": [7],
            "SkeletonWalk4": [8],
            "SkeletonWalk5": [9],
            "SkeletonWalk6": [10],
            "SkeletonWalk7": [11]
        }
    };
    Manager.heroData = {
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
            "heroCrouch1": [0],
            "heroCrouch2": [1],
            "heroCrouch3": [2],
            "heroJump1": [3],
            "heroJump2": [4],
            "heroJump3": [5],
            "heroWalk1": [6],
            "heroWalk10": [7],
            "heroWalk11": [8],
            "heroWalk2": [9],
            "heroWalk3": [10],
            "heroWalk4": [11],
            "heroWalk5": [12],
            "heroWalk6": [13],
            "heroWalk7": [14],
            "heroWalk8": [15],
            "heroWalk9": [16],
            "mussleFlare": [17]
        }
    };

    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(Manager.assetManifest);
            this.heroSprite = new createjs.SpriteSheet(Manager.heroData);
            this.skeletonSprite = new createjs.SpriteSheet(Manager.skeletonData);
        };
        return Assets;
    })();
    Manager.Assets = Assets;
})(Manager || (Manager = {}));
//# sourceMappingURL=Assets.js.map
