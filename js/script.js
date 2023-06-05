alert('hola');
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, 700, 500);

lines();

let removeRectangleInLine = 0;
function lines() {
    //pintando = false;
    if (removeRectangleInLine) {
        canvas.removeEventListener('mousedown', rectMouseDown);
        canvas.removeEventListener('mouseup', rectMouseUp);
        canvas.removeEventListener('mousemove', rectMouseMove);
        canvas.removeEventListener('mouseout', rectMouseout);
     };
     let mouse = { x: 0, y: 0};
     paint = function() {
        ctx.lineTo(mouse.x, mouse.y);
        ctx.lineWidth = lineWidthRange();
        ctx.lineJoin = 'round';
        ctx.lineCap = brushstyle;
        ctx.strokeStyle = colors;
        ctx.stroke();
     }
     linesMousemove = function(e) {
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
     }

     linesMousedown = function() {
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        canvas.addEventListener('mousemove', paint, false);
     }

     linesMouseup = function() {
        canvas.removeEventListener('mousemove', paint, false);
     }

     linesMouseout = function() {
        canvas.removeEventListener('mousemove', paint, false);
     }

     canvas.addEventListener('mousedown', linesMousedown, false);
     canvas.addEventListener('mousemove', linesMousemove, false);
     canvas.addEventListener('mouseup', linesMouseup, false);
     canvas.addEventListener('mouseout', linesMouseout, false);
}

let colors;
function changeColors(palette) {
    switch(palette.id) {
        case 'red':
            colors = 'red';
            break;
        case 'red1':
            colors = '#f16161';
            break;
        case 'red2':
            colors = '#f69fa0';
            break;
        case 'orange':
            colors = 'orange';
            break;
        case 'orange1':
            colors = '#f99f62';
            break;
        case 'orange2':
            colors = '#fbb57b';
            break;
        case 'blue':
            colors = '#09c2db';
            break;
        case 'blue1':
            colors = '#8bd3dc';
            break;
        case 'blue2':
            colors = '#b9e3e8';
            break;
        case 'indigo':
            colors = '#0e38ad';
            break;
        case 'indigo1':
            colors = '#546ab2';
            break;
        case 'indigo2':
            colors = '#9c96c9';
            break;
        case 'green':
            colors = 'green';
            break;
        case 'green1':
            colors = '#97cd7e';
            break;
        case 'green2':
            colors = '#c6e2bb';
            break;
        case 'black':
            colors = 'black';
            break;
        case 'black1':
            colors = '#545454';
            break;
        case 'black2':
            colors = '#b2b2b2';
            break;
        case 'yellow':
            colors = 'yellow';
            break;
        case 'yellow1':
            colors = '#f7f754';
            break;
        case 'yellow2':
            colors = '#f7f4b1';
            break;
        case 'purple':
            colors = '#b9509e';
            break;
        case 'purple1':
            colors = '#d178b1';
            break;
        case 'purple2':
            colors = '#e3abce';
            break;
        case 'erase':
            colors = 'white';
            break; 
    }
}

let brushstyle;
function changeBrushStyle(obj) {
    switch(obj.id) {
        case 'round':
            brushstyle = 'round';
            break;
        case 'square':
            brushstyle = 'butt';
            break;
        case 'rough':
            brushstyle = 'square';
            break;
    }
}

function lineWidthRange() {
    let widthLine = document.getElementById('myRange').value;
    return widthLine;
}

function erase() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

let button = document.getElementById('dwnld');
button.addEventListener('click', function(e) {
    let dataURL = canvas.toDataURL('image/png');
    button.href = dataURL;
})

function rectangle() {
    removeRectangleInLine = 1;
    canvas.removeEventListener('mousedown', linesMousedown, false);
    canvas.removeEventListener('mousemove', linesMousemove, false);
    canvas.removeEventListener('mouseup', linesMouseup, false);
    canvas.removeEventListener('mouseout', linesMouseout, false);
    let mouse = {x: 0, y:0};
    draw = function() {
        ctx.fillStyle = 'black';
        ctx.fillStyle = colors;
        ctx.fillRect(mouse.x, mouse.y, mouse.w, mouse.h);
    }
    
    rectMouseMove = function(e) {
        mouse.w = (e.pageX - this.offsetLeft) - mouse.x;
        mouse.h = (e.pageY - this.offsetTop) - mouse.y;
    }

    rectMouseDown = function(e) {
        ctx.beginPath();
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        canvas.addEventListener('mousemove', draw, false);
    }

    rectMouseUp = function() {
        canvas.removeEventListener('mousemove', draw, false);
    }

    rectMouseout = function() {
        canvas.removeEventListener('mousemove', draw, false);
    }

    canvas.addEventListener('mousedown', rectMouseDown, false);
    canvas.addEventListener('mouseup', rectMouseUp, false);
    canvas.addEventListener('mousemove', rectMouseMove, false);
    canvas.addEventListener('mouseout', rectMouseout, false);
}

function triangle() {
    removeRectangleInLine = 1;
    canvas.removeEventListener('mousedown', linesMousedown, false);
    canvas.removeEventListener('mousemove', linesMousemove, false);
    canvas.removeEventListener('mouseup', linesMouseup, false);
    canvas.removeEventListener('mouseout', linesMouseout, false);

    let mouse = {x:0, y:0};
    draw = function() {
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(mouse.y, mouse.x);
        ctx.lineTo(mouse.x, mouse.x);
        ctx.closePath();

        ctx.strokeStyle = colors;
        ctx.stroke();

        ctx.fillStyle = 'black';
        ctx.fillStyle = colors;
        ctx.fill();
    }

    rectMouseMove = function() {
        mouse.w = (e.pageX - this.offsetLeft) - mouse.x;
        mouse.h = (e.pageY - this.offsetTop) - mouse.y;
    }

    rectMouseDown = function(e) {
        ctx.beginPath();
        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        canvas.addEventListener('mousemove', draw, false);
    }

    rectMouseUp = function() {
        canvas.removeEventListener('mousemove', draw, false);
    }

    rectMouseout = function() {
        canvas.removeEventListener('mousemove', draw, false);
    }

    canvas.addEventListener('mousedown', rectMouseDown, false);
    canvas.addEventListener('mouseup', rectMouseUp, false);
    canvas.addEventListener('mousemove', rectMouseMove, false);
    canvas.addEventListener('mouseout', rectMouseout, false);
}

