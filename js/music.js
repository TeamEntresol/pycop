

$(function(){
	$("#preload").hide();
	$("#backButton").hide();

	$("#instrumentalsid").click(function(){
		$("#mainpage").slideUp(2000);
		$("#preload").slideDown(2000);
		$("#title").text('Instrumentals');
		$("#backButton").show();
	});

	$("#rapId").click(function(){
		$("#mainpage").slideUp(2000);
		$("#preload").slideDown(2000);
		$("#title").text('Rap');
		$("#backButton").show();
	});
	$("#praiseId").click(function(){
		$("#mainpage").slideUp(2000);
		$("#preload").slideDown(2000);
		$("#title").text('Praise');
		$("#backButton").show();
	});
	$("#worshipId").click(function(){
		$("#mainpage").slideUp(2000);
		$("#preload").slideDown(2000);
		$("#title").text('Worship');
		$("#backButton").show();
	});
	$("#sermonId").click(function(){
		$("#mainpage").slideUp(2000);
		$("#preload").slideDown(2000);
		$("#title").text('Sermon');
		$("#backButton").show();
	});
	$("#talkId").click(function(){
		$("#mainpage").slideUp(2000);
		$("#preload").slideDown(2000);
		$("#title").text('Talk');
		$("#backButton").show();
	});
	$("#soulId").click(function(){
		$("#mainpage").slideUp(2000);
		$("#preload").slideDown(2000);
		$("#title").text('Soul');
		$("#backButton").show();
	});
	$("#rockId").click(function(){
		$("#mainpage").slideUp(2000);
		$("#preload").slideDown(2000);
		$("#title").text('Rock');
		$("#backButton").show();
	});


	$("#backButton").click(function(){
		$("#mainpage").slideDown(3000);
		$("#preload").slideUp(3000);
		$("#title").text('Genres');
		$("#backButton").hide();
	});
});
