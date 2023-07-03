var jwt=require('jsonwebtoken')
import connectDb from "middleware/mongoose";
import Forgot from "models/Forgot";
import User from "models/User";

const handler=async(req,res)=>{
    if(req.body.sendEmail){ 
        // let u=await User.findOne({email:req.body.email});
        let token='12333332222';
        let newuser=new Forgot({
            email:req.body.email,
            token:token
        })
       let email=`
       Hi Sir,
       
       There was a request to change your password!
       
       If you did not make this request then please ignore this email.
       
       Otherwise, please click this link to change your password: ${process.env.NEXT_PUBLIC_HOST}/forgotpassword?token=${token}`
      
    }
    else{
        // Reset user password
    }
    res.status(200).json({success:true});
}

export default connectDb(handler);