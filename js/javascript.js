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
		basis: "16. - 18.06.2021 / 25. - 27.06.2021 online",
		aufbau: "10. - 12. September 2021",
		tiefer: "5. - 6. Juni 2021",
		schoepfer: "12. - 13. Juni 2021",
		kreis: "02. - 03. Oktober 2021",
		erde: "4. - 5. September 2021",
		lebenspartner: "29. - 30. Mai 2021",
		manifestieren: "11. - 12. Dezember 2021",
		weltenbeziehungen: "18. - 22. September 2021",
		intuitiveAnatomie: "Noch offen",
		seelenpartner: "10. - 11. Juli 2021",
		rhythm: "Herbst 2021",
		regenbogenkinder: "Sommer 2021",
		krankheiten: "Herbst 2022",
		uebungsabend: "2. Juni 2021",
		uebungstag: "20. Juni 2021",
		trommelabend: "26. Mai 2021"
	}
}

