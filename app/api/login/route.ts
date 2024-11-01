import { connectDb } from "@/utils/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface IBody{
  email:string;
  password:string;
}

export async function POST(req: NextRequest) {
  try {
    await connectDb();
    const body:IBody = await req.json();
    const {email,password} = body;
    const user = await User.findOne({email});
    if(!user){
      return NextResponse.json({
        message:"user not found"
      },{status:404})
    }
    const comparedPassword = await bcrypt.compare(password,user?.password);
    if(!comparedPassword){
      return NextResponse.json({
        message:"Invalid password"
      },{status:500})
    }
    const token = jwt.sign({userId:user?._id},process.env.NEXTAUTH_SECRET as string,{
      expiresIn:process.env.JWT_EXPIRES_AT
    })
    return NextResponse.json({
      user,
      token
    });
  } catch (error: unknown) {
    console.log(error);
    NextResponse.json(
      {
        message: "something went wrong",
      },
      { status: 500 }
    );
  }
}
