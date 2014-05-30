var bg = [];
var fg = [];
var time = new Date();
var lastFrame = new Date();
var fps = 0;

var bgImage = new Image();
bgImage.src = "images/bg.png";
bg.push(bgImage);

var fgImage = new Image();
fgImage.src = "images/man.png";
fg.push(fgImage);

function bgDraw(ctx){
	bg.forEach(function(image,b,c){
		ctx.drawImage(image,0,0,image.width,image.height,0,0,ctx.canvas.width,ctx.canvas.height);
	});
}

function fgDraw(ctx){
	fg.forEach(function(image){
		ctx.drawImage(image,(new Date() - time) / 20,0);
	});
}

var draw = setInterval(function(){
	fps = (Math.round(1000/(new Date() - lastFrame)) + " FPS");
	lastFrame = new Date();
	bgDraw(ctx);
	fgDraw(ctx);
	drawScore(ctx,Math.floor((new Date() - time)/40));
},1000/60);

var updateFps = setInterval(function(){
	document.getElementById("fps").textContent = fps;
},1000);
