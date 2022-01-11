var mouseEvent = "empty";
var last_x,last_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContex("2d");

var color = "black";
var width = 3;

canvas.addEventListener("mousedown", mouse_down);

function mouse_down(e){
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;

    mouseEvent = "mousedown";
    
}


canvas.addEventListener("mousemove", mouse_move);

function mouse_move(e){
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;
    
    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        
        console.log("Last position of x and y coordinates = ");
        console.log("X = " + last_x + "And Y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y coordinates = ");
        console.log("X = " + currentX + "And Y = " + currentY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    }
    last_x = currentX;
    last_y = currentY;
}

canvas.addEventListener("mouseup", mouse_up);

function mouse_up(e){
    mouseEvent = "mouseUp";

}

canvas.addEventListener("mouseleave", mouse_leave);

function mouse_leave(e){
    mouseEvent = "mouseLeave";
}

function cleararea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

