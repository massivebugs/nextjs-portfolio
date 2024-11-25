"use client"
import { chunk, shuffle } from "lodash";
import { useCallback,useEffect, useRef } from "react";
// https://betterprogramming.pub/avengers-snap-effect-with-canvas-and-react-ab698de17bc

class Particle {
  constructor(x, y, color) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.size = 3;
    this.vx = +(Math.random() * 0.8) * 6;
    this.vy = -(Math.random() * 0.8) * 2;
    this.vFactor = 1.01;
  }

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.size, this.size);
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= this.vFactor;
    this.vy *= this.vFactor;

    //this.d++;
  }
}

class Generator {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.particlesArray = [];
    this.gap = 1;
  }

  init(context) {
    const pixels = context.getImageData(0, 0, this.width, this.height).data;
    for (let y = 0; y < this.height; y += this.gap) {
      for (let x = 0; x < this.width; x += this.gap) {
        const index = (y * this.width + x) * 4;
        const red = pixels[index];
        const green = pixels[index + 1];
        const blue = pixels[index + 2];
        const alpha = pixels[index + 3];
        const color = `rgb(${red}, ${green}, ${blue})`;

        if (alpha > 0) {
          this.particlesArray.push(new Particle(x, y, color));
        }
      }
    }

    let chunks = chunk(this.particlesArray, 50);
    this.particlesArray = [];
    chunks.forEach((chunk) => {
      this.particlesArray.push(...shuffle(chunk));
    });

    return this.particlesArray.length;
  }
  draw(context) {
    this.particlesArray.forEach((particle) => particle.draw(context));
  }
  update(counter) {
    this.particlesArray.forEach((particle, index) => {
      if (index < counter) particle.update();
    });
  }
}

export default function CanvasPage() {
  const canvasRef = useRef(null);

  const startAnimation = useCallback((generator, ctx, w, h, count) => {
    let d = 0;
    function animate() {
      console.log(ctx)
      ctx.clearRect(0, 0, w, h);
      generator.draw(ctx);
      generator.update(d);
      if (d <= count) d += 1 + d / 100;
      requestAnimationFrame(animate);
    }
    setTimeout(() => animate(), 100);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = false;

      canvas.width =window.innerWidth;
      canvas.height = window.innerHeight;

      const generator = new Generator(canvas.width, canvas.height);

      const image = new Image();

      image.onload = function () {
        ctx.drawImage(
          image,
          0,
          canvas.height - image.height
        );

        const particlesCount = generator.init(ctx);
        setTimeout(() => {
        startAnimation(
          generator,
          ctx,
          canvas.width,
          canvas.height,
          particlesCount
        );
        }, 5000)
      };
      image.src = "/fi.png";
    }
  }, []);

  return (
    <div >
      <canvas ref={canvasRef}  />
    </div>
  );
}
