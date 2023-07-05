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
		basis: "2023",
		basisOnline: "29.06. - 02.07.2023",
		
		aufbau: "Frühling 2023",
		aufbauOnline: "10. - 13. August 2023",
		
		dna3: "Auf Anfrage",
		
		tiefer: "Herbst 2023",
		schoepfer: "10. - 11. Juni 2023",
		kreis: "Frühling 2023",
		erde: "Frühling 2024",
		lebenspartner: "8. - 9. Juli 2023",
		manifestieren: "Dezember 2023",
		weltenbeziehungen: "2023",
		intuitiveAnatomie: "2023",
		seelenpartner: "2023",
		rhythm: "2023",
		regenbogen: "2023",
		krankheiten: "",
		
		uebungsabend: "13. September 2023",
		uebungstag: "3. Juni 2023",
		trommelabend: "Noch offen",
		
		special: "Juni bis Aug 2023",
	}
}

