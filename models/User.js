const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        default:'',
        required:true
    },
    city:{
        type:String,
        default:'',
        required:true
    },
    state:{
        type:String,
        default:'',
        required:true
    },
    country:{
        type:String,
        default:'',
        required:true
    },
    pincode:{
        type:String,
        default:'',
        required:true
    },
    phone:{
        type:String,
        default:'',
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

mongoose.models={}
export default mongoose.model("User",UserSchema);