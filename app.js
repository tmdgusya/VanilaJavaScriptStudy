const canvas = document.getElementById("jsCanvas");
const context = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColors");

canvas.width = 700;
canvas.height = 700;

context.strokeStyle = "#2c2c2c";
context.lineWidth = 2.5;


let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function handleColorClick(event) {
    context.strokeStyle = event.target.style.backgroundColor;
}

function onMouseMove(event) {
    const screenX = event.offsetX;
    const screenY = event.offsetY;
    if (!painting) {
        context.beginPath();
        context.moveTo(screenX, screenY);
    }

    if(painting) {
        context.lineTo(screenX, screenY);
        context.stroke();    }
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mousedown", startPainting) 
    canvas.addEventListener("mouseup", stopPainting)
    canvas.addEventListener("mouseleave", stopPainting)
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick))