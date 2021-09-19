// Start js

$(document).ready(function () {
	// body...
});

$(".slider-dot").click(function(){
	$(".slider-dot").removeClass("active-s");
	$(this).addClass("active-s");
	$("#home-sec [data-id='home-sec']").addClass("hide");
	$("#"+$(this).attr("data-id")+"").removeClass("hide");
});