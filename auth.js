const jwt = require("jsonwebtoken")
const SECRET_KEY = "NOTESAPI"



const auth =(req,res,next)=>{
  
    try {

         let token  = req.headers.authorization 
         console.log(token+ "me")
         if(token){
               
               token = token.split(" ")[1];
               let user = jwt.verify(token,SECRET_KEY)
               req.userId = user.id
               console.log(user.id);
               
         }
         else{
           return  res.status(401).json({
                message:"unotherized user"
            })
         }

         next();
    } catch (err) {
        console.log(err);
    }
}


module.exports = auth;