import mongoose from "mongoose";
const schema=new mongoose.Schema({
    // task:{type:String},
    // name:{type:String}
    Name:{type:String},
    Address:{type:String},
    Email:{type:String},
    Empid:{type:String},
    Phone:{type:String},
    Designation:{type:String},
    Salary:{type:String},
    Photo:{type:String}
   
})

export default mongoose.model.Tasks||mongoose.model("task",schema)