function main(){
    this.aad = 234;
    this.def = function(){
                console.log(this);
            };
    this.foo = function(){
            console.log(this === xxx);
        };
    this.xoo = function(){
            console.log(this === main);
        };
    this.y00 = function() {
        return function () {
            console.log(this)
        }
    }
}
var xxx = new main();
xxx.def();      // main{}
xxx.foo();      // true
xxx.xoo();      // false
xxx.y00()();    // window{}