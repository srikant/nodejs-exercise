function Point(x,y){
	this.x = x;
	this.y = y;
}

Point.prototype.print = function() {
	console.log(this.x + ', ' + this.y);
}

module.exports = Point;