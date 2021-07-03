var age = 10;
function foo(){
    console.log(age);
	var name = "hunt_bo";
	return function(){
		console.log(name);
	}
}
console.log(name);
var bar = foo();
bar();