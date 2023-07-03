import Product from "models/Product";
import connectDb from "middleware/mongoose";

const handler=async(req, res)=>{
    console.log(req.body);
    let products=await Product.find({ category:req.body.category, color: { $in: (req.body.colors)},size:{$in : (req.body.sizes)}}).exec();
    res.status(200).json({products});
}

export default connectDb(handler);