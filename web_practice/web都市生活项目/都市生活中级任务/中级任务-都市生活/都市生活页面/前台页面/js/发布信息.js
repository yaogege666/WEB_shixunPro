$(function(){
	  $(".fabu").click(function(){
		if(isNull($(".inputt").next().val())){
		$(".inputt").after("<span>&nbsp;&nbsp;*</span>");
		$(".inputt").next().css("color","red");
		}
	  });
      var max=500;
	  var ww=$(".textarea1").val().length;
      $(".zishu2").text(ww);
	  $(".zishu1").text(max-ww);
	$(document).keyup(function(){
	  var max=500;
	  var ww=$(".textarea1").val().length;
      $(".zishu2").text(ww);
	  $(".zishu1").text(max-ww);
		if(ww>max){
		alert("字数超过限制！");
		}
	 
 });
	

});
function isNull(str){
  if(str==null)
    return 1;


}
