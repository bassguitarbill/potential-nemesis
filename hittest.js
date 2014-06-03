var canvas = ctx.canvas;

ctx.fillStyle = '#FF0000';
var state = 0;
var aLeft,aUp,aRight,aDown;
var bLeft,bUp,bRight,bDown;
var offset = - 13;

canvas.addEventListener("mousedown",function(e){
	state = state % 4;
	x = e.pageX + offset;
	y = e.pageY + offset;
	if(state == 0) {
		aLeft = x;
		aUp = y;
		canvas.width = canvas.width;
	} else if(state == 1) {
		aRight = x;
		aDown = y;
		ctx.fillRect(aLeft,aUp,aRight-aLeft,aDown-aUp);
	} else if(state == 2) {
		bLeft = x;
		bUp = y;
	} else if(state == 3) {
		bRight = x;
		bDown = y;
		ctx.fillRect(bLeft,bUp,bRight-bLeft,bDown-bUp);
		alert(collide(aLeft,aUp,aRight-aLeft,aDown-aUp,bLeft,bUp,bRight-bLeft,bDown-bUp));
	}

	state++;
});
