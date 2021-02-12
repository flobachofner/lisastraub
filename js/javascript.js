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
		basis: "16. - 18. Juli 2021",
		aufbau: "19. - 21. Februar 2021",
		tiefer: "17. - 18. April 2021",
		schoepfer: "12. - 13. Juni 2021",
		kreis: "6. - 7. März 2021",
		erde: "4. - 5. September 2021",
		lebenspartner: "1. - 2. Mai 2021",
		manifestieren: "11. - 12. Dezember 2021",
		weltenbeziehungen: "18. - 22. September 2021",
		intuitiveAnatomie: "13. - 29. Mai 2021",
		seelenpartner: "10. - 11. Juli 2021",
		rhythm: "Herbst 2021",
		regenbogenkinder: "2. - 5. April 2021",
		krankheiten: "Herbst 2021",
		tierseminar: "20. März 2021",
		uebungsabend: "24. Februar 2021",
		uebungstag: "14. März 2021"
	}
}

