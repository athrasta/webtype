

function myFunction() {
	var element = document.body;
	element.classList.toggle("dark-mode");
  }


  const toggleTag = document.querySelector("a.toggle-nav");
  const mainTag = document.querySelector("main");
  
  toggleTag.addEventListener("click", function () {
	mainTag.classList.toggle("open")
	
  });


//   let trigger = document.getElementById("showhide");
  
//   trigger.onclick = function (event) {
// 	  console.log('trigger clicked!');
  
// 	  let detaildivs = document.querySelectorAll('.details');
	  
// 	  	detaildivs.forEach(function(element){
// 		element.classList.toggle('active');
// 	  });
//   };

// let items = document.querySelectorAll('.item');

// items.forEach(function(element){
// 	element.onclick = function(event){
// 		element.querySelector('.details').classList.toggle('active');
// 	};
// });

  
