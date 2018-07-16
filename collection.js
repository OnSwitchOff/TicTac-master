let collection = function(){
	this.tasks = [];
	this.all = this.tasks.length;
	this.checked = this.tasks.reduce(function(n,value){return value.completed?n++:n;},0);
	this.unchecked = this.all-this.checked;
	this.id = 0;

	this.add = function(){
		if (document.querySelector('#myInput').value) {
			this.id++;
			let t = new task(document.querySelector('#myInput').value);
			t.id=this.id;
			this.tasks.push(t);
			document.querySelector('#myInput').value="";
			this.all++;
			this.unchecked++;
			render();
		}
	}

	this.getIndex = function(id){
		for (let i = 0; i < this.tasks.length; i++) {
			if (id==this.tasks[i].id.toString()) {
				return i;
			}			
		}
		return -1;
	}

	this.complete = function(id){
		if (this.tasks[this.getIndex(id)].completed) {
			this.tasks[this.getIndex(id)].start=new Date();
			this.tasks[this.getIndex(id)].finish=null;
			this.unchecked++;
			this.checked--;
		}
		else{
			this.tasks[this.getIndex(id)].finish=new Date();
			this.unchecked--;
			this.checked++;
		}		
	this.tasks[this.getIndex(id)].completed=!this.tasks[this.getIndex(id)].completed;		

		render();
	}

	this.remove = function(id){
		if (this.tasks[this.getIndex(id)].completed) {
			this.checked--;
		}
		else{
			this.unchecked--;
		}
		this.tasks.splice(this.getIndex(id),1);
		this.all--;

		render();
	}
}