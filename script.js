


let spisok=new collection();

try {
	spisok.tasks=JSON.parse(localStorage.getItem("tasks"));
}
catch(e){
	console.log("no tasks");
}

let myNodelist = document.querySelector("#myUL");

let addBtn = document.querySelector('.addBtn');
let myInput = document.querySelector('#myInput');
myInput.addEventListener('keypress',function(e){if (e.charCode == 13) spisok.add();});
addBtn.addEventListener('click',function(e){spisok.add()});

myNodelist.addEventListener('click',function(e){
	if(e.target.getAttribute('class')=='close'){
		console.log(e.target);
		console.log(e.target.parentElement);
		spisok.remove(e.target.parentElement.getAttribute('data-id'));
	}
	else if(e.target.getAttribute('class')!='time'){
		spisok.complete(e.target.getAttribute('data-id'));
	}
});


myNodelist..addEventListener("dblclick", function(e){
	
});


let controls=document.querySelector('.controls');

controls.addEventListener('click',function(e){
	let controllist=document.querySelectorAll('.controls>div')
	for (let i = 0; i < controllist.length; i++) {
		controllist[i].classList.remove('active');
	}
	e.target.classList.add('active');
	render();
})




/*localStorage.item["tasks"]=mem;*/