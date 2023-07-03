import User from "models/User";
import connectDb from "middleware/mongoose";
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');

const handler=async(req,res)=>{
    if(req.method=='POST'){
      let {name,email,password,phone,address,city,state,country,pincode}=JSON.parse(req.body);
      console.log(name,email,password,phone,address,city,state,country,pincode);
      let m=await User.findOne({email:email});
      if(m){
        res.status(400).json({success:false,message:"A User with same id already exists."})
      }
      else{
        var encryptedpass = CryptoJS.AES.encrypt(password,process.env.AES_SECRET ).toString();
        console.log(encryptedpass);
      let u=new User({name,email,password:encryptedpass,phone,address,city,state,country,pincode});
      await u.save();
      var token = jwt.sign({name:name,email:email,phone:phone,address:address,city:city,state:state,country:country,pincode:pincode}, process.env.JWT_SECRET,{expiresIn:"2d"});
     res.status(200).json({success:"success",authToken:token});
      }
    }
    else{
        res.status(400).json({error:"this method is not allowed."})
    }
}

export default connectDb(handler);