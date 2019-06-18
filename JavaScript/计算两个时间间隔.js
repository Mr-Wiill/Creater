// 计算投票倒计时
function countDownTime(endTime){
    let date1 = new Date();  //开始时间
    let date2 = new Date(endTime);    //结束时间
    let date3 = date2.getTime() - date1.getTime();  //时间差的毫秒数
    if (date3<0) return `00天 00时 00分 00秒`
    // 计算出相差天数
    let days = Math.floor(date3 / (24 * 3600 * 1000));
    // 计算出小时数
    let leave1 = date3 % (24 * 3600 * 1000);    //计算天数后剩余的毫秒数
    let hours = Math.floor(leave1 / (3600 * 1000));
    // 计算相差分钟数
    let leave2 = leave1 % (3600 * 1000);        //计算小时数后剩余的毫秒数
    let minutes = Math.floor(leave2 / (60 * 1000));
    // 计算相差秒数
    let leave3 = leave2 % (60 * 1000);          //计算分钟数后剩余的毫秒数
    let seconds = Math.round(leave3 / 1000);
    return formatDate(days, hours, minutes, seconds)
}

// 格式化时间
function formatDate (days, hours, minutes, seconds) {
    let d = days
    if (d<10) d = `0${d}`
    let h = hours
    if (h<10) h = `0${h}`
    let m = minutes
    if (m<10) m = `0${m}`
    let s = seconds
    if (s<10) s = `0${s}`
    return `${d}天 ${h}时 ${m}分 ${s}秒`
}