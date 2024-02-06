import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
        title:String,
        description:String,
        status:String,
        
        deadline:String,
        // userId:{
        //     type:mongoose.Schema.Types.ObjectId,
        //     ref:"User"
        // }
})

const Form = mongoose.models.forms || mongoose.model("forms",formSchema)

export default Form;