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
		basis: "29. - 31. Januar 2021",
		aufbau: "19. - 21. Februar 2021",
		tiefer: "2. - 3. Januar 2021",
		schoepfer: "12. - 13. Juni 2021",
		kreis: "13. - 14. Februar 2021",
		erde: "4. - 5. September 2021",
		lebenspartner: "1. - 2. Mai 2021",
		manifestieren: "11. - 12. Dezember 2021",
		weltenbeziehungen: "30. Okt. - 3. Nov.",
		intuitiveAnatomie: "13. - 29. Mai 2021",
		seelenpartner: "10. - 11. Juli 2021",
		rhythm: "Herbst 2021",
		regenbogenkinder: "2. - 5. April 2021",
		krankheiten: "Herbst 2021",
		tierseminar: "to be defined",
		uebungsabend: "21. Januar 2021"
	}
}

