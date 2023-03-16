const jwt = require('jsonwebtoken');

let tokencheck = (req,res,next)=>{
    console.log("inside tokencheck")
    // const authHeader = req.header["authorization"];
    // const token = authHeader && authHeader.split(' ')[1];
    let token= req.body.token;
    if(token == null ) return res.sendStatus(400);
    
    let decode=jwt.verify(token,"secretKey")
  
    if (decode){
       
        req.body.user = decode.username;
       
        next();
    }
 
    else{
        
        return res.sendStatus(403).send("Token not found");
    }
    // (err,user)=>
    // {

    //     if(err) 
    //     return res.sendStatus(403).send("Token not found");

    //     req.body.user = user;
    //     console.log(req)
    //     next();
    // })

}

module.exports = {tokencheck};

