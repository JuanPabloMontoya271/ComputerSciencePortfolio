const sections = document.querySelectorAll('.animate');
observer = new IntersectionObserver((entries) => {

	entries.forEach((entry) => {
		console.log(entry);
		if(entry.intersectionRatio > 0) {
			entry.target.style.animation = `anim1 2s forwards ease-out`;
		}
		else{
			entry.target.style.animation = 'none';
		}
	});
});
sections.forEach((section) => {

	observer.observe(section);
})

document.addEventListener('DOMContentLoaded',function(event){
	// array with texts to type in typewriter
	var dataText = ["Software Engineering Student", "CEO at BSN Technologies", "Technology Consultant" ];
	
	// type one text in the typwriter
	// keeps calling itself until the text is finished
	function typeWriter(text, i, fnCallback) {
	  // chekc if text isn't finished yet
	  if (i < (text.length)) {
		// add next character to h1
	   document.getElementById("typing").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
		// wait for a while and call this function again for next character
		setTimeout(function() {
		  typeWriter(text, i + 1, fnCallback)
		}, 100);
	  }
	  // text finished, call callback if there is a callback function
	  else if (typeof fnCallback == 'function') {
		// call callback after timeout
		setTimeout(fnCallback, 1200);
	  }
	}
	// start a typewriter animation for a text in the dataText array
	 function StartTextAnimation(i) {
	   if (typeof dataText[i] == 'undefined'){
		  setTimeout(function() {
			StartTextAnimation(0);
		  }, 1000);
	   }
	   // check if dataText[i] exists
	  if (i < dataText[i].length) {
		// text exists! start typewriter animation
	   typeWriter(dataText[i], 0, function(){
		 // after callback (and whole text has been animated), start next text
		 StartTextAnimation(i + 1);
	   });
	  }
	}
	// start the text animation
	StartTextAnimation(0);
  });
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("my-photo-slider");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}