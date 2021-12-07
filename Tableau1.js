
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

        for (let h = 1; h <= 3; h++) {
            this.load.image('donut' + h, 'assets/donut-' + h + '.png');
        }
    }

/**
 * création de la scène
 */
    create() {
    this.homer = this.add.image(450, 200, 'homer').setOrigin(0, 0);
    this.homer.setVisible(false)

    this.lisa = this.add.image(200,150,'lisa').setOrigin(0,0);
    this.lisa.setVisible(false)
    this.lisa.scale=0.5

    this.bart = this.add.image(725,250,'bart').setOrigin(0,0);
    this.bart.setVisible(false)
    this.bart.scale=0.5

    this.moe= this.add.image(600,150,'moe').setOrigin(0,0);
    this.moe.setVisible(false)
    this.moe.scale=0.5

    this.skinner = this.add.image(30,150,'skinner').setOrigin(0,0);
    this.skinner.setVisible(false)
    this.skinner.scale=0.5

    this.quimby = this.add.image(1000,150,'quimby').setOrigin(0,0);
    this.quimby.setVisible(false)

    this.grostony = this.add.image(800,150,'gros-tony').setOrigin(0,0);
    this.grostony.setVisible(false)

    this.luigi = this.add.image(500,20,'luigi-risotto').setOrigin(0,0);
    this.luigi.setVisible(false)
    this.luigi.scale=0.5

    this.lenny = this.add.image(300,10,'lenny-carl').setOrigin(0,0);
    this.lenny.setVisible(false)
    this.lenny.scale=0.25

    this.pathy = this.add.image(800,10,'pathy-selma').setOrigin(0,0);
    this.pathy.setVisible(false)
    this.pathy.scale=0.25

    this.krusty = this.add.image(800,100,'krusty').setOrigin(0,0);
    this.krusty.setVisible(false)

    this.barney = this.add.image(400,300,'barney').setOrigin(0,0);
    this.barney.setVisible(false)

    this.burns = this.add.image(870,400,'burns').setOrigin(0,0);
    this.burns.setVisible(false)

    this.lovejoy = this.add.image(840,500,'lovejoy').setOrigin(0,0);
    this.lovejoy.setVisible(false)

    this.wiggum = this.add.image(850,200,'wiggum').setOrigin(0,0);
    this.wiggum.setVisible(false)

    this.nelson = this.add.image(850,200,'nelson').setOrigin(0,0);
    this.nelson.setVisible(false)

    this.edna = this.add.image(850,200,'edna').setOrigin(0,0);
    this.edna.setVisible(false)

    this.hibbert = this.add.image(850,200,'dr-hibbert').setOrigin(0,0);
    this.hibbert.setVisible(false)

    this.martin = this.add.image(850,200,'martin').setOrigin(0,0);
    this.martin.setVisible(false)

    this.marge = this.add.image(50,100,'marge').setOrigin(0,0);
    this.marge.setVisible(false)
    this.marge.scale=0.5

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
            }
            });
        }

}
