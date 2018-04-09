// JavaScript Document
/*
增加8个函数实现分类链接

*/
function change1()
{
	var top_center = document.getElementById("mian1_center_i");
	top_center.src = "commodity_class\\class1.html";
}
function change2()
{
	var top_center = document.getElementById("mian1_center_i");
	top_center.src = "commodity_class\\class2.html";
}
function change3()
{
	var top_center = document.getElementById("mian1_center_i");
	top_center.src = "commodity_class\\class3.html";
}
function change4()
{
	var top_center = document.getElementById("mian1_center_i");
	top_center.src = "commodity_class\\class4.html";
}
function change5()
{
	var top_center = document.getElementById("mian1_center_i");
	top_center.src = "commodity_class\\class5.html";
}
function change6()
{
	var top_center = document.getElementById("mian1_center_i");
	top_center.src = "commodity_class\\class6.html";
}






function change2_1()
{
	var top_center = document.getElementById("mian1_center_i");
	top_center.src = "commodity_class\\class7.html";
}
function change2_2()
{
	var top_center = document.getElementById("mian1_center_i");
	top_center.src = "commodity_class\\class8.html";
}
function change2_3()
{
	var top_center = document.getElementById("mian1_center_i");
	top_center.src = "commodity_class\\class9.html";
}
function change2_4()
{
	var top_center = document.getElementById("mian1_center_i");
	top_center.src = "commodity_class\\class10.html";
}
function change2_5()
{
	var top_center = document.getElementById("mian1_center_i");
	top_center.src = "commodity_class\\class11.html";
}
function change2_6()
{
	var top_center = document.getElementById("mian1_center_i");
	top_center.src = "commodity_class\\class12.html";
}
function change2_7()
{
	var top_center = document.getElementById("mian1_center_i");
	top_center.src = "commodity_class\\class13.html";
}
function change2_8()
{
	var top_center = document.getElementById("mian1_center_i");
	top_center.src = "commodity_class\\class14.html";
}










function change7()
{
	var top_center = document.getElementById("mian1_center_i");
	top_center.src = "pic_change\\PIC1.html";
	this.style.color = 'red';
}
function change8()
{
	var top_center = document.getElementById("mian1_center_i");
	top_center.src = "pic_change\\PIC2.html";
	this.style.color = 'red';
}
function change9()
{
	var top_center = document.getElementById("mian1_center_i");
	top_center.src = "pic_change\\PIC3.html";
	this.style.color = 'red';
}
function change10()
{
	var top_center_1 = document.getElementById("div3_2_1");
	var top_center_2 = document.getElementById("div3_2_2");
	var top_center_3 = document.getElementById("div3_2_3");
	var top_center_4 = document.getElementById("div3_2_4");
	top_center_1.style.display = "block";
	top_center_2.style.display = "none";
	top_center_3.style.display = "none";
	top_center_4.style.display = "none";
}
function change11()
{
	var top_center_1 = document.getElementById("div3_2_1");
	var top_center_2 = document.getElementById("div3_2_2");
	var top_center_3 = document.getElementById("div3_2_3");
	var top_center_4 = document.getElementById("div3_2_4");
	top_center_1.style.display = "none";
	top_center_2.style.display = "block";
	top_center_3.style.display = "none";
	top_center_4.style.display = "none";
}
function change12()
{
	var top_center_1 = document.getElementById("div3_2_1");
	var top_center_2 = document.getElementById("div3_2_2");
	var top_center_3 = document.getElementById("div3_2_3");
	var top_center_4 = document.getElementById("div3_2_4");
	top_center_1.style.display = "none";
	top_center_2.style.display = "none";
	top_center_3.style.display = "block";
	top_center_4.style.display = "none";
}
function change13()
{
	var top_center_1 = document.getElementById("div3_2_1");
	var top_center_2 = document.getElementById("div3_2_2");
	var top_center_3 = document.getElementById("div3_2_3");
	var top_center_4 = document.getElementById("div3_2_4");
	top_center_1.style.display = "none";
	top_center_2.style.display = "none";
	top_center_3.style.display = "none";
	top_center_4.style.display = "block";
}


