"use server"
import mongoose from "mongoose"

const PaymentSchema = new mongoose.Schema({
    orderId : {type: String, required: true},
    name : {type: String, required: true},
    fromUser : {type: String, required: true},
    toUser : {type: String, required: true},
    amount : {type: Number, required: true},
    message : {type: String},
    done : {type: Boolean, default: false},
    createdAt : {type: Date, default: Date.now},
    updatedAt : {type: Date, default: Date.now}
})

const Payment = mongoose.models.Payment || mongoose.model("Payment",PaymentSchema);
export default Payment; 