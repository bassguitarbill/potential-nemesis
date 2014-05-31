function Sprite(ctx){
	this.ctx = ctx;
}

Sprite.prototype.image = [];

Sprite.prototype.draw = function(xpos, ypos, index){
	//console.log(xpos, ypos, index);
	this.ctx.drawImage(this.image[index],xpos,ypos);

}
