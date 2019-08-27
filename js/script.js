// Junior Lam Tiang
// TechDegree - Project2
// List Pagination and Filtering


//global variables that include the list of students, the amount of pages, and maximum amount of students on each page
const students = document.getElementsByClassName("student-item cf");
const pages = Math.floor((students.length / 10) + 1)
const limit = 10;

//function that shows the specified page with specified students according to the limit
const showPage = (list,page) => {
	//variables that hold the start and end of index
	const startIndex = (page * limit) - limit;
	const endIndex = page * limit;

	//loop that will display only the students that fall in between the indexes and hide the rest
	for(let i = 0; i < list.length; i += 1){
		if (i >= startIndex && i < endIndex){
			list[i].style.display = '';
		} else {
			list[i].style.display = 'none';
		}
	}
}

//function that will activate upon click to show specified students
function appendPage(list){
	//variables that hold the div and ul elements
	const div = document.createElement('div');
	const ul = document.createElement('ul');

	//appends the ul element to the div then appends the div to the page
	document.body.appendChild(div);
	div.classList.add('pagination');
	div.append(ul);
	
	//loop that will create page bar at the bottom and can be interacted with
	for(let i = 0; i < pages; i += 1){
		//variables that hold the li and a elements
		let li = document.createElement('li');
		let a = document.createElement('a');

		//appends the a element with it's link to the li element that will be appended to the ul element above
		a.href = '#';
		a.textContent = i + 1;
		li.append(a);
		ul.append(li);

		//conditional that gives the first a element the class active
		if(a.textContent == 1){
			a.classList.add('active');
		}

		//event listener that waits for click on the a elements
		a.addEventListener ('click', (e) => {
			//variables that hold the raget and the element with the class active
			const page = e.target;
			const active = document.getElementsByTagName('a');

			//when clicked the page will show new specified students
			showPage(list, a.textContent);

			//loop that looks through all the a elements and finds the class active
			for(let j = 0; j < pages; j += 1){
				//conditional that checks if element has class active
				if(active[j].classList.contains('active')){
					//if the class is active it will no longer be
					active[j].classList.remove('active');
				}
			}
			//target that has been clicked will be the new active class
			page.classList.add('active');
		});
	}
}

//displays the first page
showPage(students,1);

//displays the interactive page bar at bottom
appendPage(students);