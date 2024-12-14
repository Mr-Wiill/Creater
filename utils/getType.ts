/**
 * 准确的判断数据类型
 */

export function getType(obj: any) {
    let type = typeof obj;
    if (type !== "object") return type;   // 先进行typeof判断，如果是基础数据类型，直接返回

    // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
    return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');
}