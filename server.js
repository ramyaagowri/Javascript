const express = require("express");
const app=express();
const bcrypt = require('bcrypt');
const mysql = require("mysql");
const register = require("./routes/register/register");
const login = require ("./routes/login/login");
const {quoraDb} = require('./util/quoraDB.js');
quoraDb.connect((err)=>{
    if(!err){
        console.log("Connected database"); 
    }
    else
    {
        console.log(err);
    }
})
app.use(express.json());
app.use(register);
app.use(login);


app.listen(3000,()=>console.log("listening to port 3000"));


//LOGIN ROUTE

// app.post('/users/login' , async (req,res) => 
// {
//     try{
//     const queryUser = `select user_name,password from user where user_name = ? and password = ? `;
    
//     await quoraDb.query(queryUser, [req.body.name,req.body.password], (err, result)=>
//     {
//         if(err){
//             console.log(err);
//             res.status(401).send("User not matched")
//         }
//         else{
            
//             res.status(201).send("User matched");
//             console.log(result);

//             }
            
//     })
// }
   
// catch(err){
//     res.status(401).send(err);
//     console.log("caught the error");
// }
// })


//REGISTER ROUTE

// app.post('/users/register',async (req,res)=>
// {
//     try
//     {
//     const email = req.body.email;
//     const name = req.body.name;
//     const salt = await bcrypt.genSalt();
//     const hashedPassword = await bcrypt.hash(req.body.password , salt);
//     let arr = []
//     let arr1 =[];
//     // const user = {name : req.body.name ,
//     //               password: hashedPassword
//     //             };
//         console.log(hashedPassword);
//         // console.log(salt);
//         // users.push(user);
//         quoraDb.query("select user_name,email_id from user",(err,result)=>{
//             if(err){
//                 console.log(err);
//                 res.status(401).send("Error at fetching");
//             }
//             else{
//                 console.log(result);
//                 let results = Object.values(JSON.parse(JSON.stringify(result)));
//                 console.log(results);
//                 results.forEach((key)=>{
//                     arr.push(key.user_name);
//                     arr1.push(key.email_id)
//                 })
//                 console.log(arr);
//                 console.log(arr1)

//                 if(arr.includes(name) && arr1.includes(email)){
//                     res.send("User Already exsists with this mail id");
//                 }
//                 else{
//                     quoraDb.query("insert into user(user_name , email_id,password) values (?,?,?)"
//                     ,[name,email,hashedPassword], (err,result)=>{
//                         if(err){
//                             console.log(err);
//                             res.status(401).send("Error")
//                         }
//                         else{
//                             console.log("ok");
//                             res.status(201).send("User stored");
//                         }
//                     })
//                 }
//             }
//         })
//     }
//     catch(e){
//         console.log(e);
//         res.status(500).send("Something went wrong");
//     }

// })



















//     const user = users.find(user => user.name = req.body.name);
//     if(user == null) {return res.status(400).send("Cannot find User");}
//     try
//     {
//         if(await bcrypt.compare(req.body.password , user.password )){
//         res.send("Login success");}
//         else{
//             res.send("Not allowed password not matched");
//         }
//     }
//     catch{
//         res.status(500).send();
        
    // }
