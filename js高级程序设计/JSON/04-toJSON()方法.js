/*
    对js对象定义toJSON()方法，返回其自身的JSON数据格式。
*/
var d = new Date();
console.log(d.toJSON());    //返回时间格式(ISO格式)