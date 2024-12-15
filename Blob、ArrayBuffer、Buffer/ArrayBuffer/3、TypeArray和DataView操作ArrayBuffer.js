/* 通过TypeArray对ArrayBuffer进行写操作 */

const typedArray1 = new Int8Array(8);
typedArray1[0] = 32;

const typedArray2 = new Int8Array(typedArray1);
typedArray2[1] = 42;

console.log(typedArray1);
//  output: Int8Array [32, 0, 0, 0, 0, 0, 0, 0]

console.log(typedArray2);
//  output: Int8Array [32, 42, 0, 0, 0, 0, 0, 0]




/* 通过DataView对ArrayBuffer进行写操作 */

const buffer = new ArrayBuffer(16);
const view = new DataView(buffer);
view.setInt8(2, 42);
console.log(view.getInt8(2));
// 输出: 42