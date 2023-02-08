function* mat()
{
  let a=1;
  let b=17;
  yield a+b;
  let c=(a+b)<<3;
  yield c;
  let d=c+100;
  yield d;
}
let sequence=[...mat()];
// console.log(sequence);
for(let a of sequence) {
  console.log(a);
}
 console.log("----------------------------");

 let obj={
    start:5,
    end:20,
    *[Symbol.iterator](){
        let sum=0;
        for(let i=this.start;i<this.end;i++){
            let u = yield i;
            sum+=u;
        }
        // for(let i=this.end;i>=this.start;i--)
        // {
        //     yield i;
        // }
    }
}

console.log(...obj);
console.log("----------------------------");





