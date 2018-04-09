// JavaScript Document
function change_1()
{
	var elem_change = document.getElementById("top_1_1");
	elem_change.innerHTML = "我的随你便▲";
}
function change_2()
{
	var elem_change = document.getElementById("top_1_2");
	elem_change.innerHTML = "企业采购▲";
}
function change_3()
{
	var elem_change = document.getElementById("top_1_3");
	elem_change.innerHTML = "客户服务▲";
}


function change_1_1()
{
	var elem_change = document.getElementById("top_1_1");
	elem_change.innerHTML = "我的随你便▼";
}
function change_2_2()
{
	var elem_change = document.getElementById("top_1_2");
	elem_change.innerHTML = "企业采购▼";
}
function change_3_3()
{
	var elem_change = document.getElementById("top_1_3");
	elem_change.innerHTML = "客户服务▼";
}


window.onload = function()
{
	var control_1 = document.getElementById("top_control_1");
	var control_2 = document.getElementById("top_control_2");
	var control_3 = document.getElementById("top_control_3");
	control_1.onmouseover = change_1;
	control_2.onmouseover = change_2;
	control_3.onmouseover = change_3;
	
	control_1.onmouseout = change_1_1;
	control_2.onmouseout = change_2_2;
	control_3.onmouseout = change_3_3;
	
	
	var t = 1;
		function solve_t()
		{
			if(t == 5)
				t = 1;
			if(t == -3)
				t = 1;
			switch(t)
			{
				case 1:
				over_1.style.display = "block";
				over_2.style.display = "none";
				over_3.style.display = "none";
				over_4.style.display = "none";
				break;
				case 2:
				over_1.style.display = "none";
				over_2.style.display = "block";
				over_3.style.display = "none";
				over_4.style.display = "none";
				break;
				case 3:
				over_1.style.display = "none";
				over_2.style.display = "none";
				over_3.style.display = "block";
				over_4.style.display = "none";
				break;
				case 4:
				over_1.style.display = "none";
				over_2.style.display = "none";
				over_3.style.display = "none";
				over_4.style.display = "block";
				break;
				case 0:
				over_1.style.display = "none";
				over_2.style.display = "block";
				over_3.style.display = "none";
				over_4.style.display = "none";
				break;
				case -1:
				over_1.style.display = "none";
				over_2.style.display = "none";
				over_3.style.display = "block";
				over_4.style.display = "none";
				break;
				case -2:
				over_1.style.display = "none";
				over_2.style.display = "none";
				over_3.style.display = "none";
				over_4.style.display = "block";
				break;
			}
		}
		function get_t_reduce()
		{
			t--;
			solve_t();
		}		
		function get_t_add()
		{
			t++;
			solve_t();
		}
		
		
		var s = 1;
		function solve_s()
		{
			if(s == 5)
				s = 1;
			if(s == -3)
				s = 1;
			switch(s)
			{
				case 1:
				over2_1.style.display = "block";
				over2_2.style.display = "none";
				over2_3.style.display = "none";
				over2_4.style.display = "none";
				break;
				case 2:
				over2_1.style.display = "none";
				over2_2.style.display = "block";
				over2_3.style.display = "none";
				over2_4.style.display = "none";
				break;
				case 3:
				over2_1.style.display = "none";
				over2_2.style.display = "none";
				over2_3.style.display = "block";
				over2_4.style.display = "none";
				break;
				case 4:
				over2_1.style.display = "none";
				over2_2.style.display = "none";
				over2_3.style.display = "none";
				over2_4.style.display = "block";
				break;
				case 0:
				over2_1.style.display = "none";
				over2_2.style.display = "block";
				over2_3.style.display = "none";
				over2_4.style.display = "none";
				break;
				case -1:
				over2_1.style.display = "none";
				over2_2.style.display = "none";
				over2_3.style.display = "block";
				over2_4.style.display = "none";
				break;
				case -2:
				over2_1.style.display = "none";
				over2_2.style.display = "none";
				over2_3.style.display = "none";
				over2_4.style.display = "block";
				break;
			}
		}
		function get_s_reduce()
		{
			s--;
			solve_s();
		}		
		function get_s_add()
		{
			s++;
			solve_s();
		}
		
		
	var con_left_1 = document.getElementById("left_1");
	var con_right_1 = document.getElementById("right_1");
	var con_left_2 = document.getElementById("left_2");
	var con_right_2 = document.getElementById("right_2");
	con_left_1.onmouseover = get_t_reduce;
	con_right_1.onmouseover = get_t_add;
	con_left_2.onmouseover = get_s_reduce;
	con_right_2.onmouseover = get_s_add;
}