import mongoose from "mongoose";


let userSchema = mongoose.Schema({
  fullname : {
    type : String,
  },
  email : {
    type : String,
    unique : true,
    require : true
  },
  password : {
    type : String,
    require : true
  },
  isVerified :{
    type : Boolean,
    default : false
  },
  verificationCode : String,
},{timestamps:true})

let userModel = mongoose.model('user',userSchema);

export default userModel