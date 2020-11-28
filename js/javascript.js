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
		basis: "8. - 10. Januar 2021",
		aufbau: "19. - 21. Februar 2021",
		tiefer: "2. - 3. Januar 2021",
		schoepfer: "5. - 6. Dezember 2020",
		kreis: "13. - 14. Februar 2021",
		erde: "4. - 5. September 2021",
		lebenspartner: "1. - 2. Mai 2021",
		manifestieren: "12. - 13. Dezember 2020",
		weltenbeziehungen: "30. Okt. - 3. Nov.",
		intuitiveAnatomie: "13. - 29. Mai 2021",
		seelenpartner: "10. - 11. Juli 2021",
		rhythm: "Herbst 2021",
		regenbogenkinder: "2. - 5. April 2021",
		krankheiten: "Herbst 2021",
		uebungsabend: "2. Dezember 2020"
	}
}

