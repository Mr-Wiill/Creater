function Ajax(url, fnSucc, fnFaild) {
    var xhr = new XMLHttpRequest();     //创建ajax对象

    xhr.open("get", url, true);     //连接服务器

    xhr.send();     //发送请求

    xhr.onreadystatechange = function () {      //接收请求
        if (xhr.readyState == 4){
            if (xhr.status == 200){
                fnSucc(xhr.responseText);
            } else {
                fnFaild();
            }

        }
    }
}