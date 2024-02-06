import User from "@/app/modal/user.model";
import Jwt from "jsonwebtoken";

export const POST = async(request)=>{
    try{
        const {token} = await request.json();
        if(!token)return NextResponse.json({message:"token not found"},{status:401})

        const {id} = await Jwt.verify(token,process.env.JWT_SEC)

        const user = await User.findById(id);
        if(!user)return NextResponse.json({message:"id not found",user:{name:user.name,id:user._id}},{status:401})
    }catch(error){
        return NextResponse.json({message:error},{status:500})
    }
}