function print(callback)
{
  let arr=[1,2,3,4];
  console.log(callback(arr));
}
function sum(array){
  return array.reduce((a,b)=>(a+b));
}
function mul(array)
{
  return array.reduce((a,b)=>(a*b));
}
print(sum);
print(mul);

console.log("-----------------------------");

let arr=[1,2,3,4,5];
let total = sumOfArray(arr);

function sumOfArray(array)
{
  return array.reduce((a,b)=>(a+b));
}
function print(output)
{
  console.log(output);
}
print(total);

console.log("---------------------------------");

// Filtering the even

let Arr=[1,4,2,5,6,7,8,9,10];
function Arrayfilt(Array,printSum)
{
   let A= Array.filter((a)=>(a%2==0));
  //  console.log(Array);
   printSum(A);
}
function printSum(arr)
{
  console.log(...arr);
}
Arrayfilt(Arr,printSum);

