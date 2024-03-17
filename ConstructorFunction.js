function car(brand,model,color){
    this.Brand=brand;
    this.Model=model;
    this.Color=color;
}

let c1=new car("alto","x5","red");  //this -> {}
let c2=new car("swift","x5","red"); //this -> {}

console.log(c1);



// When a function is executed with new, it does the following steps:

//     A new empty object is created and assigned to this.
//     The function body executes. Usually it modifies this, adds new properties to it.
//     The value of this is returned.

// In other words, new User(...) does something like:

// function User(name) {
//   // this = {};  (implicitly)

//   // add properties to this
//   this.name = name;
//   this.isAdmin = false;

//   // return this;  (implicitly)
// }