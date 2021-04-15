
console.log('hello world');


let trigger = document.getElementById("showhide");

trigger.onclick = function (event) {

	console.log('trigger clicked!');

	let detaildivs = document.querySelectorAll('.details');
	
	detaildivs.forEach(function(element){
		element.classList.toggle('active');
	});
};


let items = document.querySelectorAll('.item');

items.forEach(function(element){
	element.onclick = function(event){
		element.querySelector('.details').classList.toggle('active');
	};
});

$(function(){

    $("#s1").draggable();
    $("#s2").draggable();
    $("#s3").draggable();
    $("#s4").draggable();
    $("#s5").draggable();
    $("#s6").draggable();
}
)