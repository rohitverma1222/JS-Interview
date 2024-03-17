function foo() {
	let b = 1;
	function inner() {
		return b;
	}
	return inner;
}
let get_func_inner = foo();

console.log(get_func_inner());
console.log(get_func_inner());
console.log(get_func_inner());


// Outer function
// function outer() {
// 	let arr = [];
// 	let i;
// 	for (i = 0; i < 4; i++) {
// 		// storing anonymous function
// 		arr[i] = function () { return i; }
// 	}

// 	// returning the array.
// 	return arr;
// }

// let get_arr = outer();

// console.log(get_arr[0]());
// console.log(get_arr[1]());
// console.log(get_arr[2]());
// console.log(get_arr[3]());


// Outer function
function outer() {
	function create_Closure(val) {
		return function () {
			return val;
		}
	}
	let arr = [];
	let i;
	for (i = 0; i < 4; i++) {
		arr[i] = create_Closure(i);
	}
	return arr;
}
let get_arr = outer();
console.log(get_arr[0]());
console.log(get_arr[1]());
console.log(get_arr[2]());
console.log(get_arr[3]());
