const mongoose=require('mongoose');

const OrderSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    orderId:{
        type:String,
        required:true
    },
    PaymentInfo:{
        type:String,
        default:''
        
    },
    transactionID:{
        type:String,
        default:''
    },
    products:{
        type:'Object',
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    PinCode:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        default:'Intiated',
        required:true
    },
    deliveryStatus:{
        type:String,
        default:'unshipped',
        required:true
    }
},{timestamps:true})

mongoose.models={}
export default mongoose.model("Order",OrderSchema);