const canvas:any = document.querySelector('canvas');
const ctx:any = canvas.getContext('2d');
const canvasWidth: number = 800;
const canvasHeight: number = 576;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

ctx.fillRect(0, 0, canvasWidth, canvasHeight);

