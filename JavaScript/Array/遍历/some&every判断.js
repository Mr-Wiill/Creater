/* 
some（）& every（）
这两个方法类似于“断言”（assert），用来判断数组成员是否符合某种条件。
some方法是只要有一个数组成员的返回值为true，则返回true，否则false；
every方法是需要每一个返回值为true，才能返回true，否则为false;
*/

const arr = [3,4,4,5,4,6,5,7];

console.log( arr.some( function( item, index, array ){ 
    console.log( 'item=' + item + ',index='+index+',array='+array ); 
    return item > 3; 
}));
//  item=3,index=0,array=3,4,4,5,4,6,5,7
//   item=4,index=1,array=3,4,4,5,4,6,5,7
//   true

console.log( arr.every( function( item, index, array ){ 
    console.log( 'item=' + item + ',index='+index+',array='+array ); 
    return item > 3; 
}));
// item=3,index=0,array=3,4,4,5,4,6,5,7
//false
