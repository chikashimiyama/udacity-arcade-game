/*jshint esversion: 6 */

class Entity{
	constructor(sprite, x, y){
		this.sprite = sprite;
		this.x = x;
		this.y = y;
	}

	render(ctx){
		ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}
}

class Player extends Entity{

	constructor(x, y){
		super("images/char-horn-girl.png", x, y);
	}

	handleInput(input){

		switch(input){
			case 'left':{
				this.x -= 100;
				break;
			}
			case 'right':{
				this.x += 100;
				break;
			}
			case 'up':{
				this.y -= 90;
				break;
			}
			case 'down':{
				this.y += 90;
				break;
			}
		}

	}

}

class ReactiveEntity extends Entity{

	checkCollision(x, y){
		const distX = this.x - x;
		const distY = this.y - y;
		const distance = Math.sqrt((distX * distX) + (distY * distY));
		return distance < COLLISION_THRESHOLD;
	}
}

class Rival extends ReactiveEntity{

	constructor(x, y){
		super("images/char-cat-girl.png", x, y);
	}

	update(dt) {
		this.x -=0.1;
		this.y -=0.4;
	}
}

class Princess extends ReactiveEntity{
	constructor(x, y){
		super("images/char-princess-girl.png", x, y);
	}
}


class Footman extends ReactiveEntity{

	constructor(x, y){
		super("images/char-boy.png", x, y);
		this.randomX();
		this.randomSpeed();
	}

	update(dt) {
		this.y += this.move;
		if(this.y > 600){
			this.randomX();
			this.randomSpeed();
			this.y = 0;
		} 
	}

	randomX(){
		this.x = parseInt(Math.random() * 5) * HORIZONTAL_STEP;
	}

	randomSpeed(){
		this.move = Math.random() * 5 + 4;
	}
}

class HouseKeeper extends ReactiveEntity{

	constructor(x, y){
		super("images/char-pink-girl.png", x, y);
		this.move = 4;
	}

	update(dt) {
		this.x += this.move;
		if(this.x > 400){
			this.move = -(Math.random() * 4 + 4);
		} else if( this.x < 0) {
			this.move = Math.random() * 4 + 4;
		}
	}
}

