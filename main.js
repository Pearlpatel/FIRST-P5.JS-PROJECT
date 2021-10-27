function setup() {
    canvas=createCanvas(650,650);
    canvas.center();
cam=createCapture(VIDEO);
cam.hide();
}

function draw() {
    image(cam,0,0,500,500);
    circle(30, 30, 50);
    circle(470, 30, 50);
    circle(250, 30, 50);
    circle(30, 470, 50);
    circle(30, 250, 50);
    circle(250, 470, 50);
    circle(470, 470, 50);
    circle(470, 250, 50);
}
