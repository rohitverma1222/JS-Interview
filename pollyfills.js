// Polyfills without prototype

// map
let arr=[1,2,4,5,6]

function myMap(arr,cbfun)
{
    let newArr=[];
    for(let i of arr)
    {
        newArr.push(cbfun(i));
    }
    return newArr
}
function squareMapArr(x)
{
    return x*x;
}
console.log("Return Value of Map",myMap(arr,squareMapArr));

// filter
function myFilter(arr,filterCallback)
{
    let newArr=[]
    for(let val of arr)
    {
        if(filterCallback(val))
            newArr.push(val);
    }
    return newArr;
}

const filterCallback=(x)=>x%2==0;

console.log("Return value of filter",myFilter(arr,filterCallback));

// Reduce

function myReduce(arr,reduceCallback,initalValue)
{
    let sum=initalValue??0;
    for(let val of arr)
    {
        sum=reduceCallback(sum,val);
    }
    return sum;
}
const reduceCallback=(sum,val)=>sum+val;

console.log("My Reduce",myReduce(arr,reduceCallback,2));


// Polyfills without prototype

