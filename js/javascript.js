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
		basis: "Anfangs 2021",
		aufbau: "20. - 22 . November 2020",
		tiefer: "Anfangs 2021",
		schoepfer: "5. - 6. Dezember 2020",
		kreis: "Anfangs 2021",
		erde: "Herbst 2021 ",
		lebenspartner: "31. Okt - 01. Nov 2020",
		manifestieren: "12. - 13. Dezember 2020",
		weltenbeziehungen: "2021",
		intuitiveAnatomie: "13. - 29. Mai 2021",
		seelenpartner: "tbd",
		rhythm: "tbd",
		regenbogenkinder: "2. - 5. April 2021",
		krankheiten: "tbd",
		uebungsabend: "2. Dezember 2020"
	}
}

