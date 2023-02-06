
    /*let str = 'Widget with id';

    console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
    console.log( str.indexOf('widget') ); // -1, not found, the search is case-sensitive
    
    console.log( str.indexOf("with") ); // 1, "id" is found at the position 1 (..idget with id)
--------------------------------------------------------
let str = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
    console.log( pos );
}
let str = "Widget with id";

if (str.indexOf('Widget') != -1) {
    console.log("We found it"); // works now!
}
console.log(str.indexOf('Widget'));
/*let obj = {
    0: "Hello",
    1: "world!",
    length: 2,
  };
  
  obj.join = Array.prototype.join;
  
  console.log( obj.join(',') ); // Hello,world!*/
  /*class User {

    User(name) {
      this.name = name;
    }
  
    sayHi() {
      console.log(this.name);
    }
  
  }
  
  // Usage:
  let user = new User();
  user.User("123");
  user.sayHi();*/
  /*try {
    lalala; // error, variable is not defined!
  } catch (err) {
    console.log(err.name); // ReferenceError
    console.log(err.message); // lalala is not defined
    console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)
  
    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    console.log(err); // ReferenceError: lalala is not defined

    ------------------------------------------------------------
    Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
  }  */
 /* let A1=[2,3,1,3,2,4,6,7,9,2,19];
  let A2=[2,1,4,3,9,6];
  let A3=[];
  
  for(let i=0;i<A1.length;i++){
    for(let j=0;j<A2.length;j++)
    if(A1[i]==(A2[j]))
    {
        console.log(A2[j]);
        if(!((A2).includes(A3)))
        {
            A3+=A2[j];
        }
      
    }

  }
  console.log(A3);*/
  /*let key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv";
  let A=Object.assign([],key);
  let B=[];
  let C=[];
  for(let i=0;i<A.length;i++)
  {
    
    if(!(B.includes(A[i]))&&A[i]!=" ")
    {
        B.push(A[i]);
        
      }
  }

  console.log(B);
  for(let j=97;j<=122;j++)
  {
    C+=String. fromCharCode(j);
  }
  let op="";
  for(let i=0;i<message.length;i++)
  {
    if(message[i]!=" "){
        op+=C[B.indexOf(message[i])];
    }
    else{
        op+=" ";
    }
  }
console.log(op);*/
// let target=8;
// nums = [5,7,7,8,8,10];
// let count=[];
//     let count1=[];
//     for(let i=0;i<nums.length;i++)
//     {
//         if(nums[i]==target)
//         {
//             count+=i;
//         }
        
//     }
//     if(!(nums.includes(target)))
//     {
//        return count1=[-1,-1];
//     }
//     else{

//        count1[0]=count[0];
//         count1[1]=count[count.length-1];
//        return count1;

//     }
    
 /*for(let i=0;i<(s.length);i++){
        let t=s.charAt(i)+s.charAt(i+1);
    if((t=="()")||(t=="[]")||(t=="{}"))
    {
        return true;
    }
    else
    {
        return false;
    }
    }
};*/
/*let nums1=[1,3];
let nums2 =[2,4];
let nums3=nums1.concat(nums2);
nums3.sort((a,b)=>(a-b));
console.log(nums3);
    let sum=0;
    if(nums3.length%2==0)
    {
       sum=(nums3[Math.floor(nums3.length/2)]+nums3[Math.floor(nums3.length/2)-1])/2;
       console.log(sum);
    }
    else
    {
      
    sum=nums3[Math.floor((nums3.length/2))];
    console.log(sum);
    }*/
    /* /*let count=0;
    let count1=0;
    let count2=0;
     for(let i=0;i<s.length;i++)
     {
        if(s.charAt(i)=="{")
        {
            if(s.charAt(i+1)=="}"){
           count++;
           if(count==2){
               count=0;
           }
     }
        }
        if(s.charAt(i)=="(")
        {
            if(s.charAt(i+1)==")"){
           count1++;
           if(count1==2){
               count1=0;
           }
            }
        }
        if(s.charAt(i)=="[")
        {
            if(s.charAt(i+1)=="]"){
           count2++;
           if(count2==2){
               count2=0;
           }}
        }
     }
     if((count==0)&&(count1==0)&&(count2==0)){
         return true;
     }
     else
     {
         return false;
     }
}
   */
// s="()[]{}";
// let count=1;
// let count1=1;
// let count2=1;
// let res=false;
// for(let i=0;i<s.length;)
// {
//    switch(s.charAt(i))
//    {
//        case '{':
//        if(s.charAt(i+1)=='}')
//        {
//            count=0;
//            break;
//        }
//        else{
//            count++;
//            continue;
           
//        }
//        case '[':
//        if((s.charAt(i+1)==']')&&(count!=1))
//        {
//            count1=0;
//            break;
//        }
//        else
//        {
//            count1++;
//            continue;
//        }
//        case '(':
//        if((s.charAt(i+1)==')')&&(count1!=1))
//        {
//            count2=0;
//            break;
//        }
//        else
//        {
//            count2++;
//            continue;
//        }

            
//    }
//    i+=2;
// }
// if(count==0&&count1==0&&count2==0)
// {
//     console.log(true);
// }
// else
// {
//     console.log(false);
// }
   
// let map=new Map([['a',25],
// ['b',24],
// ['c',26]])
// console.log(map.has('b'))
// console.log(map.size)
// for(let [items,item] of map)
// {
//     console.log(`${items}:${item}`)
// }
// let s="([)]";
 
