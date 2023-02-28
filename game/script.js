let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let nx = 27;
let ny = 12;
let sqside = 50;
let herox = 0;
let heroy = 0;
let prx = Math.floor(Math.random() * nx);
let pry = Math.floor(Math.random() * ny);
console.log("prx");
console.log("pry");
canvas.width = nx * sqside;
canvas.height = ny * sqside;

function drawMap(){
	
	context.clearRect(0, 0, canvas.width, canvas.height);
	for (let i = 0; i < nx; i++) {
		for (let j = 0; j< ny; j++) {
		context.strokeRect(i * sqside, j * sqside, sqside, sqside);
		context.drawImage(heroimg, sqside * herox, sqside * heroy, sqside, sqside);
		context.drawImage(primg, sqside * prx, sqside * pry, sqside, sqside);
		}
	}
}
//context.fillRect(herox * sqside, heroy * sqside,sqside,sqside);
let primg = new Image();
primg.src = "5lv.png";
let heroimg = new Image();
heroimg.src = "hero.png";

drawMap();
canvas.onclick = function(e) {
	let x = e.x - canvas.offsetLeft;
	let y = e.y - canvas.offsetTop;
	herox = Math.floor(x/sqside);
	heroy = Math.floor(y/sqside);
	drawMap();
}
function moveLeft() {
	herox--;
	drawMap();
}
function moveRight() {
	herox++;
	drawMap();
}
function moveUp() {
	heroy--;
	drawMap();
}
function moveDown() {
	heroy++;
	drawMap();
}
document.onkeypress = function(e) {
	let key = e.key;
	switch (key) {
		case "a" : moveLeft(); break;
		case "s" : moveDown(); break;
		case "d" : moveRight(); break;
		case "w" : moveUp(); break;
	}

}