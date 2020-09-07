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
		aufbau: "06. - 08. November 2020",
		tiefer: "Anfangs 2021",
		schoepfer: "Anfangs 2021",
		kreis: "Anfangs 2021",
		erde: "12. - 13. September 2020",
		lebenspartner: "31. Okt - 01. Nov 2020",
		manifestieren: "12. - 13. Dezember 2020",
		weltenbeziehungen: "10. - 14. Oktober 2020",
		uebungsabend: "12. September 2020"
	}
}

