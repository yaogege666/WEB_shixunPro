// JavaScript Document

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
	
	var top_center_left_element7 = document.getElementById("main1_a1");
	var top_center_left_element8 = document.getElementById("main2_a2");
	var top_center_left_element9 = document.getElementById("main2_a3");
	
	top_center_left_element1.onmouseover = change1;
	top_center_left_element2.onmouseover = change2;
	top_center_left_element3.onmouseover = change3;
	top_center_left_element4.onmouseover = change4;
	top_center_left_element5.onmouseover = change5;
	top_center_left_element6.onmouseover = change6;
	
	top_center_left_element7.onmouseover = change7;
	top_center_left_element8.onmouseover = change8;
	top_center_left_element9.onmouseover = change9;
	top_center_left_element9.onmouseout = function(){this.style.color = "blue"};
	top_center_left_element8.onmouseout = function(){this.style.color = "blue"};
	top_center_left_element7.onmouseout = function(){this.style.color = "blue"};
	
}



  