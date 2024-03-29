const age = document.getElementById("age");

function diff_years(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff/365.25));
 
 }

dt1 = new Date(2002, 9, 27);
dt2 = new Date();
const age_calculation = diff_years(dt2, dt1);
age.innerText = age_calculation;

const sections = document.querySelectorAll('.animate');
observer = new IntersectionObserver((entries) => {

	entries.forEach((entry) => {
		
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
	var dataText = ["Software Engineer", "CEO at BSN Technologies", "Technology Consultant" ];
	
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
function right(title, content, date){
	return `<div class="timeline-item ">
	<div class="timeline-icon">
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			width="21px" height="20px" viewBox="0 0 21 20" enable-background="new 0 0 21 20" xml:space="preserve">
		<path fill="#FFFFFF" d="M19.998,6.766l-5.759-0.544c-0.362-0.032-0.676-0.264-0.822-0.61l-2.064-4.999
			c-0.329-0.825-1.5-0.825-1.83,0L7.476,5.611c-0.132,0.346-0.462,0.578-0.824,0.61L0.894,6.766C0.035,6.848-0.312,7.921,0.333,8.499
			l4.338,3.811c0.279,0.246,0.395,0.609,0.314,0.975l-1.304,5.345c-0.199,0.842,0.708,1.534,1.468,1.089l4.801-2.822
			c0.313-0.181,0.695-0.181,1.006,0l4.803,2.822c0.759,0.445,1.666-0.23,1.468-1.089l-1.288-5.345
			c-0.081-0.365,0.035-0.729,0.313-0.975l4.34-3.811C21.219,7.921,20.855,6.848,19.998,6.766z"/>
		</svg>
	</div>
	<div class="timeline-content">
		<h2>${title}</h2>
		<p>
			${content}
		</p>
		<p class="timeline-date"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			width="20" height="20"
			viewBox="0 0 172 172"
			style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#1abc9c"><path d="M150.5,50.16667v-5.375c0,-12.84267 -10.449,-23.29167 -23.29167,-23.29167h-82.41667c-12.84267,0 -23.29167,10.449 -23.29167,23.29167v5.375zM16.125,93.16667c-2.97058,0 -5.375,2.40442 -5.375,5.375c0,2.97058 2.40442,5.375 5.375,5.375h5.375v-10.75zM21.5,60.91667v32.25h49.73308l-8.73975,-8.73975c-2.09983,-2.09625 -2.09983,-5.504 0,-7.60025c2.09983,-2.09983 5.50042,-2.09983 7.60025,0l17.91667,17.91667c2.09983,2.09625 2.09983,5.504 0,7.60025l-17.91667,17.91667c-1.04992,1.04992 -2.42592,1.57308 -3.80192,1.57308c-1.376,0 -2.752,-0.52317 -3.80192,-1.57308c-2.09983,-2.09625 -2.09983,-5.504 0,-7.60025l8.74333,-8.74333h-49.73308v23.29167c0,12.84267 10.449,23.29167 23.29167,23.29167h82.41667c12.84267,0 23.29167,-10.449 23.29167,-23.29167v-66.29167z"></path></g></g></svg>
			${date}
		</p>
	</div>
</div>`
}

function left(title, content, date){
return  `<div class="timeline-item">
	<div class="timeline-icon">
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					width="21px" height="20px" viewBox="0 0 21 20" enable-background="new 0 0 21 20" xml:space="preserve">
			<g>
				<path fill="#FFFFFF" d="M17.92,3.065l-1.669-2.302c-0.336-0.464-0.87-0.75-1.479-0.755C14.732,0.008,7.653,0,7.653,0v5.6
					c0,0.096-0.047,0.185-0.127,0.237c-0.081,0.052-0.181,0.06-0.268,0.02l-1.413-0.64C5.773,5.183,5.69,5.183,5.617,5.215l-1.489,0.65
					c-0.087,0.038-0.19,0.029-0.271-0.023c-0.079-0.052-0.13-0.141-0.13-0.235V0H2.191C1.655,0,1.233,0.434,1.233,0.97
					c0,0,0.025,15.952,0.031,15.993c0.084,0.509,0.379,0.962,0.811,1.242l2.334,1.528C4.671,19.905,4.974,20,5.286,20h10.307
					c1.452,0,2.634-1.189,2.634-2.64V4.007C18.227,3.666,18.12,3.339,17.92,3.065z M16.42,17.36c0,0.464-0.361,0.833-0.827,0.833H5.341
					l-1.675-1.089h10.341c0.537,0,0.953-0.44,0.953-0.979V2.039l1.459,2.027V17.36L16.42,17.36z"/>
			</g>
		  </svg>
	</div>
	<div class="timeline-content right">
		<h2>${title}</h2>
		<p>
			${content}
		</p>
		<p class="timeline-date"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
			width="20" height="20"
			viewBox="0 0 172 172"
			style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#1abc9c"><path d="M150.5,50.16667v-5.375c0,-12.84267 -10.449,-23.29167 -23.29167,-23.29167h-82.41667c-12.84267,0 -23.29167,10.449 -23.29167,23.29167v5.375zM16.125,93.16667c-2.97058,0 -5.375,2.40442 -5.375,5.375c0,2.97058 2.40442,5.375 5.375,5.375h5.375v-10.75zM21.5,60.91667v32.25h49.73308l-8.73975,-8.73975c-2.09983,-2.09625 -2.09983,-5.504 0,-7.60025c2.09983,-2.09983 5.50042,-2.09983 7.60025,0l17.91667,17.91667c2.09983,2.09625 2.09983,5.504 0,7.60025l-17.91667,17.91667c-1.04992,1.04992 -2.42592,1.57308 -3.80192,1.57308c-1.376,0 -2.752,-0.52317 -3.80192,-1.57308c-2.09983,-2.09625 -2.09983,-5.504 0,-7.60025l8.74333,-8.74333h-49.73308v23.29167c0,12.84267 10.449,23.29167 23.29167,23.29167h82.41667c12.84267,0 23.29167,-10.449 23.29167,-23.29167v-66.29167z"></path></g></g></svg>
			${date}
		</p>
	</div>
	</div>
	`
}
function project(title, description, img, link){
	return `
	<div class="proj-img">
		<img src=${img} alt="work-one" class="project-img">
		<div class="proj-more">
			<a href=${link||"project.html"} class="show-button">Show More</a>
		</div>
	</div>
	<div class="pro-disc">
		<div class="proj-text">
			<p class="project-disc">${description}</p>
			<h4 class="project-title">${title}</h4>
		</div>
		<div class="proj-link">
			<img src="https://img.icons8.com/plumpy/24/000000/long-arrow-right.png"/>
		</div>
	</div>
`
}	
var projects = [{title: "Medical Imaging Classification",link:"https://colab.research.google.com/drive/1XPFyLANMHCv75p_iK2nk2zbhqPU7p2bZ?usp=sharing", description: "Medical Imaging Classification with Deep Learning", img:"https://www.juanpablomontoyae.com/images/8.jpg"},
{title: "Medical Imaging Segmentation", link: "https://colab.research.google.com/drive/1IQX-ClU3dcI-RDZPcAfysYTfvHM2jnem?usp=sharing",description: "Medical Imaging Segmentation in CT Scans using Deep Learning", img:"./images/10.jpg"},
{title: "BSN Medical Vision Platform",link:"https://www.bsnmedicalvision.com/Patients2/1a3606f4-a7a4-4e52-b14e-423d6fea3512/admin", description: "Web Platform that improves medical imaging diagnosis", img:"./images/11.jpeg"},
{title: "Crowd Analysis", link:"https://github.com/JuanPabloMontoya271/Strategix4RealTimeDataClient", description: "Implementation of Deep Learning Models to provide solutions based on crowd analysis in realtime video feed", img:"./images/12.jpeg"},
{title: "Multipurpose OCR",link: "https://colab.research.google.com/drive/11xZf5dgCmIc8L0uyB3CAGQb4THCpVBlm?usp=sharing", description: "Multipurpose OCR implementation and Edge detection using google cloud api", img:"./images/15.jpeg"},
{title: "Web Based Dicom Viewer with automatic annotation tools", link:"https://github.com/JuanPabloMontoya271/ProaqctDicomExample", description: "javascript website", img:"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"},
// {title: "Titulo del Proyecto", description: "Descripción", img:"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80"},
]
projects.map((val, key)=>{
	var child = document.createElement("div")
	child.className="work-example"
		
		child.innerHTML = project(val.title, val.description, val.img, val.link)
				
	
	document.getElementById("Projects").append(child)

})
var experiences =
[{title: "Freelance Data Analyst at Flor Ayala #1", content:"Freelance with Flor Ayala; a local Congresswoman at Hermosillo, Sonora. Implemented statistical models to manage campaign resources based on electoral trends. Used Machine Learning in historical electoral data for trend analysis. Used Scikit learn, pandas, matplotlib and seaborn.", date:"From August 2017 to June 2018"},{title: "Concluded High School at  Tecnológico De Monterrey CSN #2", content:"Highschool studies took place at Tecnologico de Monterrey. Different skills such as german speaking, leadership and Java usage were developed. Studies were concluded with a GPA of 9.51 and a highest of 9.82.", date:"From August 2017 to June 2020"}, {title: "First place at the local science fair in the area of ​​biology #3", content:"In secondary studies at TAES.", date:"November 2017"}, {title: "Expociencias nacional  #4", content:"Participation in “Expociencias Nacional” held in Baja California Sur, La Paz. “Smart Box” as the project presented.", date:"December 2017"}, {title: "Participant in National Science Fair FENACI #5", content:"The 2018 Sonora State Science and Engineering Fair brought science and technology into direct contact with youths. Through practices, activities coordinated and developed by scientists and academics nationwide. Summoned by COECYT and CONACYT.", date:"November 2018"}, {title: "ACFIS certification #6", content:"Certificated for completing the summer physics course at “Asociación de Ciencias y Física Interdisciplinaria de Sonora” (ACFIS).", date:"July 2018"}, {title: "STEM #7", content:"President of the STEM student group at Tec de Monterrey. One of the most notorious results is the first place at the National Science Fair.", date:"September 2018"}, {title: "Local Science Fair#9", content:"First place at the local Science Fair in the area of ​​Chemistry", date:"November 2018"}, {title: "Conference at Startup Weekend #10", content:"Startup Weekend by TechStars is a three-day program where aspiring entrepreneurs can experience startup life.", date:"October 2019"}, {title: "INC CROWDED #11", content:"This is a festival of high-impact Mexican startups, promoted by the Eugenio Garza Lagüera Western Region Entrepreneurship Institute and its different allies.", date:"February 2019"}, {title: "Pitch en Launch Day. #12", content: "Smart Medical Application of Image Recognition and Artificial Intelligence (SMAIR VISION), a virtual medical assistant through a network where doctors from all over the world can see the results of the application and can offer online diagnoses, was resented at product launch event incubated in the Tec Lean Launch program. Certified for completing the Tec Lean Launch program", date: "March 2019"}, {title: "Participant in Collision Alpha: #13", content:"Startup presentation at America's fastest-growing tech conference called Collision Conference held inToronto, Canada.", date:"May 2019"}, {title: "Founder and CEO at BSN Technologies #14", content:"CEO and founder at BSN Medical Vision. With artificial intelligence, BSN Medical Vision assists doctors who treat patients with early-stage cancer. Through a platform the specialist has a digital file, a network of medical contacts, and tools for anatomical segmentation for recognition of patterns in the images. Allowing doctors to establish a diagnosis faster and of better quality.", date:"From October 2019 to present"}, {title: "Waste not  #15", content:"Speaker at the event, Waste not, which was held in Nogales Sonora. The event celebrates innovation and storytelling around the produce industry, sustainability, and waste management in borderlands.", date:"November 2019"}, {title: "Inspire Award (1st place) Regional First Tech Challenge #16", content:"The Inspire Award winner is given, in the opinion of the judges, to a strong contender in many award categories and is a symbol of inspiration to other Teams, acting with gracious professionalism both on and off the playing field.", date:"December 2019"}, {title: "Think Award (3rd Place) at National First Tech Challenge #17", content:"The award focus is removing engineering obstacles through creative thinking and is given to the team that best reflects the journey taken as they experienced the engineering design process during the build season. ", date:"January 2020"}, {title: "FIRST TEC 2020 #19", content:"A robotics competition for high school students organized by FIRST Robotics.", date:"February 2020"}, {title: "Winner of the Entrepreneurship Scholarship Award 2020 at Tecnológico de Monterrey #20", content:"Given to the best 30 out of 1200 tech startups founded by students before College education. Received tools for the validation of potential clients, accompanied and monitored by mentor network from Instituto de Emprendimiento Eugenio Garza Lagüera (IEEGL). Received the award for the “BSN Technologies” startup, which develops AI to improve medical diagnosis.", date:"January 2020"}, {title: "Selected to take social entrepreneurship training with the ASHOKA LATAM and ORACLE group #21", content:"It is a strategic program that provides social entrepreneurs with specific support for their development and training, achieving a systemic impact.", date:"June 2020"}, {title: "Internship at Strategix4 #22", content:"Participated in a software engineering Internship with Strategix4 held at Hermosillo, Sonora. Developing and Implementing a scalable Computer Vision algorithms for multi camera crowd analysis, including face recognition, body part detection, and custom object tracking. Applied OCR and Super resolution algorithms for text extraction.", date:"From June 2020 to present"}, {title: "B.S Software Engineering, Tecnológico De Monterrey, Hermosillo #23", content:"el contenido", date:"From August 2020 to June 2024"}, {title: "Second Place at National Entrepreneurship Competition Inc Prototype #24", content:"The contest evaluation base was TRL, a scale defined by NASA that measures the level of maturity of the technology and allows a classification based on the progress of a project. The objective was to present a desirable and feasible prototype that provides a solution to social, economic and environmental needs. The award was for second place in the TRL 6 to 8 category.", date:"November 2020"}, {title: "Selected as a finalist for Innova Sonora 2020 #25", content:"Innova Sonora´s objective is the promotion of the most innovative ideas and projects of high impact entrepreneurial spirit, to generate employment and to create wealth as well as counteract the effects of COVID-19 in the State of Sonora", date:"November 2020"}, {title: "Incoming intern at cisco systems #26", content:"Incoming internship with Cisco Systems at Silicon Valley, San Francisco.", date:"From May 17 to August 6, 2021."}]
experiences = experiences.reverse() 
// [{title:"Software Engineering Intern at Cisco Systems", content: "Software Engineering Intern at Cisco Systems in collaboration with the development team at Mindmeld AI", date: "Summer 2021"},{title:"ML/AI Consultant at Proaqct", content: "Machine Learning and AI implementation for a medical startup which develops software to help hospital to monitor the radiation dose in patients recieving medical imaging studies.", date: "April 2021 - to the date"},
//  {title: "Research and Development Intern at Strategix4", 
//  	content: "Developed and Implemented scalable Computer Vision algorithms for multi camera crowd analysis, including face recognition, body part detection, and custom object tracking. Applied OCR and Super resolution algorithms for text extraction. I used: Python with Tensorflow, open CV, pytesseract, and Keras",
// 	  date: "June 2020 - May 2021"},
// 	    {title: "Data analysis Consultancy for Flor Ayala (local Congresswoman)",
// 		 content:"Used Machine Learning in historical electoral data for trend analysis. Used Scikit learn, pandas, matplotlib and seaborn.",
// 		  date: "August 2017 - June 2018 and March 2021 - May 2021" },
// 		{title: "Founder and CEO  at BSN Technologies",
// 			content: `Founded an AI startup that developed a Healthcare Platform that provides
// 			physicians AI based tools for medical imaging analysis. Used ReactJS and AWS Cloud Services for the platform, Pytorch, and Tensorflow.
// 			`, 
// 			date: "October 2019 to present"},
// 			{title: "Winner of the Entrepreneurship Scholarship Award 2020 at Tecnológico de Monterrey", content: `Given to the best 30 out  of 1200 tech startups founded by students before College. Received the award for my startup BSN Technologies, which develops 
// 			AI to improve medical diagnosis.
// 			`, date: ""}
// 			,{title: `Second Place at National Entrepreneurship Competition Inc Prototype (2020)
// 			`, content: "Awarded Second place at a national competition with project BSN Medical Vision", date: "November 2020"}
// 			,{title:"Think Award (3rd Place) at National First Tech Challenge (2020)", content: "", date: "January 2020"}
// 			,{title:`Inspire Award (1st place) Regional First Tech Challenge (2019)`, content: "", date: "November 2019"}
// 			,{title: `Participant in Collision Alpha:`,content:"I presented my startup at a massive Tech conference called Collision Conference in Toronto, Canada." ,date:"May 2019"}
// 			,{title: `Participant in National Science Fair (2018):
// 			Presented a smart home appliance project in La Paz, Baja California Sur.
// 			`, content: "",date: "December 2017"}

// 		]
experiences.map((val, key)=>{
	var child = document.createElement("div")
	
	if ((key%2)){
		
		child.innerHTML = left(val.title, val.content, val.date)
				
	}
	else{
		
		child.innerHTML = right(val.title, val.content, val.date)
	}
	document.getElementById("timeline").append(child)
})
