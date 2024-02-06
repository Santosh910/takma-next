import {NextResponse} from 'next/server';
import userModel from '@/app/modal/user.model';

export const GET = async(request)=>{
    try{
         const user = await userModel.find({})
         if(user.length){
            return NextResponse.json({message:"users found",user:user},{status:200})
         }
         return  NextResponse.json({message:"user not found"},{status:401})
    }catch(error){
        return NextResponse.json({message:error},{status:500})
    }
}