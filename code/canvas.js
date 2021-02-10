let canvas = document.getElementById("canvas");
let c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let arrayColores = ["yellow"];

let mouse = {
  x: 0,
  y: 0,
};

class Ball {
  constructor(x, y, vx, vy, r, color) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.r = r;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 0.4, false);
    c.fillStyle = this.color;
    c.fill();
    c.strokeStyle = "red";
    c.stroke();
  }

  update() {
    if (this.x + this.r > canvas.width || this.x + this.r < 10) {
      this.vx = -this.vx;
    }
    if (this.y + this.r > canvas.height || this.y + this.r < 10) {
      this.vy = -this.vy;
    }

    this.x += this.vx;
    this.y += this.vy;
    this.draw();
  }

  moveLeft() {
    this.draw();
    this.x += 1;
  }
}

let ballArray = [];

for (let i = 0; i < 20; i++) {
  let x = Math.random() * window.innerHeight;
  let y = Math.random() * window.innerWidth;
  let vx = Math.random() * 50;
  let vy = Math.random() * 50;
  let color = 0;
  ballArray.push(new Ball(x, y, vx, vy, 5, arrayColores[color]));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 20; i++) {
    ballArray[i].update();
  }
}

canvas.addEventListener("resize", function (event) {
  console.log("hello");
});

animate();
