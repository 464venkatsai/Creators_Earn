"use server"
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    // All user fields
    userId:{type:String,unique:true},
    name: String,
    email: {type:String,unique:true},
    password:String,
    tagLine:String,
    profileImage:String,
    coverImage:String,
});
const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;