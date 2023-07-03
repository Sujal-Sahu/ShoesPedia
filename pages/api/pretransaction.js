const https = require('https');
const PaytmChecksum = require('paytmchecksum');
import Order from "models/Order";
import connectDb from "middleware/mongoose";
import Product from "models/Product";
import pincodes from '../../pincodes.json'

const handler=async(req,res)=>{
    if(req.method=='POST'){
        if(!Object.keys(pincodes).includes(req.body.zip)){
            res.status(200).json({success:false,error:"Sorry, This pincode is not servicable!! Please try with another pincode...",cartClear:false})
            return;
        }
        //validate body data coming from checkout page is pending
        let product,sumTotal=0;
        let cart=req.body.cart;
        if(req.body.subtotal===0){
            res.status(200).json({success:false,error:"Sorry, your cart is empty!! Please built your cart first...",cartClear:false})
            return;
        }
        for(let item in cart){
            // console.log(item);
            sumTotal+=cart[item].price*cart[item].qty,
            product=await Product.findOne({_id:item});
            // console.log(product);
            if(product.availableQty<cart[item].qty){
                res.status(200).json({success:false,error:"Sorry, but items are out of stock. Will inform u whenever this item is available.",cartClear:true})
                return;
            }
            if(product.price!=cart[item].price){
                res.status(200).json({success:false,error:"Sorry, but some items of cart have been tampered. Please try again...",cartClear:true})
                return;
            }
        }
        if(sumTotal!=req.body.subtotal){
            res.status(200).json({success:false,error:"Sorry, but some items of cart have been tampered. Please try again...",cartClear:true})
            return;
        }
        if(req.body.phone.length !== 10 || !Number.isInteger(Number(req.body.phone))){
            res.status(200).json({success:false,error:"Sorry, Please Enter a valid Phone Number. Please try again...",cartClear:false})
            return;
        }
        if(req.body.zip.length !== 6 || !Number.isInteger(Number(req.body.zip))){
            res.status(200).json({success:false,error:"Sorry, Please Enter a valid Pin Code. Please try again...",cartClear:false})
            return;
        }
        let o=new Order({
            email:req.body.email,
            orderId:req.body.oid,
            products:req.body.cart,
            address:req.body.address,
            city:req.body.city,
            state:req.body.state,
            PinCode:req.body.zip,
            phone:req.body.phone,
            amount:req.body.subtotal
        });
        await o.save();
    var paytmParams = {};

paytmParams.body = {
    "requestType"   : "Payment",
    "mid"           : process.env.NEXT_PUBLIC_PAYTM_MID,
    "websiteName"   : "YOUR_WEBSITE_NAME",
    "orderId"       : req.body.oid,
    "callbackUrl"   : `${process.env.NEXT_PUBLIC_HOST}/api/posttransaction`,
    "txnAmount"     : {
        "value"     : req.body.subtotal,
        "currency"  : "INR",
    },
    "userInfo"      : {
        "custId"    : req.body.email,
    },
};
const checksum=await PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), process.env.PAYTM_MKEY);

    paytmParams.head = {
        "signature"    : checksum
    };

    var post_data = JSON.stringify(paytmParams);

    const requestAsync=()=>{
        return new Promise((request,reject)=>{
            var options = {

                /* for Production */
                hostname: `${process.env.NEXT_PUBLIC_PAYTM_HOST}`,
        
                port: 443,
                path: `/theia/api/v1/initiateTransaction?mid=${process.env.NEXT_PUBLIC_PAYTM_MID}&orderId=${req.body.oid}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length
                }
            };
        
            var response = "";
            var post_req = https.request(options, function(post_res) {
                post_res.on('data', function (chunk) {
                    response += chunk;
                });
                post_res.on('end', function(){
                    // console.log('Response: ', response);
                    response.success=true;
                    response.cartClear=false;
                    resolve(JSON.parse(response).body);
                });
            });
        
            post_req.write(post_data);
            post_req.end();
        })
    }
    
    let myr=await requestAsync();
    res.status(200).json(myr);
   

    }

}
  
export default connectDb(handler);