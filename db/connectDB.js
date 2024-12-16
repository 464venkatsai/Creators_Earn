import mongoose from "mongoose";


const connectDB = async ()=>{
    // Establishing Database
    try{
        await mongoose.connect("mongodb+srv://Venkatsai:venkatsai@creatersearn.gu6h6.mongodb.net/creatorsEarn")
        console.log("Connect to Mongo DataBase");
    }catch(error){
        console.error(error);
    }
}
export default connectDB;