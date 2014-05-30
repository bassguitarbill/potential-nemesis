var period = 400;
var duty = .5;

var birdDown =new Image();
birdDown.src = "images/birds_down_big.png";

var birdUp = new Image();
birdUp.src = "images/birds_up_big.png";

var bird = new Image();

bird.getImage = function(time){

	if((time % period) < (duty * period)){
		return birdDown;
	} else {
		return birdUp;
	}

}
	
