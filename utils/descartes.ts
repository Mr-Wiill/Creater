/**
 * 笛卡尔积算法
 * @param data 入参数组（多个数组元素组成的数组）
 * @returns 笛卡尔乘积（数组）
 */
export const descartes = function (data: any[]) {
    if (data.length === 1) return data.filter(el => el.length > 0)
    const resData = data.reduce((a, b) => {
        let m = a.map((av: any) => b.map((bv: any) => [bv].concat(av)))
        return m.reduce((c: any, d: any) => c.concat(d), [])
    }).map((v: any) => v.reverse())
    return resData
}