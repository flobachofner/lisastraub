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
		basis: "Noch offen",
		basisOnline: "Noch offen",
		aufbau: "10. - 12. September 2021",
		tiefer: "30. - 31. Oktober 2021",
		schoepfer: "Winter 2021",
		kreis: "9. - 10. Oktober 2021",
		erde: "4. - 5. September 2021",
		lebenspartner: "Frühling 2022",
		manifestieren: "11. - 12. Dezember 2021",
		weltenbeziehungen: "Frühling 2022",
		intuitiveAnatomie: "Noch offen",
		seelenpartner: "Frühling 2022",
		rhythm: "Herbst 2021",
		regenbogenkinder: "Frühling 2022",
		krankheiten: "Herbst 2022",
		uebungsabend: "6. Oktober 2021",
		uebungstag: "Noch offen",
		trommelabend: "Noch offen"
	}
}

