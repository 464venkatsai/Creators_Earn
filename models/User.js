"use server"
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    // All user fields
    userId:{type:String,unique:true},
    name: String,
    email: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;