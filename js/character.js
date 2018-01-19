/*jshint esversion: 6 */
const COLLISION_THRESHOLD = 5;

class Character {

	constructor(sprite, x, y){
		this.sprite = sprite;
		this.x = x;
		this.y = y;
	}
	
	update(dt) {

	}

	render(){
	    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	}



}

class Player extends Character{

	handleInput(){
		
	}

}

class Enemy extends Character{

	checkCollision(x, y){
		const distX = this.x - x;
		const distY = this.y - y;
		const distance = Math.sqrt((distX * distX) + (distY * distY));
		return distance < HIT_THRESHOLD;
	}
}

class Nanny extends Enemy{

	move(){

	}
}

class Brother extends Enemy{

	move(){

	}
}

class Attendant extends Enemy{

	move(){

	}
}