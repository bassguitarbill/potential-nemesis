function Player(sprite){
	this.sprite = sprite;
	
	this.draw = function(xpos,ypos){
		this.sprite.draw(xpos,ypos,timer()%2);
	}

}



Player.prototype.x = 0;
Player.prototype.y = 0;
Player.prototype.xVel = 0;
Player.prototype.yVel = 0;

//window.onKeyUp = function(e){


//Player.prototype.move = function(
