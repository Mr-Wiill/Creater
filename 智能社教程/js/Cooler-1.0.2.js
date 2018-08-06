/*
 * 一个js函数库
 * author：Wiill
 * 用法：直接引用函数名调用函数
 * 
 */

/*-----------------通过parent里的类名来获取节点----------------------*/
function getByClass(oParent, className) {
	var aResult = []; //一个空数组，用来装className节点
	var aEle = oParent.getElementsByTagName("*"); //获取oParent里所有的子节点
	for(var i = 0; i < aEle.length; i++) {
		if(aEle[i].className == className) {
			aResult.push(aEle[i]); //把class子节点装进className数组
		}
	}
	return aResult;
};

/*-----------------获取外部和行间样式兼容性函数---------------
 * 			应用方法：getStyle(obj,attrName);
 * */
function getStyle(obj, name) {
	if(obj.curentStyle) {
		return obj.curentStyle[name];
	} else {
		return getComputedStyle(obj, false)[name];
	}
};

/*------------js运动框架，改变css属性的像素值（px）、opacity-------------
 * 
 * 			应用方法： move(obj, {attr1:value1, attr2:value2, attr:value3...}, funEnd);
 * */
function move(obj, json, funEnd) //把属性值存储在json数组里
{
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		bStop = true; //假设所有的值都已经到了
		for(var attr in json) {
			var cur = 0;
			if(attr == "opacity") {
				cur = Math.round(parseFloat(getStyle(obj, attr)) * 100); //opacity为小数*100，然后再四舍五入（把小数转成整数）
			} else {
				cur = parseInt(getStyle(obj, attr)); //调用封装函数获取样式，并转化成整数
			}

			//计算速度
			var speed = (json[attr] - cur) / 6;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

			if(cur != json[attr]) //如果还有属性值没到达目标值
				bStop = false; //假设不成立

			if(attr == "opacity") {
				obj.style.filter = "alpha(" + cur + speed + ")";
				obj.style[attr] = (cur + speed) / 100;
			} else {
				obj.style[attr] = cur + speed + "px"; //改变样式的值
			}
		}

		if(bStop) { //所有属性都到达目标值，假设成立
			clearInterval(obj.timer); //关闭定时器，停止运动

			if(funEnd) {
				funEnd(); //接着执行下一个函数
			}
		}
	}, 30);
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