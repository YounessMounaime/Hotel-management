
window.onload = function () {
	var sources = ["U1.jpg", "U2.jpg", "U3.jpg","U4.jpg"];
	var indice = 0;
	function next() {
	    if(indice>=sources.length){indice=0;}
			document.querySelector(".d-block").src="{% static '/img/' %}"+sources[indice];
			++indice;
	}
			
	function previous() {
		if(indice<0){indice=sources.length-1;}
			document.querySelector(".d-block").src="{% static '/img/' %}"+sources[indice];
			--indice;
	}

	let  flecheprev=document.querySelectorAll(".carousel-control-prev");
	let  flechenext=document.querySelectorAll(".carousel-control-next");
	flecheprev[0].onclick=previous;
	flechenext[0].onclick=next;

    setInterval(next,2000);
};