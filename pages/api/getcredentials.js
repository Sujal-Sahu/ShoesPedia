var jwt=require('jsonwebtoken')
import connectDb from "middleware/mongoose";
import User from "models/User";

const handler=async(req,res)=>{
    // console.log(req.body);
    let {token}=JSON.parse(req.body);
    if(req.method=='POST'){
       let data=jwt.verify((token),process.env.JWT_SECRET);
       let u=await User.findOne({email:data.email});
       const {name,email,phone,address,pincode}=u;

       res.status(200).json({name,email,phone,address,pincode});
    }
    else{
        res.status(400).json({error:"this method is not allowed."})
    }
}

export default connectDb(handler);