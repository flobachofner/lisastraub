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
		basisOnline: "22. - 24. April 2022",
		aufbau: "25. - 27. Februar 2022",
		tiefer: "26. - 27. März 2022",
		schoepfer: "25. - 26. Juni 2022",
		kreis: "Noch offen",
		erde: "10. - 11. September 2022",
		lebenspartner: "20. - 21. August 2022",
		manifestieren: "10. - 11. Dezember 2022",
		weltenbeziehungen: "Frühling 2022",
		intuitiveAnatomie: "9. - 24. Juli 2022",
		seelenpartner: "Noch offen",
		rhythm: "Noch offen",
		regenbogenkinder: "noch offen",
		krankheiten: "Noch offen",
		uebungsabend: "2. März 2022",
		uebungstag: "Noch offen",
		trommelabend: "Noch offen",
		fuelle: "Ab 17. Januar 2022",
	}
}

