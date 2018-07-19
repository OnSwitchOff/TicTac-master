const url=[

"https://jsonplaceholder.typicode.com/users",
"https://jsonplaceholder.typicode.com/albums",
"https://jsonplaceholder.typicode.com/posts",
"https://jsonplaceholder.typicode.com/photos"
]

let xhr=new XMLHttpRequest();
let index=0;


let usersData={};
let albumsData={};
let postsData={};
let photos={};
let Data=[usersData,albumsData,postsData,photos] ;

xhr.open('get',url[index]);
xhr.send();

xhr.onload=function()
	{			
		if(index<3){
			Data[index]=JSON.parse(xhr.response);
			index++;
			xhr.open('get',url[index]);
			xhr.send();
		}		
	}

console.log(Data);



