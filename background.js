var bg = [];
var fg = [];
var time = new Date();
var lastFrame = new Date();
var fps = 0;

var bgImage = new Image();
bgImage.src = "images/bg3.png";
bg.push(bgImage);

var fgImage = new Image();
fgImage.src = "images/man.png";
fgImage.getImage = function(time){
	return this;
}
//fg.push(fgImage);
//
//fg.push(bird);

function bgDraw(ctx){
	bg.forEach(function(image,b,c){
		ctx.drawImage(image,0,0,image.width,image.height,0,0,ctx.canvas.width,ctx.canvas.height);
	});
}

function fgDraw(ctx){
	fg.forEach(function(sprite){
		//ctx.drawImage(image.getImage(new Date()),(new Date() - time) / 20,0);
		sprite.draw(300,300,((new Date() - time) % 400) < 200 ? 0 : 1);
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
