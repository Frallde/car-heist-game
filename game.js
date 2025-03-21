const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',  // This is where the game will be placed
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Load images for the car and background
    this.load.image('car', 'assets/car.png');
    this.load.image('bg', 'assets/city_background.png');
}

function create() {
    // Add background to the scene
    this.add.image(400, 300, 'bg');
    
    // Create player (the car)
    this.player = this.physics.add.sprite(100, 100, 'car');

    // Add keyboard controls for the car
    this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    // Player movement using arrow keys
    if (this.cursors.left.isDown) {
        this.player.x -= 5;
    } else if (this.cursors.right.isDown) {
        this.player.x += 5;
    }
    if (this.cursors.up.isDown) {
        this.player.y -= 5;
    } else if (this.cursors.down.isDown) {
        this.player.y += 5;
    }
}
