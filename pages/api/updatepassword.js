var jwt=require('jsonwebtoken')
import connectDb from "middleware/mongoose";
import User from "models/User";
var CryptoJS = require("crypto-js");

const handler=async(req,res)=>{
    if(req.method=='POST'){ 
        let d=JSON.parse(req.body);
        console.log(d)
       let data=jwt.verify((d.token),process.env.JWT_SECRET);
       let m=await User.findOne({email:data.email})
       if(m){
        var bytes  = CryptoJS.AES.decrypt(m.password, process.env.AES_SECRET);
        var originalPass = bytes.toString(CryptoJS.enc.Utf8);
        if(d.password===originalPass){
        if(d.npass===d.cpass){
            await User.findOneAndUpdate({email:data.email},{password:CryptoJS.AES.encrypt(d.npass,process.env.AES_SECRET ).toString()})
            res.status(200).json({success:true,message:"Password Successfully updated."})
        }
        else{
            res.status(400).json({success:false,message:"Please Enter the same passowrd in new and confirm password."})
        }
        }
        else{
          res.status(400).json({success:false,message:"Invalid Password!!"});
        }
      }
    }
    else{
        res.status(400).json({error:"this method is not allowed."})
    }
}

export default connectDb(handler);