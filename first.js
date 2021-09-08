img = "";
status = "";
object = [];

function back() {
    window.location = "enter.html";
}

function preload() {
    img = loadImage("images.jpg");
}

function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}
