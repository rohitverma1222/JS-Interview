// console.log(this);  

// function f1()
// {
//     console.log(this);
// }
// f1();

// const obj={
//     f1:function (){
//         console.log(this);
//     }
// }
// obj.f1();


// const obj={
//     f1:function (){
//         function check(){
//             console.log(this);
//         }
//         check();
//     }
// }
// obj.f1();

// value of this when applying strict mode
'use strict'
// console.log(this);  

// function f1()
// {
//     console.log(this);
// }
// f1();

// const obj={
//     f1:function (){
//         console.log(this);
//     }
// }
// obj.f1();


const obj={
    f1:function (){
        function check(){
            console.log(this);
        }
        check();
    }
}
obj.f1();