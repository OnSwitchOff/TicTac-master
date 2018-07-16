let task = function(text){
	this.text=text;
	this.start=new Date();
	this.finish=null;
	this.completed=false;
	this.id=null;
}