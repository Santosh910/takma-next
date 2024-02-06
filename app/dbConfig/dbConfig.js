import mongoose from 'mongoose';

const connectDB =async()=>{
    try{
        await mongoose.connect(process.env.MONGOURI)
        console.log("database conected")
    }catch(error){
        console.log("something went wrong",error)
    }
}

export default connectDB;