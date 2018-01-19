$(function() {
	function getRand(min, max) {
				return Math.round(Math.random() * (max - min) + min);
			}
	function yzm() {
		var arr = []; //存放验证码
		for(var i = 0; i < 4; i++) {
			var code = getRand(0, 9);
			arr.push(code);
		}
		return arr.join("");
	}
	$("#yzm").html(yzm());
	
	$("#rtegist").css("border","none")
})