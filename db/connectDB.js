import mongoose from "mongoose";


const connectDB = async ()=>{
    // Establishing Database
    try{
        await mongoose.connect("mongodb://localhost:27017/CreatorsEarn")
        console.log("Connect to Mongo DataBase");
    }catch(error){
        console.error(error);
    }
}
export default connectDB;