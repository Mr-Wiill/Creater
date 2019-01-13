/* jshint esversion: 6 */

/* 定义一个集合类 */
class Skipper{
    constructor(){
        this.item = {};           // 一个集合(值值对，如value : value)
    }
    has(element){           /* 查找 */
        return this.item.hasOwnProperty(element);
    }
    add(element){           /* 添加 */
        if(!this.has(element)){
            this.item[element] = element;
            return 'success';
        }else{
            return '该元素已存在';
        }
    }
    remove(element){        /* 删除 */
        if(this.has(element)){
            delete this.item[element];
            return 'success';
        }else{
            return '该元素不存在';
        }
    }
    clear(){                /* 清空元素 */
        this.item = {};
    }
    size(){                 /* 查看集合大小 */
        return Object.keys(this.item).length;    // 由item对象的键组成的数组的长度
    }
    values(){                /* 提取集合所有元素并组合成的一个数组 */
        let arr = [];
        for(let key in this.item){
            arr.push(this.item[key]);
        }
        return arr;
    }
}


/* 并集类 */
class UnionSkipper{
    getSkipper(A,B){
        let result = new Skipper();
        A.values().forEach(element=>{            // 遍历第一个集合
            result.add(element);   // add()已去重
        });
        B.values().forEach(element=>{       // 遍历第二个集合
            result.add(element);
        });
        return result;
    }
}

/* 交集类 */
class IntersectionSkipper{
    getSkipper(A,B){
        let result = new Skipper()
        A.values().forEach(element=>{
            if(B.has(element)){
                result.add(element);    
            }
        });
        return result
    }
}

/* 补集类 */
class DifferenceSkipper{
    getSkipper(A,B){
        let result = new Skipper();
        A.values().forEach(element=>{
            if(!B.has(element)){
                result.add(element);
            }
        });
        return result;
    }
}