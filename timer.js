var gblTime = new Date();
var timer = function(){
	return Math.floor((new Date() - gblTime)/200);
}

var frameRate = 60;
var frames = 0;
var last = new Date().getTime();
setInterval(function() {
	var now = new Date().getTime();
	
	var tick = new CustomEvent('tick');
	tick.dt = now - last;

	document.dispatchEvent(tick);

	last = now;
	frames++;
},1000/frameRate);

