const object = {
	name: "MyName",
	surname: "SurName"
}


function createSmartObject(obj) {
	const smartObject = {__data:{}};
	const keys = Object.keys(obj);
	for (const key of keys) {
		const value = obj[key];
		const descriptors = Object.getOwnPropertyDescriptor(obj, key);
		// console.log("descriptors: ", descriptors);
		Object.defineProperty(smartObject.__data, key, descriptors);
	}
	return smartObject;
}



function defineComputedProperty(obj, propName, refs, cb) {
	const smartObject = createSmartObject(obj);
	const srcKeys = Object.keys(smartObject.__data);
	
	refs.forEach((ref) => {
		if(srcKeys.includes(ref)) {
			Object.defineProperty(smartObject, ref, {
				set(value) {
					this.__data[ref] = value;
					const values = refs.map((ref) => this.__data[ref]);
					// console.log("values: ", values);
					this[propName] = cb(...values);
				},
				get() {
					return this.__data[ref];
				}
			})
		} else {
			throw new Error(`Unknown key '${ref}'!`);
		}
	});
	
	const values = refs.map((ref) => smartObject[ref]);
	smartObject[propName] = cb(...values);
	return smartObject;
}

const result = defineComputedProperty(object, 'fullName', ['name', 'surname'], (name, surname) => { return `${surname} ${name}`; });


// function defineComputedProperty(obj,param,usedParams = [],fun = (()=>{return "";})) {
// 	obj[param] = "";
// 	for (var i = 0; i < usedParams.length; i++) {
// 							//console.log(this[usedParams[i]]);
		
// 		eval(`

// 			Object.defineProperty(object,"${usedParams[i]}",{
// 				set: function (value){

// 					this.${usedParams[i]} = value;
// 				},
// 				get: function(){
// 					return this.${usedParams[i]};
// 				}
// 			});
// 		`);

// 	}
// }


// defineComputedProperty(object,"NN",["name","surname"],function (object) {
// 	return `${object.name} & ${object.surname}`;
// });



// DOM API

const idSelector = document.getElementById('header');
const classSelector = document.getElementsByClassName('test1');
const tagSelector = document.getElementsByTagName('li');

const selector = document.querySelector('#header');
const selectors = document.querySelectorAll('.test');


function $(selector) {
	return document.querySelectorAll(selector);
}


console.dir(selector);

const list = document.querySelector('ol');

const element = document.createElement('li');
element.textContent = "hello! I'm new list item!";
// list.appendChild(element);

// list.insertBefore(element, document.querySelector('li:first-child'));
list.insertBefore(element, null);


element.style.color = 'green';
element.style.fontSize = '20px';


// element.classList.add();
// element.classList.toggle();
// element.classList.remove();
// element.classList.contains();




const img = document.createElement('img');
img.src = 'https://js.cx/clipart/winnie-mult.jpg';
document.body.appendChild(img);








[Teacher] https://learn.javascript.ru/float
[Teacher] https://learn.javascript.ru/css-selectors