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
		basis: "21. - 23. Januar 2022",
		basisOnline: "2022",
		aufbau: "25. - 27. Februar 2022",
		tiefer: "26. - 27. März 2022",
		schoepfer: "2022",
		kreis: "Sommer 2022",
		erde: "Herbst 2022",
		lebenspartner: "Frühling 2022",
		manifestieren: "11. - 12. Dezember 2021",
		weltenbeziehungen: "Frühling 2022",
		intuitiveAnatomie: "2022",
		seelenpartner: "2022",
		rhythm: "2022",
		regenbogenkinder: "Frühling 2022",
		krankheiten: "Herbst 2022",
		uebungsabend: "3. November 2021",
		uebungstag: "Noch offen",
		trommelabend: "Noch offen",
		fuelle: "2022",
	}
}

