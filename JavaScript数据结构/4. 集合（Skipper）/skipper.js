/* jshint esversion: 6 */
/* 定义一个集合类 */
let Skipper = ()=>{
    let item = {};
    // has(element) 查询集合是否存在某元素
    this.has = (element)=>{
        return item.hasOwnProperty(element);
    };
    // add(element) 向集合里添加新元素
    this.add = (element)=>{
        if(!this.has(element)){
            item[element] = element;
        }
        return '该元素已存在';
    };

    // delete(element) 删除某个元素
    this.delete = (element)=>{
        if(this.has(element)){
            delete item.delete;
        }else{
            return '该元素不存在';
        }
    }

}