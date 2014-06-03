var compare = function(low,high,x){
	console.log(arguments);
	if(x < low) return -1
	if(x > high) return 1
	return 0
}

var cont = function(x,y,w,h,c){
	console.log(arguments);
	return {x:compare(x,x+w,c.x),y:compare(y,y+h,c.y)}
}

var collide = function(ax, ay, aw, ah, bx, by, bw, bh){
	var c = cont(ax,ay,aw,ah,{x:bx,y:by})
	console.log(c)	
	if(c.x == 1 || c.y == 1)
		return false
	if(c.x + c.y == 0)
		return true
	if(c.x == 0)
		return cont(ax,ay,ah,aw,{x:bx,y:by+bh}).y != -1
   	if(c.y == 0)
		return cont(ax,ay,ah,aw,{x:bx+bw,y:by}).x != -1
	c = cont(ax,ay,ah,aw,{x:bx+bw,y:by+bh})
	return c.x != -1 && c.y != -1
}
	