window.onload = function()
{
	
	  var cm=null;
	  function getPos(el,sprop)  
	  {
		  var iPos = 0 
		  while (el!=null)  
		  {
			  iPos+=el["offset" + sprop] 
			  el = el.offsetParent
		  } 
		  return iPos
	  } 
	  function show(el,m)  
	  {
		if (m) 
		{           
			m.style.display=''; 
			m.style.pixelLeft = getPos(el,"Left") 
			m.style.pixelTop = getPos(el,"Top") + el.offsetHeight
		}  
		if ((m!=cm) && (cm)) 
			cm.style.display='none';
		cm=m;
	  }
	  
	  
	 var top_change1_con_3 = document.getElementById("main1_right_a3");
	 var top_change1_con_4 = document.getElementById("main1_right_a4");
	 var top_change1_con_5 = document.getElementById("main1_right_a5");
	 var top_change1_3 = document.getElementById("main_right_ds3");
	 var top_change1_4 = document.getElementById("main_right_ds4");
	 var top_change1_5 = document.getElementById("main_right_ds5");
	 
	 show(top_change1_con_3, top_change1_3);
	 
	 function show1_3()
	 {
		 show(top_change1_con_3, top_change1_3);
	 }
	 function show1_4()
	 {
		 show(top_change1_con_4, top_change1_4);
     }
	 function show1_5()
	 {
		 show(top_change1_con_5, top_change1_5);
     }
	 
	 
	 top_change1_con_3.onmouseover = show1_3;
	 top_change1_con_4.onmouseover = show1_4;
	 top_change1_con_5.onmouseover = show1_5;
	
	
	var top_center_left_element1 = document.getElementById("left_1");
	var top_center_left_element2 = document.getElementById("left_2");
	var top_center_left_element3 = document.getElementById("left_3");
	var top_center_left_element4 = document.getElementById("left_4");
	var top_center_left_element5 = document.getElementById("left_5");
	var top_center_left_element6 = document.getElementById("left_6");
	
	
	var top_center_left_element2_1 = document.getElementById("left_7");
	var top_center_left_element2_2 = document.getElementById("left_8");
	var top_center_left_element2_3 = document.getElementById("left_9");
	var top_center_left_element2_4 = document.getElementById("left_10");
	var top_center_left_element2_5 = document.getElementById("left_11");
	var top_center_left_element2_6 = document.getElementById("left_12");
	var top_center_left_element2_7 = document.getElementById("left_13");
	var top_center_left_element2_8 = document.getElementById("left_14");
	
	var top_center_left_element7 = document.getElementById("main1_a1");
	var top_center_left_element8 = document.getElementById("main2_a2");
	var top_center_left_element9 = document.getElementById("main2_a3");
	
	top_center_left_element1.onmouseover = change1;
	top_center_left_element2.onmouseover = change2;
	top_center_left_element3.onmouseover = change3;
	top_center_left_element4.onmouseover = change4;
	top_center_left_element5.onmouseover = change5;
	top_center_left_element6.onmouseover = change6;
	
	
	top_center_left_element2_1.onmouseover = change2_1;
	top_center_left_element2_2.onmouseover = change2_2;
	top_center_left_element2_3.onmouseover = change2_3;
	top_center_left_element2_4.onmouseover = change2_4;
	top_center_left_element2_5.onmouseover = change2_5;
	top_center_left_element2_6.onmouseover = change2_6;
	top_center_left_element2_7.onmouseover = change2_7;
	top_center_left_element2_8.onmouseover = change2_8;
	
	
	
	top_center_left_element7.onmouseover = change7;
	top_center_left_element8.onmouseover = change8;
	top_center_left_element9.onmouseover = change9;
	top_center_left_element9.onmouseout = function(){this.style.color = "blue"};
	top_center_left_element8.onmouseout = function(){this.style.color = "blue"};
	top_center_left_element7.onmouseout = function(){this.style.color = "blue"};
	
	var top_center_left_element10 = document.getElementById("main1_a4");
	var top_center_left_element11 = document.getElementById("main1_a5");
	var top_center_left_element12 = document.getElementById("main1_a6");
	var top_center_left_element13 = document.getElementById("main1_a7");
	top_center_left_element10.onmouseover = change10;
	top_center_left_element11.onmouseover = change11;
	top_center_left_element12.onmouseover = change12;
	top_center_left_element13.onmouseover = change13;
}



  