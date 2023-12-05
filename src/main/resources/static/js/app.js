var x = document.getElementById("description1");
var y = document.getElementById("description2");
var z = document.getElementById("description3");
var projectsArray = [x,y,z]

function expandInfo(elem) {
	if (elem.style.display === "none") {
		elem.style.display = "block"; 
	} else {
		elem.style.display = "none"; 
	}
	console.log("Test"); 
}

projectsArray.forEach(function (element) {
	expandInfo(element)
})

x.style.display = "none"; 
y.style.display = "none"; 
z.style.display = "none"; 

//modal
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
	modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
	if (event.target === modal) {
		toggleModal();
	}
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

//function to show dropdown conent. 
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Closes the drop down menu if clicked outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

//Photo carousel
var slide_index = 1;  
displaySlides(slide_index);  
function nextSlide(n) {  
	displaySlides(slide_index += n);  
}  
function currentSlide(n) {  
	displaySlides(slide_index = n);  
}  
function displaySlides(n) {  
	var i;  
	var slides = document.getElementsByClassName("showSlide");  
	if (n > slides.length) { slide_index = 1 }  
		if (n < 1) { slide_index = slides.length }  
			for (i = 0; i < slides.length; i++) {  
				slides[i].style.display = "none";  
			}  
			slides[slide_index - 1].style.display = "block";  
		}  