/*
    斐波那契数列：以兔子繁殖为例子而引入，故又称为“兔子数列”，指的是这样一个数列：1、1、2、3、5、8、13、21、34...

    在数学上，斐波纳契数列以如下被以递归的方法定义：F(0)=1，F(1)=1, F(n)=F(n-1)+F(n-2)（n>2，n∈N*）
*/
/*递归方法*/
function f(n) {
    if ( n==1 || n==2 ){
        return 1;
    }else{
        return f(n-1) + f(n-2);
    }
}
console.log(f(6));


/*动态规划方法*/
function fibonacci(n) {
    let n1 = 1,
        n2 = 1,
        sum = 1;
    for(let i = 3; i <= n; i += 1) {
        sum = n1 + n2;
        n1 = n2;    //往后移动一位数
        n2 = sum
    }
    return sum
}
console.log(fibonacci(5));