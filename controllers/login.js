const {quoraDb} = require("../util/quoraDB");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { x } = require("joi");
// const {tokencheck} = require("../middleware/jwtAuthorization");
let login = (req,res) => 
{   
    try{
        let token= req.body.token;
        if(token == null ) return res.sendStatus(400);
        
        let decode=jwt.verify(token,"secretKey")
        console.log(decode.username);
        const queryUser = `select user_name from user where user_name = ?`;
        
        quoraDb.query(queryUser, [req.body.name],  (err, result)=>
        {
            if(err){
                console.log(err);
                res.status(401).send("User not matched")
            }
            else if(result.length > 0 && decode.username==req.body.name){
                // console.log("ok");
                console.log("user Matched");
                res.status(200).send("User matched");
                quoraDb.query('select password from user where user_name = ?', [req.body.name], async (err,result1)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                    console.log(result1[0].password);
                    if(await bcrypt.compare(req.body.password, result1[0].password)){
                        console.log("ok");
                        // let token = jwt.sign({
                        //     username : req.body.name },"secretKey"
                        // )
                        // console.log(token);
                        // quoraDb.query("update user set token = ? where user_name = ? " ,[token ,req.body.name] , (err,result2)=>
                        // {
                        //     if(!err)
                        //     {
                        //         console.log("query ok",result2)
                        //     }
                        //     else
                        //     {
                        //         console.log("err in updating token");
                        //     }
                        // })
                    }
                    else{
                        console.log("NOOOOOOOOOOOOO");
                        res.status(403).send("Incorrect Password")
                    }
                    }
                })
               }
            else{
                console.log("user not found");
                res.status(403).send("user not found")
            }
        })
        
    }
       
    catch(err){
        res.status(401).send(err);
        console.log("caught the error");
    }
   
}
// function authenticatetoken(req,res,next)
// {
//     const authHeader = req.header["authorization"];
//     const token = authHeader && authHeader.split(' ')[1];
//     if(token == null ) return res.sendStatus(401);
//     jwt.verify(token,"secretKey",(err,user)=>
//     {
//         if(err) return res.sendStatus(403);
//         req.user = user;
//         next();
//     })
// }
module.exports = {login};