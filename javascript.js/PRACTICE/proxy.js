let target ={};
let proxy = new Proxy(target,{});
proxy.name="Ramyaa";
setTimeout(printname,5000);
function printname(name)
{
    console.log(target.name);
}
