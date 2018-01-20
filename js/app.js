/*jshint esversion: 6 */


const CANVAS_WIDTH = 505;
const CANVAS_HEIGHT = 606;
const NUM_ROWS= 6;
const NUM_COLS = 5;
const COLLISION_THRESHOLD = 40;
const HORIZONTAL_STEP = 101;
const VERTICAL_STEP = 83;
const VERTICAL_OFFSET = -20;
const ROW_IMAGES = [
	'images/grass-block.png',
	'images/stone-block.png',
	'images/water-block.png',
	'images/stone-block.png',
	'images/grass-block.png',
	'images/grass-block.png' 
];


const player = new Player(HORIZONTAL_STEP * 1, VERTICAL_STEP *  5 + VERTICAL_OFFSET );
const princess = new Princess(HORIZONTAL_STEP * 2, VERTICAL_OFFSET);
const allEnemies = [
	new Rival(HORIZONTAL_STEP * 3, VERTICAL_STEP *  5 + VERTICAL_OFFSET),
	new Footman(HORIZONTAL_STEP * 1, VERTICAL_OFFSET),
	new Footman(HORIZONTAL_STEP * 3, VERTICAL_OFFSET),
	new HouseKeeper(0, VERTICAL_STEP * 3 + VERTICAL_OFFSET),
	new HouseKeeper(HORIZONTAL_STEP * 4, VERTICAL_STEP + VERTICAL_OFFSET)];
const engine = new Engine();

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

