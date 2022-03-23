let gameLoopId;

// publish and subscribe to messages
class EventEmitter {
    constructor() {
        this.listeners = {};
    }

    on(message, listener) {
        if (!this.listeners[message]) {
            this.listeners[message] = [];
        }
        this.listeners[message].push(listener);
    }

    emit(message, payload = null) {
        if (this.listeners[message]) {
            this.listeners[message].forEach((l) => l(message, payload));
        }
    }

    clear() {
        this.listeners = {};
    }
}

// add dedicated objects
// GameObject : one with x, y, ability to draw itself to a canvas
class GameObject {
    constructor(x, y) {
        // set default value
        this.x = x;
        this.y = y;
        this.dead = false;
        this.type = '';
        this.width = 0;
        this.height = 0;
        this.img = undefined;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    // rectangle representation of a game object to handle collision
    rectFromGameObject() {
        return {
            top: this.y,
            left: this.x,
            bottom: this.y + this.height,
            right: this.x + this.width,
        };
    }
}

// extend GameObject to create the Hero and Enemy
class Hero extends GameObject {
    constructor(x, y) {
        super(x, y);
        this.width = 99;
        this.height = 75;
        this.type = 'Hero';
        // original value
        this.speed = { x: 0, y: 0 };
        this.cooldown = 0;
        this.life = 3;
        this.points = 0;
    }

    // fire laser
    fire() {
        gameObjects.push(new Laser(this.x + 45, this.y - 10)); // add laser
        this.cooldown = 500;

        // laser use cooltime
        let id = setInterval(() => { // repeated until cooltime is over
            if (this.cooldown > 0) {
                this.cooldown -= 100;
            } else {
                clearInterval(id); // can use laser
            }
        }, 200);
    }
    canFire() {
        return this.cooldown === 0;
    }
    decrementLife() {
        this.life--;
        if (this.life === 0){
            this.dead = true;
        }
    } 
    incrementPoints() {
        this.points += 100;
    }
}

class Enemy extends GameObject {
    constructor(x, y) {
        super(x, y);
        this.width = 98;
        this.height = 50;
        this.type = 'Enemy';

        let id = setInterval(() => {
            if (this.y < canvas.height - this.height) { // move Enemy until they reach end of the canvas
                this.y += 5;
            } else {
                console.log('Stopped at', this.y) // stop Enemy when they reach end of the canvas
                clearInterval(id);
            }
        }, 300) // 
    }
}

class Laser extends GameObject {
    constructor(x, y) {
        super(x, y);
        this.width = 9;
        this.height = 33;
        this.type = 'Laser';
        this.img = laserImg;

        let id = setInterval(() => {
            if (this.y > 0) {
                this.y -= 15;
            } else { // if laser moves to the top of the screen, delete it
                this.dead = true;
                clearInterval(id);
            }
        }, 100)
    }
}

// load texture img
function loadTexture(path) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = path;
        img.onload = () => {
            resolve(img);
        };
    });
}

// checks collision
function intersectRect(r1, r2) {
    return !(
        r2.left > r1.right ||
        r2.right < r1.left ||
        r2.top > r1.bottom ||
        r2.bottom < r1.top);
}

// add constants and set up the EventEmitter
const Messages = {
    KEY_EVENT_UP: 'KEY_EVENT_UP',
    KEY_EVENT_DOWN: 'KEY_EVENT_DOWN',
    KEY_EVENT_LEFT: 'KEY_EVENT_LEFT',
    KEY_EVENT_RIGHT: 'KEY_EVENT_RIGHT',
    KEY_EVENT_SPACE: 'KEY_EVENT_SPACE',
    KEY_EVENT_ENTER: 'KEY_EVENT_ENTER',
    COLLISION_ENEMY_LASER: 'COLLISION_ENEMY_LASER',
    COLLISION_ENEMY_HERO: 'COLLISION_ENEMY_HERO',
    GAME_END_WIN: 'GAME_END_WIN',
    GAME_END_LOSE: 'GAME_END_LOSE',
};

