<script   type="text/javascript">  //定义原型函数trim（）来去掉表单输入数据前后的空格
String.prototype.trim=function(){
return this.replace(/(^\s*)(\s*$)/g,"");

}
function check(){
                                     

var product=document.getElementById( "product");
var account=document.getElementById( "account");
var company=document.getElementById( "company");
var name=document.getElementById( "name");
var tel=document.getElementById( "tel");
var email=document.getElementById( "email");	
//判断订购产品表单元素是否有输入值
if (product.value.trim().length==0) {
	alert("请填写想订购的产品")；
	product.focus();
	return flase;
}else  if(account.value.trim().length==0){

	alert("请填写订购数量")；
	account.focus();
	return flase;
}
//判断输入的数量是否是数字类型
else if(isNaN(account.value)){
alert("请填写正确的订购数量")；
account.select();   //将输入的错误的数量值选中
return flase;


}else  if(account.value.trim().length==0){

	alert("请填写订购的公司名称")；
	company.focus();
	return flase;
}
else  if(account.value.trim().length==0){

	alert("请填写公司联系人")；
	name.focus();
	return flase;
}
else  if(account.value.trim().length==0){

	alert("请填写订购联系电话")；
	tel.focus();
	return flase;
}
else  if(account.value.trim().length==0){

	alert("请填写订购email")；
	email.focus();
	return flase;
}
else  if(email.value.indexOf("@")==1){

	alert("请填写正确的email")；
	email.select();
	return flase;
}else{
return true;
}





}	





</script>