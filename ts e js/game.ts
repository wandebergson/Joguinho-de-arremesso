const canvas:any = document.querySelector('canvas');
console.log(typeof(canvas));
const ctx:any = canvas.getContext('2d');
const canvasWidth: number = 800;
const canvasHeight: number = 576;

canvas.widthidth = canvasWidth;
canvas.height = canvasHeight;

let prevTime:number = 0;
animate()

function animate(){
    window.requestAnimationFrame(animate);
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    let delta: number = (performance.now() - prevTime / 1000);
    let fps: number = 1 / delta;
    prevTime = performance.now();
    console.log(`Fps: ${fps}`)
}

