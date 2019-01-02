class _Stack{
    constructor(){
        this.arr = []       // 定义一个数组代表栈
    }
    getStack(){
        return this.arr             // 查看栈
    }
    push(element){
        this.arr.push(element)      // 进栈
    }
    pop(){
        return this.arr.pop()       // 出栈
    }
    peak(){
        return this.arr[this.arr.length-1]      // 查看栈顶
    }
    isEmpty(){
        return this.arr.length=0        // 查看栈是否为空
    }
    size(){ 
        return this.arr.length          // 查看栈元素个数
    }
    clear(){
        this.arr = []                   // 清空栈
    }
}

class _decimalToBinary{
    constructor(n){
        this.num = n
        this.remainder = 0
    }
    setData(){
        let s = new _Stack()          //调用上面的Stack类
        while(this.num>0){
            this.remainder = this.num%2;        //去2的余数，即0或1
            s.push(this.remainder);
            this.num = Math.floor(this.num/2);  //向下取整，如5÷2=2.5向下取整2
        }
        return s.getStack().join('');   //把十进制数组转成字符串输出
    }
}