var bg = [];
var fg = [];
var time = new Date();
var lastFrame = new Date();
var fps = 0;

var bgImage = new Image();
bgImage.src = "images/bg3.png";
bg.push(bgImage);

function bgDraw(ctx){
	bg.forEach(function(image,b,c){
		ctx.drawImage(image,0,0,image.width,image.height,0,0,ctx.canvas.width,ctx.canvas.height);
	});
}

function fgDraw(ctx){
	fg.forEach(function(sprite){
		sprite.draw(sprite.x,sprite.y);
	});
}

var sc = 0;
var draw = setInterval(function(){
	fps = (Math.round(1000/(new Date() - lastFrame)) + " FPS");
	lastFrame = new Date();
	bgDraw(ctx);
	fgDraw(ctx);
	drawScore(ctx,sc);
},1000/60);

var updateFps = setInterval(function(){
	document.getElementById("fps").textContent = fps;
},1000);
