import Phaser from 'phaser'
import {ANIMATION} from '../classes/const';

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    
    this.anchor.setTo(0.5);
    // this.scale.setTo(1.75);

    this.cursors = this.game.input.keyboard.createCursorKeys();

    // this.keys = this.game.input.keyboard.addKeys([Phaser.KeyCode.SPACEBAR]);
    // this.game.input.keyboard.addKeyCapture([Phaser.KeyCode.SPACEBAR]);
    
    this.animations.add(ANIMATION.WALK, [0, 1, 2], 8, true);
    // this.animations.add(SHOOT, [4, 3], 10, false);
    // this.animations.add(ARM, [0, 3], 8, false);
    // this.animations.add(DISARM, [3, 0], 8, false);

    this.angle = 270;
    // this.isArmed = false;
  }

  walk() {
    this.animations.play(ANIMATION.WALK);
  }

  stopWalking() {
    this.frame = 0;
    this.animations.stop(ANIMATION.WALK);
  }

//   arm() {
//     this.animations.play(ARM);
//     this.isArmed = true;
//   }

//   disarm() {
//     this.animations.play(DISARM);
//   }

//   shoot() {
//       console.log('shooting');
//     this.animations.play(SHOOT);
//   }

//   stopShooting() {
//     this.isArmed = false;
//     this.frame = 0;
//     this.animations.stop(SHOOT);
//   }

  update () {
    // we don't have a use yet for the "down" control...
    // use it perhaps for shielding/defending action??
    // for (var index in this.keys) {
	// 	// Save a reference to the current key
	// 	var key = this.keys[index];
	// 	// If the key was just pressed, fire a laser
	// 	if (key.justDown && key.keyCode === Phaser.KeyCode.SPACEBAR) {
    //         console.log(key);
	// 		this.shoot();
	// 	}
    // }
    
    if (this.cursors.right.isDown) {
      this.angle = 0;
      this.walk();
    } else if (this.cursors.left.isDown) {
      this.angle = 180;
      this.walk();
    } else if (this.cursors.up.isDown) {
      this.angle = 270;
      this.walk();
    } else if (this.cursors.down.isDown) {
      this.angle = 90;
      this.walk();
    } else {
      this.stopWalking();
    }
  }
}
