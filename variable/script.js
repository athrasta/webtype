console.log('script loaded');

$(document).ready(function(){

	console.log('script loaded');

	const wghtmax = 100;
	const wdthmax = 150;


$('#default').click(function(event) {
    console.log('default clicked');
    $("#content").css({
        "--wdth": 100,
        "--wght": 100,
        "--XHGT": 500
    });	
});

});


// function randomizeText() {
//     randomWeight = Math.random() * (200 - 35) + 35;
//     randomWidth = Math.random() * (200 - 100) + 100;
//     myText.style.fontVariationSettings = "\"wght\" " + randomWeight + ", \"wdth\" " + randomWidth;
//   }
  
//   setInterval(randomizeText, 1000);
  

function updateText(e) {
    multiplierWidth = e.offsetX / window.innerWidth;
    multiplierHeight = e.offsetY / window.innerHeight;
    randomWeight =  multiplierWidth * (200 - 35) + 35;
    randomWidth =  multiplierHeight * (200 - 100) + 100;
    myText.style.fontVariationSettings = "\"wght\" " + randomWeight + ", \"wdth\" " + randomWidth;
  }
  
  window.addEventListener("mousemove", updateText)
  


 
// 	$('#intro').mousemove(function(event) {

// 		console.log(event.pageX, event.pageY);

// 		let cursorX = event.pageX / $(this).width();
// 		let cursorY = 1 - (event.pageY) / $(this).height();

// 		let settingX = Math.floor(cursorX * wdthmax);
// 		let settingY = Math.floor(cursorY * wghtmax);

// 		// console.log( settingX, settingY)

// 		$("#bigletter").css({
// 			"--wdth": settingX,
// 			"--wght": settingY
// 		});
		 
// 	});



// // Function to generate random number 
// function randomNumber(min, max) { 
//     return Math.floor(Math.random() * (max - min) + min);
// }

