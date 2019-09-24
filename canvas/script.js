window.onload = init;
var canvas;
var ctx;
var rect1 = {
    width: 150,
    height: 100,
    posX: Math.random() * 20,
    posY: Math.random() * 20,
    xSpeed: 3,
    ySpeed: 3,
    color: 'red'
}
var dvdLogo = new Image();
dvdLogo.src = 'dvdlogo.png'

function init() {
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;

    //requestAnimationFrame(animateRect);
    requestAnimationFrame(animateDVD);

    canvas.addEventListener('mousemove', function (evt) {
        mousePos = getMousePos(canvas, evt);
        var message = " " + mousePos.x + ", " + mousePos.y;
        document.querySelector("#coords").innerHTML = message;
    });

    ctx.drawImage(dvdLogo, 10, 10, 150, 100);


    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: Math.round(evt.clientX - rect.left),
            y: Math.round(evt.clientY - rect.top),
        }
    }
}

function animateRect() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = rect1.color;
    ctx.fillRect(rect1.posX, rect1.posY, rect1.width, rect1.height);
    rect1.posX += rect1.xSpeed;
    rect1.posY += rect1.ySpeed;
    if ((rect1.posX + rect1.width >= canvas.width) || (rect1.posX <= 0)) {
        rect1.xSpeed = -rect1.xSpeed;
    }
    if ((rect1.posY + rect1.height >= canvas.height) || (rect1.posY <= 0)) {
        rect1.ySpeed = -rect1.ySpeed;
    }
    requestAnimationFrame(animateRect);
}

function animateDVD() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(dvdLogo, rect1.posX, rect1.posY, rect1.width, rect1.height);
    rect1.posX += rect1.xSpeed;
    rect1.posY += rect1.ySpeed;
    if ((rect1.posX + rect1.width >= canvas.width) || (rect1.posX <= 0)) {
        rect1.xSpeed = -rect1.xSpeed;
    }
    if ((rect1.posY + rect1.height >= canvas.height) || (rect1.posY <= 0)) {
        rect1.ySpeed = -rect1.ySpeed;
    }
    requestAnimationFrame(animateDVD);
}