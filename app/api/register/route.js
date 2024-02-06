
import bcryptjs from 'bcryptjs';
import connectDB from '@/app/dbConfig/dbConfig';
import {NextResponse} from 'next/server';
import userModel from '@/app/modal/user.model';


export const POST = async(request)=>{
    try{
         const {email,name,password}=await request.json();
         await connectDB()

         const hashedPass = await bcryptjs.hash(password,10)
         const newUser = new userModel({
            name,email,password:hashedPass
         })
         await newUser.save()

         return NextResponse.json({message:"registration successfull.."},{status:201})
    }catch(error){
        return  NextResponse.json({message:error},{status:500})
    }
}