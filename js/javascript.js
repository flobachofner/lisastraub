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
		basisOnline: "22. - 25. Februar 2024",
		
		aufbau: "Frühling 2023",
		aufbauOnline: "Frühling 2024",
		
		dna3: "Auf Anfrage",
		
		tiefer: "Frühling 2024",
		schoepfer: "Termin offen",
		kreis: "Termin offen",
		erde: "Termin offen",
		lebenspartner: "Termin offen",
		manifestieren: "Termin offen",
		weltenbeziehungen: "Termin offen",
		intuitiveAnatomie: "Termin offen",
		seelenpartner: "Termin offen",
		rhythm: "Termin offen",
		regenbogen: "Termin offen",
		krankheiten: "",
		
		uebungsabend: "13. Dezember 2023",
		uebungstag: "3. Juni 2023",
		trommelabend: "Noch offen",

		lichtklangkreis: "10. Februar 2024",
		
		special: "Nov - Dez 2023",
	}
}

