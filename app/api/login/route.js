

import bcryptjs from 'bcryptjs';
import connectDB from '@/app/dbConfig/dbConfig';
import {NextResponse} from 'next/server';
import userModel from '@/app/modal/user.model';
import Jwt from "jsonwebtoken";

export const POST = async(request)=>{
    try{
         const {email,password}=await request.json();
         await connectDB()

         const user = await userModel.findOne({email})
         if(!user)return  NextResponse.json({message:"email not found"},{status:401})

         const isPass = await bcryptjs.compare(password,user.password)
         if(!isPass){
            return  NextResponse.json({message:"pasword not correct"},{status:401})
         }

         const token  = await Jwt.sign({id:user._id},process.env.JWT_SEC)

         return NextResponse.json({message:"login successfull..",user:{name:user.name,id:user._id},token},{status:201})
    }catch(error){
        return  NextResponse.json({message:error},{status:500})
    }
}