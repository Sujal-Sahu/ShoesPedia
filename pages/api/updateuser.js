var jwt=require('jsonwebtoken')
import connectDb from "middleware/mongoose";
import User from "models/User";

const handler=async(req,res)=>{
    console.log(req.body);
    let d=JSON.parse(req.body);
    console.log(d)
    if(req.method=='POST'){ 
       let data=jwt.verify((d.token),process.env.JWT_SECRET);
       let dbuser=await User.findOneAndUpdate({email:data.email},{name:d.name,address:d.address,phone:d.phone,pincode:d.pincode})
       res.status(200).json({success:true});
    }
    else{
        res.status(400).json({error:"this method is not allowed."})
    }
}

export default connectDb(handler);