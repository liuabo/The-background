$(function() {
	$(".list_01").click(function() {
		$(this).toggleClass("Pic_01");
		$(".secondary_01").toggle(function() {})
	})
	$(".list_02").click(function() {
		$(this).toggleClass("Pic_01");
		$(".secondary_02").toggle(function() {})
	})
	$(".list_03").click(function() {
		$(this).toggleClass("Pic_01");
		$(".secondary_03").toggle(function() {})
	})
	$(".list_04").click(function() {
		$(this).toggleClass("Pic_01");
		$(".secondary_04").toggle(function() {})
	})
	$(".list_05").click(function() {
		$(this).toggleClass("Pic_01");
		$(".secondary_05").toggle(function() {})
	})
	$(".list_06").click(function() {
		$(this).toggleClass("Pic_01");
		$(".secondary_06").toggle(function() {})
	})
	
	$(".secondary").find("li").hover(function() {
		$(this).css("background","#797979").siblings().css("background","#575757")
	})
//	$(".list_none").click(function() {
//		$(this).css("background","#797979");
//		$(".gl_none").css("display","none")
//		$(".list_block").css("display","block")
//	})
//	$(".list_block").on("click","li",function() {
//		$(this).css("background","#797979");
//		$(".gl_none").css("display","none")
//		$(".list_block").css("display","block")
//	})
	$("#img_r").click(function() {
		$(this).hide();
		$("#img_l").show();
		$(".roll_l").addClass("abs");
		$(".tabbar").stop().hide().parent().css({"width":37,"background-image":"url(../index/show_icon.gif)"})
	})
	$("#img_l").click(function() {
		$(this).hide();
		$("#img_r").show()
		$(".tabbar").stop().show().parent().css({"width":180,"background-image":""})
	})
	$(".roll_l").click(function() {
		$("#img_l").hide()
		$("#img_r").show()
		$(".tabbar").stop().show().parent().css({"width":180,"background-image":""})
	})
})
