let gameConfig = {
    type: Phaser.AUTO,
<<<<<<< HEAD
    width: 960,
=======
    width: 1500,
>>>>>>> origin/main
    height: 540,
    backgroundColor: '#ffffff',
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: new Tableau1()
};
let game = new Phaser.Game(gameConfig);
