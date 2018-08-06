/*
 * 一个js函数库
 * author：Wiill
 * 用法：直接引用函数名调用函数
 * 
 */


/*-----------------通过parent里的类名来获取节点----------------------*/
function getByClass(oParent, className)
{
	var aResult=[];											//一个空数组，用来装className节点
	var aEle=oParent.getElementsByTagName("*");			//获取oParent里所有的子节点
	for(var i=0; i<aEle.length; i++)
	{
		if(aEle[i].className==className)
		{
			aResult.push(aEle[i]);						//把class子节点装进className数组
		}
	}
	return aResult;
};



/*-----------------获取外部和行间样式兼容性函数---------------*/
function getStyle(obj, name)							
{
	if(obj.curentStyle){
		return obj.curentStyle[name];
	}	
	else
	{
		return getComputedStyle(obj,false)[name];
	}
};



/*------------js运动框架，适用于带像素的样式属性、opacity属性-------------*/
function move(obj,attr,target)
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


/*------------ 一个鼠标定位函数 -------------
 * 		引用方法:var pos=getPos(oEvent);		
 * 			   pos.x;
 * 			   pox.y;
 * */
function getPos(ev){
	var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
	var scrollLeft=document.documentElement.scrollLeft || document.body.scrollLeft;				
	var oEvent=ev || event;				
	return {x:oEvent.clientX+scrollLeft, y:oEvent.clientY+scrollTop};
};