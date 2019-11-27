
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');


//boutons;

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


//Compteur;
 let counter = 1;
 const size = carouselImages[0].clientWidth;

 carouselSlide.style.transform = 'translateX(' + ( -size * counter) + 'px)';


//boutons auditeurs
nextBtn.addEventListener('click', () => {
	if(counter >= carouselImages.length - 1) return;
	carouselSlide.style.transition = "transform 0,4s ease-in-out";
	counter++;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
	if(counter <= 0) return;
	carouselSlide.style.transition = "transform 0,4s ease-in-out";
	counter--;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend',() =>{
	if(carouselImages[counter].id=== 'lastClone'){
		carouselSlide.style.transition="none";
		counter=carouselImages.length-2;
		carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
	}
	if(arouselImages[counter].id=== 'firstClone'){
		carouselSlide.style.transition="none";
		counter=carouselImages.length - counter;
		carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
	}
});


















/*window.addEventListener("load", event => {
	console.log("loaded");
	main();
});

const main = event => {
	
	console.log("MAIN");
	
	let component = new MyComponent("dummy");
	let myElement = document.createElement("div")
	document.body.appendChild(myElement);
	myElement.style.width="50px";
	myElement.style.height="50px";
	myElement.style.backgroundColor = "#FF0000";
	myElement.addEventListener("click",onClick);

}
const onClick = event=> {
	console.log("clicked!!");
	let component = new MyComponent("dummy");
	let myElement = document.createElement("div")
	document.body.appendChild(myElement);
	myElement.style.width="100px";
	myElement.style.height="100px";
	myElement.style.backgroundColor = "#FF33F6";
	console.log(event.clientX);
}

class MyComponent {
	
	constructor(name) {
		console.log("my name is", name);
	}
	
}

*/