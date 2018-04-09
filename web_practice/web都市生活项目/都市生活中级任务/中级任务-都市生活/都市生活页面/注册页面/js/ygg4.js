function isNull(str){
if(str==""||str==null)
return 1;
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
else  {window.location="../登录页面/登录.html" ;}
});








    $("#warn1").hide();
	$("#warn2").hide(); //warn1,2开始都是隐藏的，只有在用户点击不符合要求的时候会弹出提示信息



$("#username"). blur(function(){     
 if(isNull($("#username").val())){
	$("#warn1").show();
	}
else $("#warn1").hide();
});  //本语句表示在用户没有填写用户名的时候会提示警告信息，否则警告信息会被隐藏




$("#password"). blur(function(){     
 if(isNull($("#password").val())){
	$("#warn2").show();
	}
	else 	$("#warn2").hide();

});  //本语句表示在用户没有填写密码的时候会提示警告信息，否则警告信息会被隐藏


}

