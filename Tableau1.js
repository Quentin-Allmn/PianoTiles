
class Tableau1 extends Phaser.Scene {

    /**
     * précharge des assets
     */
    preload(){
        this.load.image('homer', 'assets/homer-simpson.png');
        this.load.image('bart', 'assets/bart-simpson.png');
        this.load.image('lisa', 'assets/lisa-simpson.png');
        this.load.image('moe', 'assets/moe.png');
        this.load.image('skinner', 'assets/skinner.png');
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

    this.bart = this.add.image(750,250,'bart').setOrigin(0,0);
    this.bart.setVisible(false)
    this.bart.scale=0.5

    this.moe= this.add.image(600,150,'moe').setOrigin(0,0);
    this.moe.setVisible(false)
    this.moe.scale=0.5

    this.skinner = this.add.image(30,150,'skinner').setOrigin(0,0);
    this.skinner.setVisible(false)
    this.skinner.scale=0.5


    this.initKeyboard();

}
    initKeyboard() {
        let me=this;
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode) {
                // initialisation de la touche en appuis Y pour Homer
                case Phaser.Input.Keyboard.KeyCodes.Y:
                    if (me.homer.visible == true) {
                        me.homer.setVisible(false)
                    } else {
                        me.homer.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis O pour Lisa
                case Phaser.Input.Keyboard.KeyCodes.O:
                    if (me.lisa.visible == true) {
                        me.lisa.setVisible(false)
                    } else {
                        me.lisa.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis I pour Bart
                case Phaser.Input.Keyboard.KeyCodes.I:
                    if (me.bart.visible == true) {
                        me.bart.setVisible(false)
                    } else {
                        me.bart.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis P pour Moe
                case Phaser.Input.Keyboard.KeyCodes.P:
                    if (me.moe.visible == true) {
                        me.moe.setVisible(false)
                    } else {
                        me.moe.setVisible(true)
                    }
                    break;
                // initialisation de la touche en appuis K pour Skinner
                case Phaser.Input.Keyboard.KeyCodes.K:
                    if (me.skinner.visible == true) {
                        me.skinner.setVisible(false)
                    } else {
                        me.skinner.setVisible(true)
                    }
                    break;
            }
            });
        }
}
