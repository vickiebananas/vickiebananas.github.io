$("#V").mouseenter(function() {
	$("#V").attr("src", "Images/self.jpg");
});

$("#V").mouseleave(function() {
	$("#V").attr("src", "Images/V.jpg");
});

$(".nav").click(function() {
	var string = $(this).attr("id");
	string = string + ".html";
	$("div").animate({right:'100%'}, {complete: function(){window.location.href=string;}});
});

$(".foot").click(function() {
	var string = $(this).attr("id");
	string = string + ".html";
	$("span").animate({right:'100%'}, {complete: function(){window.location.href=string;}});
});