function resize(canvas,width,height,time){
	var oldWidth = canvas.width;
	var oldHeight = canvas.height;

	var dWidth = width - oldWidth;
	var dHeight = height - oldHeight;

	var sWidth = dWidth / time;
	var sHeight = dHeight / time;

	var startTime = new Date().getTime();
	var resize = setInterval(function(){
		canvas.width = Math.floor(oldWidth + (sWidth * (new Date() - startTime)));
		console.log(canvas.width);
		canvas.height = Math.floor(oldHeight + (sHeight * (new Date() - startTime)));
		console.log(canvas.height);
		bgDraw(ctx);
		fgDraw(ctx);
		if(startTime + time < new Date().getTime()){
			window.clearInterval(resize);
		}
	},1);
}
