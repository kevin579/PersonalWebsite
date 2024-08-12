let num = 5; // Default number of pieces
let WIDTH, HEIGHT, Bottom, TOP, PIECE_HEIGHT, SPEED;

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let pieces = [];
let poles = [0, 0, 0];

const pieceCountInput = document.getElementById('pieceCount');
const startButton = document.getElementById('startButton');

startButton.addEventListener('click', startAnimation);
window.addEventListener('resize', resizeCanvas);

function resizeCanvas() {
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight-100;
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    Bottom = HEIGHT - HEIGHT * 0.1;
    TOP = HEIGHT * 0.1;
    if (pieces.length > 0) {
        recalculatePiecePositions();
        update();
    }
}

function recalculatePiecePositions() {
    PIECE_HEIGHT = Math.floor((HEIGHT * 0.2 + num * 2) / num);
    SPEED = num * 2;
    for (let i = 0; i < num; i++) {
        let width = PIECE_HEIGHT * 2 + Math.floor(WIDTH * 0.2 / num * i);
        let x = Math.floor(WIDTH / 6 - width / 2);
        let y = Bottom - 2 - PIECE_HEIGHT * (num - i);
        pieces[i].x = x;
        pieces[i].y = y;
        pieces[i].width = width;
        pieces[i].height = PIECE_HEIGHT;
    }
}

function startAnimation() {
    num = parseInt(pieceCountInput.value);
    if (num < 1 || num > 10) {
        alert("Please enter a number between 1 and 10");
        return;
    }
    
    poles = [num, 0, 0];
    pieces = [];

    main();
}

function main() {
    setup();
    createPiece();
    moveHanoi(num, 0, 1, 2);
    
}

function setup() {
    document.title = "Hanoid";
    resizeCanvas();
    ctx.fillStyle = 'black';
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}


async function moveHanoi(num, fill, target, relay) {
    if (num == 1) {
        await movePiece(num - 1, fill, target);
        return;
    } else {
        await moveHanoi(num - 1, fill, relay, target);
        await movePiece(num - 1, fill, target);
        await moveHanoi(num - 1, relay, target, fill);
    }
}



function movePiece(currentPiece, now, target) {
    return new Promise(resolve => {
        let speedx = target - now > 0 ? SPEED : -SPEED;
        let targetX = (target * 2 + 1) * WIDTH / 6 - pieces[currentPiece].width / 2;
        let targetY = Bottom - PIECE_HEIGHT - 2 - poles[target] * PIECE_HEIGHT;
        let state = 'up';

        function animate() {
            switch(state) {
                case 'up':
                    if (pieces[currentPiece].y > TOP) {
                        pieces[currentPiece].y -= SPEED;
                    } else {
                        state = 'horizontal';
                    }
                    break;
                case 'horizontal':
                    if (Math.abs(pieces[currentPiece].x + pieces[currentPiece].width / 2 - (target * 2 + 1) * WIDTH / 6) > SPEED) {
                        pieces[currentPiece].x += speedx;
                    } else {
                        pieces[currentPiece].x = targetX;
                        state = 'down';
                    }
                    break;
                case 'down':
                    if (pieces[currentPiece].y < targetY) {
                        pieces[currentPiece].y += SPEED;
                    } else {
                        pieces[currentPiece].y = targetY;
                        poles[now]--;
                        poles[target]++;
                        update();
                        return resolve();
                    }
                    break;
            }
            update();
            requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
    });
}




// Initial setup
setup();
update();

// ... (keep existing code)

function update() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = '#7b8cde';  // Updated color
    ctx.lineWidth = 5;
    for (let i = 1; i < 6; i++) {
        if (i == 2 || i == 4) continue;
        ctx.beginPath();
        ctx.moveTo(WIDTH / 6 * i, HEIGHT / 4);
        ctx.lineTo(WIDTH / 6 * i, Bottom);
        ctx.moveTo(WIDTH / 6 * i - WIDTH * 0.133, Bottom);
        ctx.lineTo(WIDTH / 6 * i + WIDTH * 0.133, Bottom);
        ctx.stroke();
    }
    for (let i = 0; i < pieces.length; i++) {
        ctx.fillStyle = pieces[i].color;
        ctx.fillRect(pieces[i].x, pieces[i].y, pieces[i].width, pieces[i].height);
    }
}

// Update createPiece function to use a color palette similar to the main website
function createPiece() {
    PIECE_HEIGHT = Math.floor((HEIGHT * 0.2 + num * 2) / num);
    SPEED = num * 2;
    const colors = ['#7b8cde', '#5a6abf', '#4a59a0', '#3f4d8a', '#354274'];
    for (let i = 0; i < num; i++) {
        let width = PIECE_HEIGHT * 2 + Math.floor(WIDTH * 0.2 / num * i);
        let x = Math.floor(WIDTH / 6 - width / 2);
        let y = Bottom - 2 - PIECE_HEIGHT * (num - i);
        let piece = { 
            x: x, 
            y: y, 
            width: width, 
            height: PIECE_HEIGHT,
            color: colors[i % colors.length]
        };
        pieces.push(piece);
    }
}

// ... (keep the rest of the code)