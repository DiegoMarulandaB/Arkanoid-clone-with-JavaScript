const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 448;
canvas.height = 400;

// variable de las pelotas
const ballRadius = 4;
// posición de la pelota
let x = canvas.width / 2;
let y = canvas.width - 80;

// velocidad de la pelota
let dx = -2;
let dy = -2;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {}
function drawBricks() {}
function collisionDetection() {}
function ballMovement() {
  // rebotar la pelota en los laterales

  if (
    x + dx > canvas.width - ballRadius || // pared derecha
    x + dx < ballRadius // pared izquierda
  ) {
    dx = -dx;
  }

  // rebotar en la parte de arriba
  if (y + dy < ballRadius) {
    dy = -dy;
  }

  if (y + dy > canvas.height - ballRadius) {
    console.log("Game over");
    document.location.reload();
  }

  x += dx;
  y += dy;
}
function paddleMovement() {}

function cleanCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
  cleanCanvas();
  // console.log('testing')
  // dibujar elementos
  drawBall();
  drawPaddle();
  drawBricks();
  // drawScore()

  // colisiones y movimientos
  collisionDetection();
  ballMovement();
  paddleMovement();

  // recursividad, función que se llama constantemente
  window.requestAnimationFrame(draw);
}

draw();
