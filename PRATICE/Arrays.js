// concat
var arr1=["C","C++","Python"];  
var arr2=["Java","JavaScript","Android"];  
var result=arr1.concat(arr2);
console.log(result);
// concat diff
var arr4=["C","C++","Python"];  
var arr5=["Java","JavaScript","Android"];  
var arr6=["Ruby","Kotlin"];  
var result1=arr6.concat(arr4,arr5);  
console.log(result1);
// Array entries---to get values along with its index
var arr=['John','Michael','Embrose','Herry','Lewis'];  
var itr=arr.entries(); 
for(let e of itr){console.log(e)};
// every-----should satisify the conditions
var marks=[50,40,45,37,20];  
  
function check(value)  
{  
  return value>30;  //return false, as marks[4]=20  
}  
console.log(marks.every(check)); 
//array flat
let arrr = [1, 2, 3, , 4];
let newArr = arr.flat();
console.log(newArr); 
//array flatmap()
var arr7=['a','b','c','d'];  
var arr8=[1,2,3,4];  
var newArr1=arr7.flatMap((arr7,index)=>[arr7,arr8[index]]);
console.log(newArr1);
//fill method
var arr=["AngularJS","Node.js","JQuery"];  
var result=arr.fill("Bootstrap",0,2);  
console.log(result);
//filter method
function test(element, index, array) {  
    return element>=25;  
  }  
 console.log([21,32,21,43].filter(test));  
 //find method
 var arr=[5,22,19,25,34];  
var result=arr.find(x=>x>20);  
console.log(result);
//find index
function isPrime(value, index, arr) {  
    var start = 2;  
    while (start <= Math.sqrt(value)) {  
      if (value % start++ < 1) {  
        return false;  
      }  
    }  
    return value > 1;  
  }  
  console.log([8, 4, 7, 22].findIndex(isPrime));  
  //for each
  const students = ['John', 'Sara', 'Jack'];

students.forEach(element => {
  console.log(element);
});
//for each

// let count='';
// students.forEach(element => {
    
// count+=element;
// });
// console.log(count)

//values method
const arr=["P","Q","R","S","T"]; //Initializing array elements.  
const itr=arr.values();  
document.write("The array elements are: <br>");  
for(let x of itr)  
{  
    console.log("<br>"+x);  
}



