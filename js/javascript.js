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
		basisOnline: "Sommer 2023",
		
		aufbau: "Frühling 2023",
		aufbauOnline: "23. - 26. Februar 2023",
		
		dna3: "Frühling 2023",
		
		tiefer: "22. - 23. April 2023",
		schoepfer: "9. - 10. Juni 2023",
		kreis: "Frühling 2023",
		erde: "2. - 3. September 2023",
		lebenspartner: "Sommer 2023",
		manifestieren: "Dezember 2023",
		weltenbeziehungen: "2023",
		intuitiveAnatomie: "2023",
		seelenpartner: "2023",
		rhythm: "2023",
		regenbogen: "2023",
		krankheiten: "",
		
		uebungsabend: "3. März 2023",
		uebungstag: "3. Juni 2023",
		trommelabend: "Noch offen",
		
		special: "Juli bis Sept 2022",
	}
}

