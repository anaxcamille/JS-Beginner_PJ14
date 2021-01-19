let submit = document.getElementById('submit');
let clearlist = document.getElementById('clear');
submit.addEventListener('click',function(){
	let todo = document.getElementById('todo').value;
	if(todo === ""){
		alert("Please input task first!");
	}else{
	let container = document.getElementById('container');
	let p = document.createElement('p');
	let button = document.createElement('button');
	let check = document.createElement('button');
	container.appendChild(p);
	p.appendChild(button);
	p.appendChild(check);
	button.className='delete';
	check.className='delete';
	p.id ="todolist";
	p.appendChild(document.createTextNode(todo));
	check.appendChild(document.createTextNode('✓'));
	button.appendChild(document.createTextNode('x'));
	empty();
		clearlist.addEventListener('click', function (){
			p.remove();
			check.remove();
			button.remove();
		})
		check.addEventListener('click', function (){
		p.style.textDecorationLine="line-through"; 
		})
		button.addEventListener('click', function(){
			p.remove();
			check.remove();
			button.remove();
		});
	}
	
});

function empty(){
	let todo = document.getElementById('todo').value ="";
}

