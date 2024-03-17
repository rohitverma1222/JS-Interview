// ----------------------- 1------------------------

// let obj1={
//     name:"rohit",
//     age:22,
//     showDetails:function(){
//         console.log(`${this.name} has a age of ${this.age}`);
//     }
// }
// let obj2={
//     name:"Mohit",
//     age:17,
// }
// // function borrowing 
// // taking the showdetails function in obj2 
// obj1.showDetails.call(obj2);

// ----------------------- 2 ------------------------
// separating the function from object
// it is not good idea to give importance to a single function 
// let obj1={
//     name:"rohit",
//     age:22,
// }
// let obj2={
//     name:"Mohit",
//     age:17,
// }
// let showDetails=function(){
//     console.log(`${this.name} has a age of ${this.age}`);
// }
// showDetails.call(obj1)

// ----------------------- 3 ------------------------
// How to pass arguments
let obj1={
    name:"rohit",
    age:22,
}
let obj2={
    name:"Mohit",
    age:17,
}
let showDetails=function(car,address){
    console.log(`${this.name} has a age of ${this.age} and drive the ${car}, and lives in ${address}`);
}
// function borrowing
// showDetails.call(obj2,"bmw","Noida");

// apply - in apply arguments pass as an array 
// showDetails.apply(obj2,["bmw","Noida"]);

//bind - in bind object is binded at place and js keep it somewhere so,you have to call it when you neeed it  
let showDetailsBind=showDetails.bind(obj1,"bmw","Noida");
showDetailsBind();