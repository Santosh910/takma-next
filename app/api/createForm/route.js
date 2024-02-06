import Form from '@/app/modal/form.model';
import {NextResponse} from 'next/server';

export const POST = async(request)=>{
    try{
        const {title,description,status,deadline} = await request.json();
            if(!title || !description || !status || !deadline )return NextResponse.json({message:"all fields mandotory"},{status:400})

            const form = new Form({
                title,description,status,deadline
            })
            await form.save()
            
            return NextResponse.json({message:"form created successfully"},{status:201})
    }catch(error){
        return NextResponse.json({message:error},{status:500})
    }
}