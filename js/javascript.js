// JavaScript Document
$(window).scroll(function() {
	var scrollTop = window.pageYOffset;
	$(".backgroundfront").offset({top:scrollTop * 0.72 ,left:0})
});

$(window).scroll(function() {
	var scrollTop = window.pageYOffset;
	$(".siteTop").offset({top:scrollTop * 0.72 ,left:0})
});

$('iframe').load( function() {
    $('iframe').contents().find("head")
      .append($("<style type='text/css'>  .my-class{background-color:red;}  </style>"));
});

$(document).ready(function(){
     $('#nav-mhweb-hamburger').click(function(){
     $(this).toggleClass('open');
   });
});

// Variablen Seminardaten
function seminarDaten()
{
    return daten = {
		basis: "14. - 16. Oktober 2022",
		basisOnline: "26. - 28. August 2022",
		
		aufbau: "Frühling 2023",
		aufbauOnline: "23. - 25. September 2022",
		
		dna3: "Frühling 2023",
		
		tiefer: "1. - 2. Oktober 2022 | Ausgebucht",
		schoepfer: "29. - 30. Oktober 2022",
		kreis: "Frühling 2023",
		erde: "10. - 11. September 2022",
		lebenspartner: "20. - 21. August 2022",
		manifestieren: "10. - 11. Dezember 2022",
		weltenbeziehungen: "Herbst 2023",
		intuitiveAnatomie: "09. - 24. Juli 2022",
		seelenpartner: "Herbst 2022",
		rhythm: "Frühling 2023",
		regenbogen: "Frühling 2023",
		krankheiten: "Sommer 2023",
		
		uebungsabend: "2. August 2022",
		uebungstag: "2023",
		trommelabend: "Noch offen",
		
		special: "Juli bis Sept 2022",
	}
}

