const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting() {
    painting = false;
}

function onMouseMove(event) {
    const screenX = event.offsetX;
    const screenY = event.offsetY;
}

function onMouseDown(event) {
    painting = true;
}

function onMouseUp(event) {
    stopPainting();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mousedown", onmouseDown) 
    canvas.addEventListener("mouseup", onMouseUp)
    canvas.addEventListener("mouseleave", stopPainting)
}