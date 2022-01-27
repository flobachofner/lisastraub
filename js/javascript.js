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
		aufbauOnline: "27. - 29. Mai 2022",
		tiefer: "26. - 27. März 2022",
		schoepfer: "25. - 26. Juni 2022",
		kreis: "Frühling 2023",
		erde: "10. - 11. September 2022",
		lebenspartner: "20. - 21. August 2022",
		manifestieren: "10. - 11. Dezember 2022",
		weltenbeziehungen: "2023",
		intuitiveAnatomie: "9. - 24. Juli 2022",
		seelenpartner: "Herbst 2022",
		rhythm: "2023",
		regenbogenkinder: "Frühling 2023",
		krankheiten: "2023",
		uebungsabend: "2. März 2022",
		uebungstag: "2. April 2022",
		trommelabend: "Noch offen",
		fuelle: "Ab 17. Januar 2022",
	}
}

