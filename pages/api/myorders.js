import Order from "models/Order";
import connectDb from "middleware/mongoose";
var jwt = require('jsonwebtoken');

const handler=async(req,res)=>{
    if(req.method=='POST'){
       let data=jwt.verify(JSON.parse(req.body.token),process.env.JWT_SECRET);
       let orders=await Order.find({email:data.email});
       res.status(200).json(orders);
    }
    else{
        res.status(400).json({error:"this method is not allowed."})
    }
}

export default connectDb(handler);