function ajax(url, fnSucc, fnFaild) {
	
	//1.创建Ajax对象
	if(window.XMLHttpRequest) {		//非ie6浏览器
		var oAjax = new XMLHttpRequest();
	} else {
		var oAjax = new ActiveXObject("Microsoft.XMLHTTP");		//ie6
	}

	//2.连接服务器（打开和服务器的连接）
	oAjax.open('GET', url, true);

	//3.发送请求
	oAjax.send();

	//4.接收返回值
	oAjax.onreadystatechange = function() {
		if(oAjax.readyState == 4) {
			if(oAjax.status == 200) {
				//alert('成功了：'+oAjax.responseText);
				fnSucc(oAjax.responseText);
			} else {
				//alert('失败了');
				if(fnFaild) {
					fnFaild();
				}
			}
		}
	};
}