
render = function (){

myNodelist.innerHTML='';

for (let i = (spisok.tasks.length-1); i >=0 ; i--) {

  let node = document.createElement('li');

  node.setAttribute("data-id",spisok.tasks[i].id.toString());

  let string = '';
  if (spisok.tasks[i].finish!=null) {
  	let temp=spisok.tasks[i].finish-spisok.tasks[i].start;
  	let timeStr='';
  	let measure=['дн. ','ч. ','мин ','сек ','мс.'];
  	let k=[86400000,3600000,60000,1000,1]
  	for (let i = 0; temp > 0; i++) {
  		if ((temp/k[i]).toFixed(0)>0) {
  			timeStr+=(temp/k[i]).toFixed(0)+measure[i];
  			temp=temp%k[i];
  		}
  	}
  	string="задача выполнена за: "+timeStr;
  }
  else{
  	string="начало: "+spisok.tasks[i].start.toTimeString().slice(0,8);
  }
  node.textContent=spisok.tasks[i].text;  
  let time = document.createElement("span");
  time.textContent=string;
  time.className = "time";
  node.appendChild(time);
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  node.appendChild(span);

  


  if (spisok.tasks[i].completed) {
  	node.classList.add('checked');
  }
  else{
  	node.classList.remove('checked');
  }

  let activecontrol=document.querySelector('.active');
  if(activecontrol.getAttribute('name')=='showAll' || (activecontrol.getAttribute('name')=='showChecked' &&  node.getAttribute('class')=='checked') || (activecontrol.getAttribute('name')=='showUnchecked' &&  node.getAttribute('class')!='checked')){
  	myNodelist.appendChild(node);
  }
}
document.querySelector('.showAll').textContent='All('+spisok.all+')';
document.querySelector('.showChecked').textContent='Done('+spisok.checked+')';
document.querySelector('.showUnchecked').textContent='in progress('+spisok.unchecked+')';


try {
	localStorage.setItem('tasks',JSON.stringify(spisok.tasks));
}
catch(e){
	console.log("cant save");
}

}



