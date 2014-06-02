var canvas = ctx.canvas;

ctx.fillStyle = '#FF0000';
var state = 0;
var aLeft,aUp,aRight,aDown;
var bLeft,bUp,bRight,bDown;

canvas.addEventListener("mousedown",function(e){
	state = state % 4;
	if(state == 0) {
		aLeft = e.pageX;
		aUp = e.pageY;
		canvas.width = canvas.width;
	} else if(state == 1) {
		aRight = e.pageX;
		aDown = e.pageY;
		ctx.fillRect(aLeft,aUp,aRight-aLeft,aDown-aUp);
	} else if(state == 2) {
		bLeft = e.pageX;
		bUp = e.pageY;
	} else if(state == 3) {
		bRight = e.pageX;
		bDown = e.pageY;
		ctx.fillRect(bLeft,bUp,bRight-bLeft,bDown-bUp);
		alert(collide(aLeft,aUp,aRight,aDown,bLeft,bUp,bRight,bDown));
	}

	state++;
});
