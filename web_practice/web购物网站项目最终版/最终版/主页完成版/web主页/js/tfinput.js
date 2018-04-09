	function isEmpty()
	{	
		var s = 0;
		var ipt1 = document.getElementById("input1");
		var ipt3 = document.getElementById("input3");
		var ipt4 = document.getElementById("input4");
		var ipt5 = document.getElementById("input5");
		if(ipt1.value == ""||ipt1.value ==null||ipt3.value == ""||ipt3.value ==null||ipt4.value == ""||ipt4.value ==null||ipt5.value == ""||ipt5.value ==null)
		{
			alert("您有未填项目");
			s = 1;
			return;
		}
		if(ipt4.value.length <= 5)
		{
			alert("邮政编码的长度不足六位"); 
			s = 2;
			return;
		}
		if(ipt5.value.length <= 10)
		{
			alert("请输入正确手机号");
			s = 3;
			return;
		}
		if(s == 0)
		{	
			alert("输入正确，跳转到送货方式");
			for (I=1; I<=500; I++)
			{
				parent.scroll(1,I);				
			}
		}
	}
	
	
	function skip()
	{
		for (I=1; I<=500; I++)
		{
			parent.scroll(1,I);
		}
	}


window.onload = function()
{
		var ifr = document.getElementById("ifRight");
		var skip1 = document.getElementById("skip1");
		var skip2 = document.getElementById("skip2");
		skip1.onclick = skip;
		skip2.onclick = skip;
		ifr.onclick = isEmpty;
}