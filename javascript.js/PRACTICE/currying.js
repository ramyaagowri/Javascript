// ex 1
function f(a)
{
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(f(1,2,3));
console.log("---------------------------");


//ex 2

function f(call)
{
    return function(a)
    {
        return function(b)
        {
            return function(c)
            {
            return call(a,b,c);
            }
        }
    }
}
function mul(a,b,c)
{
    return a*b*c;
}
let multiply=f(mul);

console.log(multiply(5)(5)(3));

console.log("---------------------------");
function func(a)
{
    return function(b) {
        if(b) 
        {
            return func(a + b);
        }
        return a;
    };
}
console.log(func(2)(7)(6)());


