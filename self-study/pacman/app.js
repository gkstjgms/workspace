// import TileMap from './TileMap.js';

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

class GameObject {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.type = '';
        this.width = 0;
        this.height = 0;
        this.img = undefined;
        this.eaten = false;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    rectFromGameObject() {
        return {
            top: this.y,
            left: this.x,
            bottom: this.y + this.height,
            right: this.x + this.width,
        };
    }
}

class Pacman extends GameObject {
    constructor(x, y) {
        super(x, y);
        this.width = 50;
        this.height = 50;
        this.type = 'Pacman';
        this.point = 0;
    }

    incresePoints(){
        this.point += 100;
    }
}

class Dot extends GameObject {
    constructor(x, y) {
        super(x, y);
        this.width = 10;
        this.height = 10;
        this.type = 'Dot';
    }
}

function loadTexture(path) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = path;
        img.onload = () => {
            resolve(img);
        };
    });
}

function intersectRect(r1, r2) {
    return !(
        r2.left > r1.right - 15 ||
        r2.right < r1.left + 15 ||
        r2.top > r1.bottom - 15 ||
        r2.bottom < r1.top + 15);
}

const Messages = {
    KEY_EVENT_UP: 'KEY_EVENT_UP',
    KEY_EVENT_DOWN: 'KEY_EVENT_DOWN',
    KEY_EVENT_LEFT: 'KEY_EVENT_LEFT',
    KEY_EVENT_RIGHT: 'KEY_EVENT_RIGHT',
    PACMAN_MOVE_UP: 'PACMAN_MOVE_UP',
    PACMAN_MOVE_DOWN: 'PACMAN_MOVE_DOWN',
    PACMAN_MOVE_LEFT: 'PACMAN_MOVE_LEFT',
    PACMAN_MOVE_RIGHT: 'PACMAN_MOVE_RIGHT',
    COLLISION_DOT: 'COLLISION_DOT',
};

let pacman,
    pacmanImg,
    pacmanImgRight,
    pacmanImgUp,
    pacmanImgDown,
    dot,
    dotImg,
    canvas, 
    ctx,
    tileSize,
    tileMap,
    gameObjects = [],
    eventEmitter = new EventEmitter();

let onKeyDown = function (e) {
    switch (e.keyCode) {
        case 38: // Up
        case 40: // Down
        case 37: // Left
        case 39: // Right
        case 32: // Space 
            e.preventDefault(); 
            break;
        default:
            break; // do not block other keys
    }
};

window.addEventListener('keydown', onKeyDown);

window.addEventListener('keydown', (e) => {
	switch (e.keyCode) {
		case 38: // Up
            eventEmitter.emit(Messages.PACMAN_MOVE_UP);
            break;
        case 40: // Down
            eventEmitter.emit(Messages.PACMAN_MOVE_DOWN);
            break;
        case 37: // Left
            eventEmitter.emit(Messages.PACMAN_MOVE_LEFT);
            break;
        case 39: // Right
            eventEmitter.emit(Messages.PACMAN_MOVE_RIGHT);
            break;
	}
});

window.addEventListener('keydown', (evt) => {
    if (evt.key === 'ArrowUp') {
        eventEmitter.emit(Messages.KEY_EVENT_UP);
    } else if (evt.key === 'ArrowDown') {
        eventEmitter.emit(Messages.KEY_EVENT_DOWN);
    } else if (evt.key === 'ArrowLeft') {
        eventEmitter.emit(Messages.KEY_EVENT_LEFT);
    } else if (evt.key === 'ArrowRight') {
        eventEmitter.emit(Messages.KEY_EVENT_RIGHT);
    }
});

function createPacman() {
    pacman = new Pacman(canvas.width / 2, canvas.height / 2);
    pacman.img = pacmanImg;
    gameObjects.push(pacman);
}

function createDots(){
    const START_X = 50;
    const START_Y = 50; 

    for (let x = 0; x < 3; x += 1) {
        dot = new Dot(START_X + 30 * x, START_Y);
        dot.img = dotImg;
        gameObjects.push(dot);
    }
}

// handle collisions
function updateGameObjects() {
    const dots = gameObjects.filter((go) => go.type === 'Dot'); 

    // if pacman hit dot
    dots.forEach((dot) => {
        const pacRect = pacman.rectFromGameObject();
        if (intersectRect(pacRect, dot.rectFromGameObject())) {
            eventEmitter.emit(Messages.COLLISION_DOT, { dot });
        }
    });

    gameObjects = gameObjects.filter((go) => !go.eaten); 
}

function drawGameObjects(ctx) {
    gameObjects.forEach((go) => go.draw(ctx));
}

function initGame() {
    gameObjects = [];
    createPacman();
    createDots();

    // change img
    eventEmitter.on(Messages.PACMAN_MOVE_UP, () => {
        pacman.img = pacmanImgUp;
    })

    eventEmitter.on(Messages.PACMAN_MOVE_DOWN, () => {
        pacman.img = pacmanImgDown;
    })

    eventEmitter.on(Messages.PACMAN_MOVE_LEFT, () => {
        pacman.img = pacmanImg;
    })

    eventEmitter.on(Messages.PACMAN_MOVE_RIGHT, () => {
        pacman.img = pacmanImgRight;
    })

    // key event
    eventEmitter.on(Messages.KEY_EVENT_UP, () => {
        pacman.y = pacman.y > 70 ? pacman.y - 5 : pacman.y = 65;
    });

    eventEmitter.on(Messages.KEY_EVENT_DOWN, () => {
        pacman.y = pacman.y + pacman.height < canvas.height ? pacman.y + 5 : pacman.y;
    });

    eventEmitter.on(Messages.KEY_EVENT_LEFT, () => {
        pacman.x = pacman.x > 100 ? pacman.x - 5 : pacman.x = 95;
    });

    eventEmitter.on(Messages.KEY_EVENT_RIGHT, () => {
        pacman.x = pacman.x + pacman.width < canvas.width ? pacman.x + 5 : pacman.x;
    });

    // collision
    eventEmitter.on(Messages.COLLISION_DOT, (_, { dot }) => {
        dot.eaten = true;
        pacman.incresePoints();
    });
}

function drawText(message, x, y) {
    ctx.fillText(message, x, y);
}

function drawPoints() {
    ctx.font = '15px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'left';
    drawText('Points: ' + pacman.point, 30, canvas.height - 30);
}

window.onload = async () => {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    pacmanImg = await loadTexture('image/Pacman.png');
    pacmanImgRight = await loadTexture('image/Pacman_right.png');
    pacmanImgUp = await loadTexture('image/Pacman_up.png');
    pacmanImgDown = await loadTexture('image/Pacman_down.png');
    dotImg = await loadTexture('image/dot.png');

    initGame();

    gameLoopId = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawPoints();
        updateGameObjects(); 
        drawGameObjects(ctx);
    }, 100)
};
