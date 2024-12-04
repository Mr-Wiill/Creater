/**
 * 自动导入模块
 * @returns 模块内容数组
 */

// webpack编译环境下
const autoImportModules1 = function (): Array<any> {
    // 找到与当前文件同一个的modules目录下的ts文件
    const ctx = require.context("./modules/", true, /\.tsx$/)   // require是webpack的方法
    const keys = ctx.keys().map((key: string) => ctx(key)["default"])
    return keys.reduce((pre, cur) => [...pre, ...cur], [])
}

// vite编译环境下
const autoImportModules2 = function (): Array<any> {
    const files: any = import.meta.glob('./modules/*.ts', { eager: true })  // import.meta.glob是vite的方法
    const keys = Object.keys(files).map((v: any) => files[v].default)
    return keys.reduce((pre, cur) => [...pre, ...cur], [])
}