const {quoraDb} = require('../util/quoraDB');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
let register = async(req,res) => {
    
    try
    {
    const email = req.body.email;
    const name = req.body.name;
    let passwordstr = req.body.password.toString();
    // const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(passwordstr,10);
    console.log(hashedPassword);
    
    let arr = []
    let arr1 =[];
    // const user = {name : req.body.name ,
    //               password: hashedPassword
    //             };
        
        // console.log(salt);
        // users.push(user);
        quoraDb.query("select user_name,email_id from user",(err,result)=>{
            if(err){
                console.log(err);
                res.status(401).send("Error at fetching");
            }
            else{
                console.log(result);
                let results = Object.values(JSON.parse(JSON.stringify(result)));
                console.log(results);
                results.forEach((key)=>{
                    arr.push(key.user_name);
                    arr1.push(key.email_id)
                })
                console.log(arr);
                console.log(arr1);

                if(arr.includes(name) && arr1.includes(email)){
                    res.send("User Already exsists with this mail id");
                }
                else{
                    
                    quoraDb.query("insert into user(user_name , email_id,password) values (?,?,?)"
                    ,[name,email,hashedPassword], (err,result)=>{
                        if(err){
                            console.log(err);
                            res.status(401).send("Error")
                        }
                        else{
                            console.log("ok");
                            let token = jwt.sign({
                                username : req.body.name },"secretKey"
                            )
                            res.json({
                                message : "TOKEN CREATED",
                                token : token 
                            })
                            quoraDb.query("update user set token = ? where user_name = ? " ,[token ,req.body.name] , (err,result2)=>
                            {
                                if(!err)
                                {
                                    console.log("query ok",result2)
                                    //REDIRECT TO LOGIN
                                }
                                else
                                {
                                    console.log("err in updating token");
                                }
                            })
                            // res.status(201).send("User stored");
                            
                        }
                    
                    })
                }
            }
        })
    }
    catch(e){
        console.log(e);
        res.status(500).send("Something went wrong");
    }
}


module.exports = {register};