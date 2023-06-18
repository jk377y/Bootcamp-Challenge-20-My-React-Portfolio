const canvas = document.getElementById("canvas1");  // canvas1 is the id of the canvas element in the html file
const ctx = canvas.getContext("2d");  // 2d is the type of context
canvas.width = window.innerWidth;  // canvas width is the same as the window width
canvas.height = window.innerHeight;  // canvas height is the same as the window height
const particlesArray = [];  // array to store the particles
let hue = 0;  // hue is the color

window.addEventListener("resize", function () {  // when the window is resized, the canvas is resized too
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {  // mouse object to store the mouse position
  x: undefined,  // x position of the mouse initially starting at undefined
  y: undefined,  // y position of the mouse initially starting at undefined
};

canvas.addEventListener("mousemove", function (event) {  // when the mouse moves, the mouse object is updated
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 1; i++) {
    particlesArray.push(new Particle());  // when the mouse moves, a new particle is created
  }
});

canvas.addEventListener("click", function (event) {  // when the mouse clicks, the mouse object is updated
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 1; i++) {
    particlesArray.push(new Particle());  // when the mouse clicks, a new particle is created
  }
});

class Particle {  // creates a particle class
  constructor() {
    this.x = mouse.x;  // x position of the particle is the same as the mouse x position
    this.y = mouse.y;  // y position of the particle is the same as the mouse y position
    this.size = Math.random() * 35 + 1;  // size of the particle is a random number between 1 and 35
    this.speedX = Math.random() * 3 - 1.5;  // speed of the particle in the x axis is a random number between -1.5 and 1.5 (math.random is a random number between 0 and 1, *3, -1.5; the value is between -1.5 and 1.5)
    this.speedY = Math.random() * 3 - 1.5;  // speed of the particle in the y axis is a random number between -1.5 and 1.5 (math.random is a random number between 0 and 1, *3, -1.5; the value is between -1.5 and 1.5)
    // this.color = 'hsl(165, 100%, 50%, 0.15)';  // sets particle color to hsl(165, 100%, 50%, 0.15)
    this.color = "hsl(" + hue + ", 100%, 65%, 0.15)";  // color of the particle rotates through the color wheel
  }
  update() {
    this.x += this.speedX;  // the x position of the particle is updated by adding the speed in the x axis
    this.y += this.speedY;  // the y position of the particle is updated by adding the speed in the y axis
    if (this.size > 0.2) this.size -= 0.05;  // if the size of the particle is >0.2, the size of the particle is reduced by 0.05/sec
  }
  draw() {  // draws the particle as a circle
    ctx.fillStyle = this.color;  // the color of the particle is the same as the color of the particle
    ctx.lineWidth = 0.3;  // the width of the line is 0.3
    ctx.beginPath();  // starts the path of the line to be drawn
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)  // draws the circle
    ctx.fill()  // fills the circle with the color
  }
}

function handleParticles() {  // function to handle the particles
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();  // updates the position of the particle
    particlesArray[i].draw();  // draws the particle
    for (let j = i; j < particlesArray.length; j++) {
      const dx = particlesArray[i].x - particlesArray[j].x;  // distance between the x position of the particle i and the x position of the particle j
      const dy = particlesArray[i].y - particlesArray[j].y;  // distance between the y position of the particle i and the y position of the particle j
      const distance = Math.sqrt(dx * dx + dy * dy);  // distance between the particle i and the particle j (pythagoras theorem)
      if (distance < 150) {  // if the distance between the particle i and the particle j is <150, a line is drawn between the particles
        ctx.beginPath();  // starts the path of the line to be drawn
        ctx.strokeStyle = particlesArray[i].color;  // the color of the line is the same as the color of the particle i
        ctx.lineWidth = 1;  // the width of the line is 1
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);  // the starting point of the line is the x and y position of the particle i
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);  // the ending point of the line is the x and y position of the particle j
        ctx.stroke();  // draws the line
        ctx.closePath();  // ends the path of the line to be drawn
      }
    }
    if (particlesArray[i].size <= 0.2) {  // if the size of the particle is <=0.2, the particle is removed from the array and disappears
      particlesArray.splice(i, 1);  // removes the particle from the array
      i--;  // decreases the index of the particle by 1
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);  // clears the canvas
//   ctx.fillStyle = 'rgba(0,0,0,0.02)';
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
  handleParticles();  // calls the function to handle the particles
  hue += 2;  // increases the hue by 5, basically how fast the color rotates through the color wheel
  requestAnimationFrame(animate);  // calls the animate function again
}
animate();