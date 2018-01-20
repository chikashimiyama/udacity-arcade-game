/*jshint esversion: 6 */

class SoundPlayer{

	constructor(){
		this.soundbank = {
			bgm : document.querySelector('.bgm'),
			lost : document.querySelector('.lost'),
			won : document.querySelector('.won')
		};
	}

	play(song){
		this.soundbank[song].play();
	}

	stop(song){
		this.soundbank[song].pause();
	}
}