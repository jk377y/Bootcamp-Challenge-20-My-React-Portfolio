import React, { useRef, useEffect } from "react";
import "./constellation.css";

function Canvas() {
	const canvasRef = useRef(null);
	const overlayRef = useRef(null);
	const popupRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const overlay = overlayRef.current;
		const popup = popupRef.current;
		const ctx = canvas.getContext("2d");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		const particlesArray = [];
		let hue = 0;

		overlay.addEventListener("click", () => {
            
		    overlay.classList.add("hide");
			popup.classList.add("hide");
		});
		canvas.addEventListener("click", () => {
		    canvas.classList.add('bury');
            canvas.classList.add('hide');
		});
        
        window.addEventListener("resize", function () {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		});

		const mouse = {
			x: undefined,
			y: undefined,
		};

		canvas.addEventListener("mousemove", function (event) {
			mouse.x = event.x;
			mouse.y = event.y;
			for (let i = 0; i < 1; i++) {
				particlesArray.push(new Particle());
			}
		});

		canvas.addEventListener("click", function (event) {
			mouse.x = event.x;
			mouse.y = event.y;
			for (let i = 0; i < 1; i++) {
				particlesArray.push(new Particle());
			}
		});

		class Particle {
			constructor() {
				this.x = mouse.x;
				this.y = mouse.y;
				this.size = Math.random() * 35 + 1;
				this.speedX = Math.random() * 3 - 1.5;
				this.speedY = Math.random() * 3 - 1.5;
				this.color = `hsl(${hue}, 100%, 65%, 0.15)`;
			}
			update() {
				this.x += this.speedX;
				this.y += this.speedY;
				if (this.size > 0.2) this.size -= 0.05;
			}
			draw() {
				ctx.fillStyle = this.color;
				ctx.lineWidth = 0.3;
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		function handleParticles() {
			for (let i = 0; i < particlesArray.length; i++) {
				particlesArray[i].update();
				particlesArray[i].draw();
				for (let j = i; j < particlesArray.length; j++) {
					const dx = particlesArray[i].x - particlesArray[j].x;
					const dy = particlesArray[i].y - particlesArray[j].y;
					const distance = Math.sqrt(dx * dx + dy * dy);
					if (distance < 150) {
						ctx.beginPath();
						ctx.strokeStyle = particlesArray[i].color;
						ctx.lineWidth = 1;
						ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
						ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
						ctx.stroke();
						ctx.closePath();
					}
				}
				if (particlesArray[i].size <= 0.2) {
					particlesArray.splice(i, 1);
					i--;
				}
			}
		}

		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			handleParticles();
			hue += 2;
			requestAnimationFrame(animate);
		}
		animate();
	}, []);

	return (
        <>
			<canvas id="canvas1" ref={canvasRef}></canvas>
			<div id="overlay" className="overlay" ref={overlayRef}></div>
			<div id="popup" className="popup" ref={popupRef}>
				<p>Click to remove the overlay.</p>
				<p>Click the background to stop animations.</p>
				<p>Refresh the page to restart the animations.</p>
				<p>I hope you enjoy.  Thanks for visiting.</p>
			</div>
		</>
	);
}

export default Canvas;
