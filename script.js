$("#V").mouseenter(function() {
	$("#V").attr("src", "self.png");
});

$("#V").mouseleave(function() {
	$("#V").attr("src", "V.png");
});

$(".nav").click(function() {
	var string = $(this).attr("id");
	string = string + ".html";
	$("div").animate({right:'100%'}, {complete: function(){window.location.href=string;}});
});

$(".foot").click(function() {
	var string = $(this).attr("id");
	string = string + ".html";
	$("table").animate({right:'100%'}, {complete: function(){window.location.href=string;}});
});