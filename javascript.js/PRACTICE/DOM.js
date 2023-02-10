// // DOM -document object model (API)
// //An interface for changing the content of the page
// function greet(name)
// {
//     document.write("Hi "+ name);
// }
// window.greet('ramyaa');
// alert(window.innerWidth);
// alert(location.href); // shows current URL
// if (confirm("Go to Wikipedia?")) {
//   location.href = "https://www.youtube.com/watch?v=k5TC9i5HonI"; // redirect the browser to another URL
// }
document.title = "mypage";
document.body.style.backgroundColor="lightblue";
let element=document.getElementById("mytitle");
element.style.backgroundColor="pink";
let languages=document.getElementsByName("language");
// languages[0].style.backgroundColor="orange";
languages.forEach((ele)=>(ele.style.backgroundColor="lightgreen"));
languages[0].style.background="lightgreen";
//  let jsTopics=document.getElementsByTagName("li");
// console.log(jsTopics[0]);






