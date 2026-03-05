$(function () {
// initialize canvas and context when able to
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
window.addEventListener("load", loadJson);

function setup() {
if (firstTimeSetup) {
halleImage = document.getElementById("player");
projectileImage = document.getElementById("projectile");
cannonImage = document.getElementById("cannon");
$(document).on("keydown", handleKeyDown);
$(document).on("keyup", handleKeyUp);
firstTimeSetup = false;
//start game
setInterval(main, 1000 / frameRate);
}

// Create walls - do not delete or modify this code
createPlatform(-50, -50, canvas.width + 100, 50); // top wall
createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
createPlatform(-50, -50, 50, canvas.height + 500); // left wall
createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

//////////////////////////////////
// ONLY CHANGE BELOW THIS POINT //
//////////////////////////////////

// TODO 1 - Enable the Grid
toggleGrid();


// TODO 2 - Create Platforms
createPlatform(150,700, 200,20,"pink");
createPlatform(450,600, 200,20,"pink");
createPlatform(750,500, 200,20,"pink");
createPlatform(450,200, 200,20,"pink");
createPlatform(750,100, 200,20,"pink");

createPlatform(1300,500, 200,20,"pink");

createPlatform(150,300, 200,20,"pink");
createPlatform(450,400, 200,20,"pink");



// TODO 3 - Create Collectables
createCollectable("database",1130,350,0.5,0.7);
createCollectable("diamond",520,450,0.5,0.7);
createCollectable("max",780,300,0.5,0.7);
createCollectable('steve', 1100, 624, 0.5, 0.7);
createCollectable('database', 250, 625, 0.5, 0.7);
createCollectable('database', 475, 300, 0.5, 0.7);


// TODO 4 - Create Cannons
createCannon("left",480,2000);
createCannon("right",320,2000);
createCannon('bottom', 339, 1000);
createCannon('bottom', 639, 1000);
createCannon('right', 600, 1000);  

//////////////////////////////////
// ONLY CHANGE ABOVE THIS POINT //
//////////////////////////////////
}

registerSetup(setup);
});