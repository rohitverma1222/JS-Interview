let obj1={
    name:'roht',
    age:22,
}
let showDetails=function(state){
    console.log(this.name+" "+this.age+" "+state);
}

// let showDetailsBind=showDetails.bind(obj1);
// showDetailsBind();

Function.prototype.myBind=function(...args){
    let obj=this;
    let params=args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2]);
    }
}
let showDetailsBind=showDetails.myBind(obj1);
showDetailsBind("UP");