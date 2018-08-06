/*---------js运动框架，适用于带像素的样式属性、opacity属性---------*/

function getStyle(obj, name)							//封装一个函数来获取外部样式
{
	if(obj.curentStyle){
		return obj.curentStyle[name];
	}
	else
	{
		return getComputedStyle(obj,false)[name];
	}
};
function moveFrame(obj,attr,target)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function()
	{	
		var cur=0;
		if(attr=="opacity"){
			cur=Math.round(parseFloat(getStyle(obj,attr))*100);	//opacity为小数*100，然后再四舍五入（把小数转成整数）
		}else{
			cur=parseInt(getStyle(obj,attr));				//调用封装函数获取样式，并转化成整数
		}
		
		//计算速度
		var speed=(target-cur)/6;								
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(cur==target)
		{
			clearInterval(obj.timer);
		}
		else
		{	
			if(attr=="opacity"){
				obj.style.filter="alpha("+cur+speed+")";
				obj.style[attr]=(cur+speed)/100;
			}
			else{
				obj.style[attr]=cur+speed+"px";					//改变样式的值
			}						
		}
	},30);
	
};