$(function() {
//	$(".special_01").click(function(){
//		$("#category_add").animate({"opacity":1},function() {
//			$(".special_03").click(function(){
//				$("#goods_name_02").val( $("#added").val() )
//				$("#category_add").animate({"opacity":0})
//				$("#added").val("")
//			})
//		})
//	})
	$(".special_02").click(function() {
		$("#category_add").css("opacity",0)
		$("#added").val("")
	})
		$(".special_01").click(function() {
		$("#category_add").animate({"opacity":1},function() {
			$(".special_03").click(function() {
			  $("#goods_name_02").append('<option selected = "selected" value="31">' + $("#added").val() + '</option>')	
			  $("#added").val("")
			  $("#category_add").css("opacity",0)
			})
		})
	})
	
	$(".special_04").click(function() {
		$("#brand_add").animate({"opacity":1},function() {
			$(".special_05").click(function() {
			  $("#brand_id").append('<option selected = "selected" value="31">' + $("#addedBrandName").val() + '</option>')	
			  $("#addedBrandName").val("")
			  $("#brand_add").css("opacity",0)
			})
		})
	})
	$(".special_06").click(function() {
		$("#brand_add").animate({"opacity":0})
		$("#addedBrandName").val("")
	})
	$(".so").click(function() {
		var arr = $("#so").val()
		$("#so").val( parseInt(arr) )
	})
})
