var player = new Player(bird);
player.x = 200;
player.y = 200;
fg.push(player);

document.addEventListener('tick', function(tick){
	console.log("tick");
	player.x += player.xVel;
	player.y += player.yVel;
});

window.onkeydown = function(e){
	var key = e.keyCode ? e.keyCode : e.which;
	if(key == 37){
		player.xVel = -2;
	} else if(key == 38) {
		player.yVel = -2;
	} else if(key == 39) {
		player.xVel = 2;
	} else if(key == 40) {
		player.yVel = 2;
	}
}
window.onkeyup = function(e){
	var key = e.keyCode ? e.keyCode : e.which;
	if(key == 37 && player.xVel == -2){
		player.xVel = 0;
	}
	if(key == 38 && player.yVel == -2 ) {
		player.yVel = 0;
	}
	if(key == 39 && player.xVel == 2) {
		player.xVel = 0;
	}
	if(key == 40 && player.yVel == 2) {
		player.yVel = 0;
	}
}
