function setup() {
  createCanvas(windowWidth-100, windowHeight-100)
	//Other Variables Lmao
  playerX = 30
  playerY = 30
}
/*
class player(x, y, speed) {
  make() {
    this.x = x
    this.y = y
    this.speed = speed
    
  }
}
*/
function draw() {
	background(50)
	//player controls

	noStroke()
	fill("blue")
	square(playerX,playerY,55,15);
  
}


function keyPressed() {
  //w 87
  //a 65
  //s 84
  //d 68
  if (keyCode === UP_ARROW || keyCode === 87) {
    playerY -= 
  }
	if (keyCode === DOWN_ARROW || keyCode === 84) {
    playerY += 10
	}
	if (keyCode === RIGHT_ARROW || keyCode === 65) {
		playerX += 10
	}
	if (keyCode === LEFT_ARROW || keyCode === 68) {
		playerX -= 10
	}
}

