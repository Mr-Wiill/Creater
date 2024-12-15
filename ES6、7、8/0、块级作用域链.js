/* 
    块级作用域链里，子作用域里没有的变量会沿着作用域链往上（父级）找，一直找到window，如果没找到则报错。
*/

// 父级作用域访问子级作用域变量，报错
{{{{
    {let insane = 'Hello World'}
    console.log(insane); // 报错
}}}};


// 子级作用域访问父级作用域变量，正确
{{{{
    let insane = 'Hello World'
    {console.log(insane); }
}}}};