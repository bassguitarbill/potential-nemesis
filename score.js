function drawScore(ctx, score){
/*	var x = Math.floor(Math.log(score) / Math.log(10));
	x = ctx.canvas.width - (20*(x+1));
	var y =  60;

	ctx.font = '30px monospace';
	ctx.lineWidth = 1;
	ctx.fillStyle = 'white';
	ctx.fillText(score, x, y);

	ctx.strokeStyle = "black";
	ctx.strokeText(score, x, y);
*/
	for(var i=0; i<score.toString().length; i++){
		drawNum(ctx,i*40,0,parseInt(score.toString()[i]));
	}
}