let heroImg,
    enemyImg,
    laserImg,
    lifeImg,
    canvas,
    ctx,
    gameObjects = [],
    hero,
    eventEmitter = new EventEmitter();

// events
// default behavior to shut event off
let onKeyDown = function (e) {
    // console.log(e.keyCode);
    switch (e.keyCode) {
        case 37: // Left
        case 39: // Right
        case 38: // Up
        case 40: // Down
        case 32: // Space 
            e.preventDefault(); 
            break;
        default:
            break; // do not block other keys
    }
};
// add event when key is pressed
window.addEventListener('keydown', onKeyDown);

// TODO make message driven
// add event when key is free
window.addEventListener('keydown', (evt) => {
    if (evt.key === 'ArrowUp') {
        eventEmitter.emit(Messages.KEY_EVENT_UP);
    } else if (evt.key === 'ArrowDown') {
        eventEmitter.emit(Messages.KEY_EVENT_DOWN);
    } else if (evt.key === 'ArrowLeft') {
        eventEmitter.emit(Messages.KEY_EVENT_LEFT);
    } else if (evt.key === 'ArrowRight') {
        eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
    } else if (evt.keyCode === 32) {
        eventEmitter.emit(Messages.KEY_EVENT_SPACE);
    } else if (evt.key === 'Enter') {
        eventEmitter.emit(Messages.KEY_EVENT_ENTER);
    }
});

// create gameobjects
function createEnemies() { 
    const MONSTER_TOTAL = 5;
    const MONSTER_WIDTH = MONSTER_TOTAL * 98;
    const START_X = (canvas.width - MONSTER_WIDTH) / 2;
    const STOP_X = START_X + MONSTER_WIDTH;

    // 5*5
    for (let x = START_X; x < STOP_X; x += 98) {
        for (let y = 0; y < 50 * 5; y += 50) {
            const enemy = new Enemy(x, y); // create enemy by class Enemy
            enemy.img = enemyImg;
            gameObjects.push(enemy);
        }
    }
}

function createHero() {
    // create hero by class Hero
    hero = new Hero(canvas.width / 2 - 45, canvas.height - canvas.height / 4); // add location
    hero.img = heroImg;
    gameObjects.push(hero);
}

// handle collisions
function updateGameObjects() {
    const enemies = gameObjects.filter((go) => go.type === 'Enemy'); // * filter: conditional new array 
    const lasers = gameObjects.filter((go) => go.type === 'Laser');

    // if hero hit enemy
    enemies.forEach((enemy) => {
        const heroRect = hero.rectFromGameObject();
        // intersectRect : check if two rectangle are crossed
        if (intersectRect(heroRect, enemy.rectFromGameObject())) {
            eventEmitter.emit(Messages.COLLISION_ENEMY_HERO, { enemy });
        }
    });

    // if laser hit enemy
    lasers.forEach((l) => { // sequential laser call
        enemies.forEach((m) => { // sequential enemies call 
            if (intersectRect(l.rectFromGameObject(), m.rectFromGameObject())) {
                eventEmitter.emit(Messages.COLLISION_ENEMY_LASER, {
                    first: l,
                    second: m,
                });
            }
        });
    });

    gameObjects = gameObjects.filter((go) => !go.dead); // input objects that (dead = false) 
}

// draw gameobjects inside array gameObjects -> start the drawing
function drawGameObjects(ctx) {
    gameObjects.forEach((go) => go.draw(ctx));
}

