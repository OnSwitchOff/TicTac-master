let myNodelist = document.querySelector("#myUL");
let addBtn = document.querySelector('.addBtn');
let myInput = document.querySelector('#myInput');
let controls=document.querySelector('.controls');

let spisok=new collection();
spisok.load();

myInput.addEventListener('keypress',function(e){if (e.charCode == 13) spisok.add();});
addBtn.addEventListener('click',function(e){spisok.add()});

myNodelist.addEventListener('click',function(e){
	timeoutId = setTimeout(function(){
	if(e.target.getAttribute('class')=='close'){
		console.log(e.target);
		console.log(e.target.parentElement);
		spisok.remove(e.target.parentElement.getAttribute('data-id'));
	}
	else if(e.target.getAttribute('class')=='taskStr'){
		spisok.complete(e.target.parentElement.getAttribute('data-id'));
	}
}, 200)});

myNodelist.addEventListener('dblclick',function(e){
	console.log("+");
	console.log(e.target.textContent);
	clearTimeout(timeoutId);
	clearTimeout(timeoutId - 1);
	if(e.target.getAttribute('class')=='taskStr'){
		console.log("+");
		e.target.parentElement.querySelector('input').classList.remove("none");
		let tempStr=e.target.textContent;
		e.target.textContent='';
		e.target.parentElement.querySelector('input').value=tempStr;
		document.addEventListener('click',temp=function(ev){
			console.log(e.target);
			console.log(e.target.parentElement.querySelector('input').value);			
			console.log(ev.target);
			console.log("*");
			if(ev.target.getAttribute('name')!='task' && e.target.parentElement.querySelector('input').value!='')
			{
				console.log('fin');
				document.removeEventListener('click', temp);
				/*document.removeEventListener('keypress');*/
				spisok.edit(e.target.parentElement.getAttribute('data-id'),e.target.parentElement.querySelector('input').value);
				e.target.parentElement.querySelector('input').classList.add("none");
			}
			else if(e.target.parentElement.querySelector('input').value=='')
			{
				console.log('start');
				document.removeEventListener('click', temp);
				e.target.textContent=tempStr;
				e.target.parentElement.querySelector('input').classList.add("none");
			}
		});
		
	}
});




controls.addEventListener('click',function(e){
	let controllist=document.querySelectorAll('.controls>div')
	for (let i = 0; i < controllist.length; i++) {
		controllist[i].classList.remove('active');
	}
	e.target.classList.add('active');
	render();
})


/*localStorage.item["tasks"]=mem;*/