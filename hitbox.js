var cont = function(left,top,right,down,c){
	console.log(arguments);
	console.log(c);
	if(c.y < top){
		if(c.x < left) {
			return 1;
		} else if (c.x < right) {
			return 2;
		} else {
			return 3;
		}
	} else if(c.y < down) {
		if(c.x < left) {
			return 4;
		} else if (c.x < right) {
			return 5;
		} else {
			return 6;
		}
	} else {
		if(c.x < left) {
			return 7;
		} else if (c.x < right) {
			return 8;
		} else {
			return 9;
		}
	}
}

var collide = function(aLeft,aUp,aRight,aDown,bLeft,bUp,bRight,bDown){
	var c = cont(aLeft,aUp,aRight,aDown,{x:bLeft,y:bUp});
	console.log(c);

	if (c == 5) {
		return true;
	}

	if([3,6,7,8,9].indexOf(c) != -1){
		return false;
	}

	if(c == 2){
		console.log(cont(aLeft,aUp,aRight,aDown,{x:bLeft,y:bDown})); 
		return cont(aLeft,aUp,aRight,aDown,{x:bLeft,y:bDown}) != 2;
	}

	if(c == 4){
		console.log(cont(aLeft,aUp,aRight,aDown,{x:bRight,y:bUp}));
		return cont(aLeft,aUp,aRight,aDown,{x:bRight,y:bUp}) != 4;
	}
	console.log(cont(aLeft,aUp,aRight,aDown,{x:bRight,y:bDown}));
	return ([5,6,8,9].indexOf(cont(aLeft,aUp,aRight,aDown,{x:bRight,y:bDown})) != -1);
}
