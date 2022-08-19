const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "NOTESAPI"


const singup = async (req,res)=>{
      
     
   

       try{
                const {username,password,email} = req.body;
                console.log(username)
                const userExist = await userModel.findOne({
                      email:email
                });

                if(userExist){
                  return res.status(400).json({message: "user exist"})
                }

                const hashPassword = await bcrypt.hash(password,10)

                const result  = userModel.create({
                      email:email,
                      password:hashPassword,
                      username: username
                })
                // after this mongo generate _id in result._id

                const token = jwt.sign({
                      email: result.email,
                      id : (await result)._id 
                },SECRET_KEY);
               
                 res.status(201).json({
                    user: result,
                    token : token,
                });

       }catch(err){
      
               
                res.status(500).json({
                  message: "somthing went wrong",
                });
      }     
   }




  const singin = async  (req,res)=>{

    try{ 
            const {username,password,email} = req.body;
            

            const userExist = await userModel.findOne({
                  email:email
            });

            console.log(userExist);

            if(!userExist){
              return res.status(404).json({message: "user Not found"})
            }

            const matchPass  = await bcrypt.compare(password,userExist.password);

            if(!matchPass){
              return res.status(400).json({
                message:" password wrong"
              })
            }
              const token = jwt.sign({
                   email: userExist.email,
                   id : userExist._id 
              },SECRET_KEY);
            
              return res.status(201).json({
                user: userExist,
                token : token,
            });
           
            
    }
    catch(err){
                 

      res.status(500).json({
        message: "somthing went wrong",
      });


    }

}




module.exports = {singup,singin};


