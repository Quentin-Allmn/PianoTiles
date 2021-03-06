
class Tableau1 extends Phaser.Scene {

    /**
     * précharge des assets
     */
    preload() {
        this.load.image('homer', 'assets/homer-simpson.png');
        this.load.image('bart', 'assets/bart-simpson.png');
        this.load.image('lisa', 'assets/lisa-simpson.png');
        this.load.image('moe', 'assets/moe.png');
        this.load.image('skinner', 'assets/skinner.png');

        this.load.image('quimby', 'assets/quimby.png');
        this.load.image('gros-tony', 'assets/gros-tony.png');
        this.load.image('luigi-risotto', 'assets/luigi_risotto.png');
        this.load.image('lenny-carl', 'assets/lenny-carl.png');
        this.load.image('pathy-selma', 'assets/pathy-selma.png');

        this.load.image('krusty', 'assets/krusty.png');
        this.load.image('burns', 'assets/burns.png');
        this.load.image('lovejoy', 'assets/Lovejoy.png');
        this.load.image('barney', 'assets/barney.png');
        this.load.image('wiggum', 'assets/wiggum.png');

        this.load.image('dr-hibbert', 'assets/dr-hibbert.png');
        this.load.image('edna', 'assets/edna.png');
        this.load.image('nelson', 'assets/nelson.png');
        this.load.image('martin', 'assets/martin.png');
        this.load.image('marge', 'assets/marge.png');

        this.load.image('eglise', 'assets/eglise.png');
        this.load.image('bd', 'assets/bd.png');
        this.load.image('taverne', 'assets/taverne.png');
        this.load.image('ned', 'assets/ned.png');
        this.load.image('duffman', 'assets/duffman2.png');

        for (let h = 1; h <= 4; h++) {
            this.load.image('donut' + h, 'assets/animation/donut-' + h + '.png');
        }
        for (let h = 1; h <= 4; h++) {
            this.load.image('duff' + h, 'assets/animation2/duff-' + h + '.png');
        }
    }

/**
 * création de la scène
 */
    create() {
    //positionnement d'Homer
    this.homer = this.add.image(450, 220, 'homer').setOrigin(0, 0);
    this.homer.setVisible(false)

    //positionnement de Lisa
    this.lisa = this.add.image(350,400,'lisa').setOrigin(0,0);
    this.lisa.setVisible(false)
    this.lisa.scale=0.5

    //positionnement de Bart
    this.bart = this.add.image(750,450,'bart').setOrigin(0,0);
    this.bart.setVisible(false)
    this.bart.scale=0.5

    //positionnement de Moe
    this.moe= this.add.image(350,150,'moe').setOrigin(0,0);
    this.moe.setVisible(false)
    this.moe.scale=0.5

    //positionnement de Skinner
    this.skinner = this.add.image(30,450,'skinner').setOrigin(0,0);
    this.skinner.setVisible(false)
    this.skinner.scale=0.5

    //positionnement de Quimby
    this.quimby = this.add.image(650,650,'quimby').setOrigin(0,0);
    this.quimby.setVisible(false)

    //positionnement de Gros Tony
    this.grostony = this.add.image(900,20,'gros-tony').setOrigin(0,0);
    this.grostony.setVisible(false)
    this.grostony.scale=0.5

    //positionnement de Luigi
    this.luigi = this.add.image(500,20,'luigi-risotto').setOrigin(0,0);
    this.luigi.setVisible(false)
    this.luigi.scale=0.5

    //positionnement de Lenny et Carl
    this.lenny = this.add.image(700,20,'lenny-carl').setOrigin(0,0);
    this.lenny.setVisible(false)
    this.lenny.scale=0.5

    //positionnement de Pathy et Selma
    this.pathy = this.add.image(175,300,'pathy-selma').setOrigin(0,0);
    this.pathy.setVisible(false)
    this.pathy.scale=0.25

    //positionnement de Krusty
    this.krusty = this.add.image(500,650,'krusty').setOrigin(0,0);
    this.krusty.setVisible(false)
    this.krusty.scale=0.5

    //positionnement de Barney
    this.barney = this.add.image(350,10,'barney').setOrigin(0,0);
    this.barney.setVisible(false)
    this.barney.scale=0.5

    //positionnement de Mr Burns et de Smithers
    this.burns = this.add.image(1100,350,'burns').setOrigin(0,0);
    this.burns.setVisible(false)
    this.burns.scale=0.3

    //positionnement de Lovejoy
    this.lovejoy = this.add.image(840,500,'lovejoy').setOrigin(0,0);
    this.lovejoy.setVisible(false)

    //positionnement du Chef Wiggum
    this.wiggum = this.add.image(1000,200,'wiggum').setOrigin(0,0);
    this.wiggum.setVisible(false)
    this.wiggum.scale=0.5

    //positionnement de Nelson
    this.nelson = this.add.image(300,650,'nelson').setOrigin(0,0);
    this.nelson.setVisible(false)
    this.nelson.scale=0.25

    //positionnement d'Edna
    this.edna = this.add.image(150,450,'edna').setOrigin(0,0);
    this.edna.setVisible(false)

    //positionnement du Dr Hibbert
    this.hibbert = this.add.image(800,250,'dr-hibbert').setOrigin(0,0);
    this.hibbert.setVisible(false)
    this.hibbert.scale=0.5

    //positionnement de Martin
    this.martin = this.add.image(1200,220,'martin').setOrigin(0,0);
    this.martin.setVisible(false)
    this.martin.scale=0.25

    //positionnement de Marge et Maggie
    this.marge = this.add.image(500,200,'marge').setOrigin(0,0);
    this.marge.setVisible(false)
    this.marge.scale=0.5

    //positionnement de Ned
    this.ned = this.add.image(1000,450,'ned').setOrigin(0,0);
    this.ned.setVisible(false)
    this.ned.scale=0.5

    //positionnement de Duffman
    this.duffman = this.add.image(50,200,'duffman').setOrigin(0,0);
    this.duffman.setVisible(false)
    this.duffman.scale=0.5

    //positionnement de la Taverne de Moe
    this.taverne = this.add.image(50,10,'taverne').setOrigin(0,0);
    this.taverne.setVisible(false)
    this.taverne.scale=0.5

    //positionnement du Magasin de BD
    this.bd = this.add.image(1100,20,'bd').setOrigin(0,0);
    this.bd.setVisible(false)
    this.bd.scale=0.5
    this.bd.flipX=true

    //positionnement de l'église
    this.eglise = this.add.image(1100,550,'eglise').setOrigin(0,0);
    this.eglise.setVisible(false)
    this.eglise.scale=0.35
    this.eglise.flipX=true

    //Animation du Donut
    this.donut = this.add.sprite(0, 500, 'donut').setOrigin(0,0);
    console.log(frames)
    this.anims.create({
        key: 'donut',
        frames: this.getFrames("donut",4),
        frameRate: 12,
        repeat: -1
    });
    this.donut.play('donut')

    //Tweens du Donut
    this.tweens.add({
        targets: this.donut,
        x: 1400,
        duration: 3000,
        ease: 'Linear',
        yoyo: true,
        flipX: true,
        repeat: -1,
    });
    this.donut.scale=0.2
    this.donut.setVisible(false)

    this.initKeyboard();

}
    initKeyboard() {
        let me=this;
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode) {
                // initialisation de la touche en appuis Y pour Homer
                case Phaser.Input.Keyboard.KeyCodes.Y:
                    if (me.homer.visible === true) {
                        me.homer.setVisible(false)
                    } else {
                        me.homer.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis O pour Lisa
                case Phaser.Input.Keyboard.KeyCodes.O:
                    if (me.lisa.visible === true) {
                        me.lisa.setVisible(false)
                    } else {
                        me.lisa.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis I pour Bart
                case Phaser.Input.Keyboard.KeyCodes.I:
                    if (me.bart.visible === true) {
                        me.bart.setVisible(false)
                    } else {
                        me.bart.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis P pour Moe
                case Phaser.Input.Keyboard.KeyCodes.P:
                    if (me.moe.visible === true) {
                        me.moe.setVisible(false)
                    } else {
                        me.moe.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis K pour Skinner
                case Phaser.Input.Keyboard.KeyCodes.K:
                    if (me.skinner.visible === true) {
                        me.skinner.setVisible(false)
                    } else {
                        me.skinner.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis Q pour Le Maire Quimby
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    if (me.quimby.visible === true) {
                        me.quimby.setVisible(false)
                    } else {
                        me.quimby.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis D pour Le chef Luigi Risotto
                case Phaser.Input.Keyboard.KeyCodes.D:
                    if (me.luigi.visible === true) {
                        me.luigi.setVisible(false)
                    } else {
                        me.luigi.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis S pour Gros Tony
                case Phaser.Input.Keyboard.KeyCodes.S:
                    if (me.grostony.visible === true) {
                        me.grostony.setVisible(false)
                    } else {
                        me.grostony.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis H pour Lenny et Carl
                case Phaser.Input.Keyboard.KeyCodes.H:
                    if (me.lenny.visible === true) {
                        me.lenny.setVisible(false)
                    } else {
                        me.lenny.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis J pour Pathy et Selma
                case Phaser.Input.Keyboard.KeyCodes.J:
                    if (me.pathy.visible === true) {
                        me.pathy.setVisible(false)
                    } else {
                        me.pathy.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis B pour Krusty
                case Phaser.Input.Keyboard.KeyCodes.B:
                    if (me.krusty.visible === true) {
                        me.krusty.setVisible(false)
                    }
                    else {
                        me.krusty.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis C pour Burns et Smithers
                case Phaser.Input.Keyboard.KeyCodes.C:
                    if (me.burns.visible === true) {
                        me.burns.setVisible(false)
                    }
                    else {
                        me.burns.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis X pour Wiggum
                case Phaser.Input.Keyboard.KeyCodes.X:
                    if (me.wiggum.visible === true) {
                        me.wiggum.setVisible(false)
                    }
                    else {
                        me.wiggum.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis F pour le révérant Lovejoy
                case Phaser.Input.Keyboard.KeyCodes.F:
                    if (me.lovejoy.visible === true) {
                        me.lovejoy.setVisible(false)
                    }
                    else {
                        me.lovejoy.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis G pour Barney
                case Phaser.Input.Keyboard.KeyCodes.G:
                    if (me.barney.visible === true) {
                        me.barney.setVisible(false)
                    }
                    else {
                        me.barney.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis V pour Dr Hibbert
                case Phaser.Input.Keyboard.KeyCodes.V:
                    if (me.hibbert.visible === true) {
                        me.hibbert.setVisible(false)
                    }
                    else {
                        me.hibbert.setVisible(true)
                    }
                    break;
                    // initialisation de la touche en appuis W pour Edna Krapabelle
                case Phaser.Input.Keyboard.KeyCodes.W:
                    if (me.edna.visible === true) {
                        me.edna.setVisible(false)
                    }
                    else {
                        me.edna.setVisible(true)
                    }
                    break;
                    // initialisation de la touche en appuis M pour Nelson
                case Phaser.Input.Keyboard.KeyCodes.M:
                    if (me.nelson.visible === true) {
                        me.nelson.setVisible(false)
                    }
                    else {
                        me.nelson.setVisible(true)
                    }
                    break;
                    // initialisation de la touche en appuis L pour Martin
                case Phaser.Input.Keyboard.KeyCodes.L:
                    if (me.martin.visible === true) {
                        me.martin.setVisible(false)
                    }
                    else {
                        me.martin.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis U pour Marge et Maggie
                case Phaser.Input.Keyboard.KeyCodes.U:
                    if (me.marge.visible === true) {
                        me.marge.setVisible(false)
                    }
                    else {
                        me.marge.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis N pour l'animation du donut
                case Phaser.Input.Keyboard.KeyCodes.N:
                    if (me.donut.visible === true) {
                        me.donut.setVisible(false)
                    }
                    else {
                        me.donut.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis SPACE pour l'animation de la duff
                case Phaser.Input.Keyboard.KeyCodes.SPACE:
                    if (me.duff.visible === true) {
                        me.duff.setVisible(false)
                    }
                    else {
                        me.duff.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis A pour la Taverne de Moe
                case Phaser.Input.Keyboard.KeyCodes.A:
                    if (me.taverne.visible === true) {
                        me.taverne.setVisible(false)
                    }
                    else {
                        me.taverne.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis T pour Duffman
                case Phaser.Input.Keyboard.KeyCodes.T:
                    if (me.duffman.visible === true) {
                        me.duffman.setVisible(false)
                    }
                    else {
                        me.duffman.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis Z pour le magasin de bd
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    if (me.bd.visible === true) {
                        me.bd.setVisible(false)
                    }
                    else {
                        me.bd.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis E pour l'église
                case Phaser.Input.Keyboard.KeyCodes.E:
                    if (me.eglise.visible === true) {
                        me.eglise.setVisible(false)
                    }
                    else {
                        me.eglise.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis R pour Ned
                case Phaser.Input.Keyboard.KeyCodes.R:
                    if (me.ned.visible === true) {
                        me.ned.setVisible(false)
                    }
                    else {
                        me.ned.setVisible(true)
                    }
                    break;
            }
            });
        }
    getFrames(prefix,length) {
        let frames = [];
        for (let i = 1; i <= length; i++) {
            frames.push({key: prefix + i});
        }
        return frames;
    }
}
