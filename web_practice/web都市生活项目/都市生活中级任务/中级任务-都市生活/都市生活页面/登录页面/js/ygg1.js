function isNull(str){
if(str==""||str==null)
return 1;
else return 0;
}

window.onload=function(){
	$("#warn1").hide();
	$("#warn2").hide();

$("#start"). click(function(){     
 if(isNull($("#username").val())){
	$("#warn1").show();
	$("#warn2").show();
	}

	
else if(isNull($("#password").val())){
	$("#warn1").hide();
	$("#warn2").show();
	}
else if(isNull($("#username").val()&&$("#password").val())){
	$("#warn1").show();
	$("#warn2").hide();
	}	
else  {window.location="../后台页面/后台.html";}
});

}