//     let tempArr =[];
//     let Map = {
//         '(':')',
//         '[':']',
//         '{':'}'
//     };

//     for(let i=0;i<s.length;i++){
//         if(s.charAt(i) =='(' || s.charAt(i)=='[' || s.charAt(i)=='{'){
//             tempArr.push(s[i]);
//         }else if(Map[tempArr.pop()]!=s[i]){
//             console.log(false);
//         }
//     }
//     console.log((tempArr.length>0)?false:true);


//output : true

//Input : "([)]"
//output : false

// class Stack{
//     constructor(){
//         this.items=[];
//     }
//     push(element){
//         this.items.push(element);
//     }
//     pop(){
//         return this.items.pop();
//     }
//     peek(){
//          return this.items[this.items.length-1];
//     }
//     isEmpty(){
//         if(this.items.length==0)
//         {
//             return true;
//         }
//         return false;
//     }
//     size(){
//         return this .items.length;
//     }
//     print(){
//         console.log(this.items);
//     }
// }
// let stack=new Stack();
// stack.push(5);
// stack.push(1);
// console.log(stack.print());

// console.log(stack.peek());
// console.log(stack.size());
// console.log(stack.pop());console.log(stack.size());

// class node{
//     constructor(data)
//     {
//         this.data=data;
//         this.next=null;
//     }

// }
// class Linkedlist{
//     constructor(){
//         this.root=null;
//     }

// append(data){
//     let newnode=new node(data);
//     let temp=this.root;
//     if(this.root==null)
//     {
//         this.root=newnode;
//     }
//     else{
//     while(temp.next!=null)
//     {
//         temp=temp.next;
//     }
//     this.next=newnode;
//     }
// }
// display(){
//     let temp=this.root;
//     while(temp!=null){
//         console.log(this.temp);
//     }

// }
// }

// let list=new Linkedlist();
// do{
//     data=+prompt("enter the data");
//     if(data>=0)
//     {
//         list.append(data);
//     }
// }while(data>=0);

// list.append(data);


// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null;
//         this.size=0;
//     }
//     prepend(data){
//         let node=new Node(data);
//         if(this.head!=null){
        
//         node.next=this.head;
//         this.head=node;
//         this.size++;
//         }
//         else{
//             this.head=node;
//             this.size++; 
//         }
//     }
//     print(){
//         let curr=this.head;
//         while(curr){
//             console.log(`${curr.data}`);
//             curr=curr.next;
//         }
//     }
// }

// let list=new LinkedList();
// list.prepend(10);
// list.prepend(20);
// list.print();




// class Node {
//   constructor(value) {
//       this.value = value;
//       this.next = null;
//       this.previous = null;
//   }
// }

// class DoublyLinkedList {
//   constructor(value) {
//       this.head = {
//           value: value,
//           next: null,
//           previous: null
//       };
//       this.length = 1;
//       this.tail = this.head;
//   }
//   prepend(value) {
//       let newNode = new Node(value);

//       newNode.next = this.head;
//       this.head.previous = newNode;
//       this.head = newNode;

//       this.length++;
//       this.printList();
//   }
//   printList() {
//     let array = [];
//     let currentList = this.head;
//     while (currentList !== null) {
//         array.push(currentList.value);
//         currentList = currentList.next;
//     }

//     console.log(array.join(' <--> '));
//     return this;
// }}
//   let myDoublyList = new DoublyLinkedList(10);
//   myDoublyList.prepend(1);   
// let n=4;
// let A=1;
// let s='';
// let str="";

// for(let i=0;i<4;i++)
// {
//   for(let j=0;i<8;j++)
//   {
//     if(j<4){
//      str=(A++)+"*";
//     }
//     else{
//       str=(n*n)+(j+1)+"*";
//     }
//     for(let k=str.length;k>0;k--)
//     {
//       console.log(s+Arr[i][j]);
//       s+=" ";
//     }
   
//   }
//   n--;

// }

//coordinates of 2nd rec


// let Ax1=-3;let Ay1=0;
// let Ax2=3;Ay2=4;
// let Area_1=(Ax2-Ax1)*(Ay2-Ay1);
// console.log(Area_1);
// let Bx1=0;let By1=-1;
// let Bx2=9;By2=2;
// let Area_2=(Bx2-Bx1)*(By2-By1);
// console.log(Area_2);
// let overlap;
// let X=Math.min(Ax2,Bx2)-Math.max(Ax1,Bx1);
// let Y=Math.min(Ay2,By2)-Math.max(Ay1,By1);
// if(X>0&&Y>0)
// {
//   console.log(`The area of the given co odinates is ${Area_1+Area_2-(X*Y)}`);
// }




// let A1 = [-3,0];
// let A2 = [3,4];
// let B1=[0,-1];
// let B2=[9,2];
// let x=0,y=1;
// let area1 = (A2[x]-A1[x])*(A2[y]-A1[y]);
// let area2 = (B2[x]-B1[x])*(B2[y]-B1[y]);
// let x_overlap = Math.min(A2[x],B2[x])-Math.max(A1[x],B1[x]);
// let y_overlap = Math.min(A2[y],B2[y])-Math.max(A1[y],B1[y]);

// let TotalArea=0;
// if(x_overlap>0 && y_overlap>0){
//     TotalArea = x_overlap*y_overlap;
// }
// console.log(area1+area2-TotalArea);

let F_name=document.getElementsById('fname').value;
let L_name=document.getElementById('lname').value;
document.getElementById("mybutton").onclick=function(){
  document.write(`Hi your first name is ${F_name} ,your last name is ${L_name}`);
}






  

