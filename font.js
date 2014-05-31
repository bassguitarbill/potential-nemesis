var font = new Image();
font.src = "images/font.png";

var drawNum = function(ctx,x,y,number){
	var imgScale = 8;
	ctx.drawImage(font,imgScale*number,0,imgScale,imgScale,x,y,imgScale*5,imgScale*5);
}


