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
