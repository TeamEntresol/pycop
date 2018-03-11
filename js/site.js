$(document).ready(function(){
	$("#vimeoSlide").hide();

	$("#thumb1").click(function(){
		$("#slider1").animate({
			left:-1500
		});
		$("#vimeoSlide").show();
		$("#vimeoSlide").animate({
			left:0
		});
		$("#vid2").text("Genre 1");
	});

	$("#thumb2").click(function(){
		$("#slider1").animate({
			left:-1500
		});
		$("#vimeoSlide").show();
		$("#vimeoSlide").animate({
			left:0
		});
		$("#vid2").text("Genre 2");
	});

	$("#thumb3").click(function(){
		$("#slider1").animate({
			left:-1500
		});
		$("#vimeoSlide").show();
		$("#vimeoSlide").animate({
			left:0
		});
		$("#vid2").text("Genre 3");
	});

	$("#thumb4").click(function(){
		$("#slider1").animate({
			left:-1500
		});
		$("#vimeoSlide").show();
		$("#vimeoSlide").animate({
			left:0
		});
		$("#vid2").text("Genre 4");
	});

	$("#thumb5").click(function(){
		$("#slider1").animate({
			left:-1500
		});
		$("#vimeoSlide").show();
		$("#vimeoSlide").animate({
			left:0
		});
		$("#vid2").text("Genre 5");
	});

	$("#thumb6").click(function(){
		$("#slider1").animate({
			left:-1500
		});
		$("#vimeoSlide").show();
		$("#vimeoSlide").animate({
			left:0
		});
		$("#vid2").text("Genre 6");
	});

	$("#thumb7").click(function(){
		$("#slider1").animate({
			left:-1500
		});
		$("#vimeoSlide").show();
		$("#vimeoSlide").animate({
			left:0
		});
		$("#vid2").text("Genre 7");
	});

	$("#thumb8").click(function(){
		$("#slider1").animate({
			left:-1500
		});
		$("#vimeoSlide").show();
		$("#vimeoSlide").animate({
			left:0
		});
		$("#vid2").text("Genre 8");
	});

	$("#backBtn").click(function(){
		$("#slider1").animate({
			left:0
		});
		$("#vimeoSlide").animate({
			left:1110
		});
		$("#vimeoSlide").hide();
		$("#vid2").text("Music Videos");
	});
});