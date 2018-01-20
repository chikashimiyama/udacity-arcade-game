/*jshint esversion: 6 */

class Engine{

    constructor(){
        this.canvas = document.createElement('canvas');
        this.result = document.querySelector('div.result');
        this.message = document.querySelector('span.result');

        this.canvas.width = CANVAS_WIDTH;
        this.canvas.height = CANVAS_HEIGHT;
        this.ctx = this.canvas.getContext('2d');
        this.lastTime = 0;
        this.soundPlayer = new SoundPlayer();
        this.animate = true;
        document.body.appendChild(this.canvas);
        
        Resources.onReady(()=>{
            this.init();
        });

        Resources.load([
            'images/stone-block.png',
            'images/water-block.png',
            'images/grass-block.png',
            'images/char-pink-girl.png',
            'images/char-princess-girl.png',
            'images/char-cat-girl.png',
            'images/char-horn-girl.png',
            'images/char-boy.png'
        ]);
    }

    init() {
        this.reset();
        this.lastTime = Date.now();
        this.main();
    }

    main() {
        if(!this.animate) return;

        var now = Date.now(),
        dt = (now - this.lastTime) / 1000.0;
        this.update(dt);
        this.render();
        this.lastTime = now;
        window.requestAnimationFrame(()=>{
            this.main();
        });
    }

    update(dt) {
        this.updateEntities(dt);
        this.checkCollisions();
    }

    updateEntities(dt) {
        for(const enemy of allEnemies){
            enemy.update(dt);
        }
    }

    checkCollisions() {
        for(const enemy of allEnemies){
            if(enemy.checkCollision(player.x, player.y)) {
                this.animate = false;
                this.soundPlayer.stop('bgm');
                this.soundPlayer.play('lost');
                this.message.innerHTML = "failed";

                setTimeout(()=>{
                    this.result.classList.add('show');

                }, 1000);
                return;
            }
        }

        if(princess.checkCollision(player.x, player.y)){
            this.animate = false;
            this.soundPlayer.stop('bgm');
            this.soundPlayer.play('won');
            
            this.result.classList.add('show');
        }
        return false;
    }

    render() {
        
        this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        for (let row = 0; row < NUM_ROWS; row++) {
            for (let col = 0; col < NUM_COLS; col++) {
                this.ctx.drawImage(Resources.get(ROW_IMAGES[row]), col * HORIZONTAL_STEP, row * VERTICAL_STEP);
            }
        }
        this.renderEntities();
    }

    renderEntities() {
        for(const enemy of allEnemies){
            enemy.render(this.ctx);
        }
        princess.render(this.ctx);
        player.render(this.ctx);
    }


    reset() {
        // noop
        this.soundPlayer.play('bgm');
    }
}


