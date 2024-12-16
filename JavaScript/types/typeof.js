/**
 * 准确的判断数据类型
 */

function getType(data) {
    let type = typeof data;
    if (type !== "object") return type;   // 先进行typeof判断，如果是基础数据类型，直接返回
    // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
    const typeStr = Object.prototype.toString.call(data).replace(/^\[object (\S+)\]$/, '$1');   // 说明：$1表示正则括号内捕获到的内容，如果存在多个括号，则用$1，$2，$3，依次类推
    return typeStr.toLowerCase();
}