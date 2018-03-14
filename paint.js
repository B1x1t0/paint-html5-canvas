let canvas = document.querySelector('#paint');
let context = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

context.strokeStyle='#BADA55';
context.lineJoin='round';
context.lineCap='round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw (e) {
    if (!isDrawing) return;
    context.beginPath();
    context.moveTo(lastX,lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    [lastX,lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX,lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);




