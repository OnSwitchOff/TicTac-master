let collection = function(){
	this.tasks = [];
	this.id = 0;
	this.all = this.tasks.length;
	this.checked = this.tasks.reduce(function(n,value){return value.completed?n++:n;},0);
	this.unchecked = this.all-this.checked;

	this.load=function(){
		console.log(JSON.parse(localStorage.getItem("tasks")));
		console.log(JSON.parse(localStorage.getItem("collectionId")));
		if(localStorage.getItem("tasks")!=null){
			this.tasks=JSON.parse(localStorage.getItem("tasks"));
			this.id=parseInt(localStorage.getItem("collectionId"));
			this.tasks.forEach(function(value){
				value.start=new Date(value.start);
				value.finish!=null?value.finish=new Date(value.finish):value.finish=null;
				/*value.completed==true?value.completed=true:value.completed=false;*/
			});
		}
		else{
			console.log("no tasks");
		}
		this.all = this.tasks.length;
		this.checked = this.tasks.reduce(function(n,value){
			console.log(value.completed);
			return value.completed? n+=1 : n;},0);
		this.unchecked = this.all-this.checked;
		render();
	};	

	this.add = function(){
		if (document.querySelector('#myInput').value) {
			this.id++;
			let t = new task(document.querySelector('#myInput').value);
			t.id=this.id;
			console.log(this);
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

	this.edit = function(id,string){
		this.tasks[this.getIndex(id)].text=string;
		render();
	}
}