import mongoose, { mongo } from "mongoose";
import { connectionStr } from "@/app/lib/DB";
import { userSchema } from "@/app/lib/Userschema";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr,{useNewUrlParser:true})
    const result = await userSchema.find()
    console.log(result);
    return NextResponse.json({success:true})
}
export async function POST(request){
    const payload = await request.json()
    
    await mongoose.connect(connectionStr,{useNewUrlParser:true})
    let result;
    let success = false;
    if(payload.login){

result = await userSchema.findOne({email:payload.email,password:payload.password})
if(result){
    success =true
}

    }
    else{
        const response = new userSchema(payload)
         result =  await response.save();
         if(result){
            success = true
         }
    }
  
    return NextResponse.json({result:result,success:success})
}