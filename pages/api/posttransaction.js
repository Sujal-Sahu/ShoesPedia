import Order from "models/Order";
import connectDb from "middleware/mongoose";
import Product from "models/Product";
import PaytmChecksum from "paytmchecksum";
const handler=async(req,res)=>{
    //validate checksum 
    var paytmChecksum = "";
    var paytmParams={};
    const receiveddata=req.body;
    for(var key in receiveddata){
      if(key==="CHECKSUMHASH"){
          paytmChecksum=receiveddata[key];
      }
      else{
        paytmParams[key]=receiveddata[key];
      }
    }
    var isVerifySignature = PaytmChecksum.verifySignature(paytmParams, process.env.PAYTM_MKEY, paytmChecksum);
    if (!isVerifySignature) {
      console.log("Checksum Mismatched");
      res.status(500).json({"error" : "Some error Occured."});
      return;
    } 
    //update orders status
    let order;
    if(req.body.STATUS=='TXN_SUCCESS'){
      // order=await Order.find({orderId:req.body.ORDERID}),
      order=await Order.findOneAndUpdate({orderId:req.body.ORDERID},{status:'Paid',paymentInfo:JSON.stringify(req.body),transactionID:req.body.TXNID});
      let products=order.products;
      for(let item in products){
         await Product.findOneAndUpdate({_id:item},{$inc : {"availableQty": -products[item].qty}});
      }
    }
    else if(req.body.STATUS=='PENDING'){
      order=await Order.findOneAndUpdate({orderId:req.body.ORDERID},{status:'Pending',paymentInfo:JSON.stringify(req.body),transactionID:req.body.TXNID});
    }
    console.log(order._id);
    res.json({success:true});
    // res.redirect(`/order?id=`+order._id+'&Clearcart=1',200);
}
  
export default connectDb(handler);