// control by key 
function initGame() {
    gameObjects = [];
    createEnemies();
    createHero();

    // press enter to start a new game
    eventEmitter.on(Messages.KEY_EVENT_ENTER, () => {
        resetGame();
    })
    
    // when hero goes out of canvas, it cannot move
    eventEmitter.on(Messages.KEY_EVENT_UP, () => {
        hero.y = hero.y > 0 ? hero.y - 10 : hero.y;
    });

    eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
        hero.y = hero.y + hero.height < canvas.height ? hero.y + 10 : hero.y;
    });

    eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
        hero.x = hero.x > 0 ? hero.x - 20 : hero.x = 0;
    });

    eventEmitter.on(Messages.KEY_EVENT_RIGHT, () => {
        hero.x = hero.x + hero.width < canvas.width ? hero.x + 20 : hero.x;
    });

    // hero can fire when the space bar is hit
    eventEmitter.on(Messages.KEY_EVENT_SPACE, () => {
        if(hero.canFire()) {
            hero.fire();
        }
    });

    // when an enemy collides with a laser
    eventEmitter.on(Messages.COLLISION_ENEMY_LASER, (_, { first, second }) => {
        first.dead = true;
        second.dead = true;
        hero.incrementPoints();

        if (isEnemiesDead()) {
            eventEmitter.emit(Messages.GAME_END_WIN); // win
        }
    });

    // when an hero collides with a enemy
    eventEmitter.on(Messages.COLLISION_ENEMY_HERO, (_, { enemy }) => {
        enemy.dead = true;
        hero.decrementLife();

        if (isHeroDead()) {
            eventEmitter.emit(Messages.GAME_END_LOSE);
            return; // loss before victory, lose
        }
        if (isEnemiesDead()){
            eventEmitter.emit(Messages.GAME_END_WIN); // win
        }
    });

    // when hero win
    eventEmitter.on(Messages.GAME_END_WIN, () => {
        endGame(true);
    }) ;

    // when hero lose
    eventEmitter.on(Messages.GAME_END_LOSE, () => {
        endGame(false);
    });
}

// game finished
function endGame(win) {
    clearInterval(gameLoopId);

    // set a delay so we are sure any paints have finished
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        if (win) {
            displayMessage(
                'Victory !!! Press [Enter] to start a new game <Captain Pew Pew>',
                'green'  
            );
        } else {
            displayMessage (
                'You died !!! Press [Enter] to start a new game <Captain Pew Pew>'
            );
        }
    }, 200)
}

function isHeroDead() {
    return hero.life <= 0;
}

function isEnemiesDead() {
    const enemies = gameObjects.filter((go) => go.type === 'Enemy' && !go.dead); // if type Enemy are all dead = true
    return enemies.length === 0;
}

// draw life left 
function drawLife() {
    // TODO, 35, 27

    const START_POS = canvas.width - 180;
    for (let i = 0; i < hero.life; i++){
        ctx.drawImage(
            lifeImg, 
            START_POS + 45 * (i + 1), 
            canvas.height - 37);
    }
}

// draw points using text
function drawText(message, x, y) {
    ctx.fillText(message, x, y);
}

function drawPoints() {
    ctx.font = '30px Arial';
    ctx.fillStyle = 'red';
    ctx.textAlign = 'left';
    drawText('Points: ' + hero.points, 15, canvas.height - 15);
}

function displayMessage(message, color = 'red') {
    ctx.font = '30px Arial';
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.fillText(message, canvas.width / 2, canvas.height / 2);
}

function resetGame() {
    if (gameLoopId) {
        clearInterval(gameLoopId);
        eventEmitter.clear();
        initGame();
        gameLoopId = setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            drawPoints();
            drawLife();
            updateGameObjects();
            drawGameObjects(ctx);
        }, 100);
    }
}

// set up the game loop
window.onload = async() => {
    // draw canvas
    canvas = document.getElementById('canvas'); // get the canvas reference
    ctx = canvas.getContext('2d'); // set the context to 2D to draw basic shapes

    // load textures
    heroImg = await loadTexture('assets/player.png');
    enemyImg = await loadTexture('assets/enemyShip.png');
    laserImg = await loadTexture('assets/laserRed.png');
    lifeImg = await loadTexture('assets/life.png');

    // initialize the game
    initGame();

    // draw canvas
    gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // erase canvas
        ctx.fillStyle = 'black'; // fill it with the color black
        ctx.fillRect(0, 0, canvas.width, canvas.height); // x, y, width, height
        drawPoints();
        drawLife();
        updateGameObjects();
        drawGameObjects(ctx);
    }, 100)
};
