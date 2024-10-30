import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:[true,"user name is required"]
  },
  email:{
    type:String,
    unique:true,
    required:[true,'email is required']
  },
  password:{
    type:String,
    required:[true,'password is required']
  }
},{timestamps:true});

const User = mongoose.models.User || mongoose.model("User",userSchema);
export default User; 