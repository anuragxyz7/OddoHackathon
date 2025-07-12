import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    role:{type:String, default:"user"},
    skillOffered:{type:[String], default:[]},
    skillNeeded:{type:[String], default:[]},
    profilePicture:{type:String, default:""},
    rating:{type:Number, default:0},
    reviews:{type:[String], default:[]},
    availability:{type:string, default:""},
    location:{type:String, default:""},
    profile:{type:Boolean, default:false},
})

const User = mongoose.model("User", userSchema);
export default User;