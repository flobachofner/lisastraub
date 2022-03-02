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
		basis: "Herbst 2022",
		basisSchluss: "",
		basisOnline: "22. - 24. April 2022",
		basisOnlineSchluss: "15. April 2022",
		
		aufbau: "Frühling 2023",
		aufbauSchluss: "",
		aufbauOnline: "27. - 29. Mai 2022",
		aufbauOnlineSchluss: "20. Mai 2022",
		
		dna3: "",
		dna3Schluss: "",
		
		tiefer: "26. - 27. März 2022",
		tieferSchluss: "19. März 2022",
		schoepfer: "25. - 26. Juni 2022",
		schoepferSchluss: "18. Juni 2022",
		kreis: "Frühling 2023",
		kreisSchlus: "",
		erde: "10. - 11. September 2022",
		erdeSchluss: "3. September 2022",
		lebenspartner: "20. - 21. August 2022",
		lebenspartnerSchluss: "13. August 2022",
		manifestieren: "10. - 11. Dezember 2022",
		manifestierenSchluss: "3. Dezember 2022",
		weltenbeziehungen: "2023",
		weltenbeziehungenSchluss: "",
		intuitiveAnatomie: "9. - 24. Juli 2022",
		intuitiveAnatomieSchluss: "1. Juli 2022",
		seelenpartner: "Herbst 2022",
		seelenpartnerSchluss: "",
		rhythm: "2023",
		rhythmSchluss: "",
		regenbogen: "Frühling 2023",
		regenbogenSchluss: "",
		krankheiten: "2023",
		krankheitenSchluss: "",
		
		uebungsabend: "2. März 2022",
		uebungstag: "2. April 2022",
		trommelabend: "Noch offen",
		
		fuelle: "Ab 17. Januar 2022",
		segel: "Ab 26. April 2022",
		segelSchluss: "19. April 2022"
	}
}

