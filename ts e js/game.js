var canvas = document.querySelector('canvas');
console.log(typeof (canvas));
var ctx = canvas.getContext('2d');
var canvasWidth = 800;
var canvasHeight = 576;
canvas.widthidth = canvasWidth;
canvas.height = canvasHeight;
var prevTime = 0;
animate();
function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    var delta = (performance.now() - prevTime / 1000);
    var fps = 1 / delta;
    prevTime = performance.now();
    console.log("Fps: ".concat(fps));
}
