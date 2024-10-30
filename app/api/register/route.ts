import { connectDb } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/User";
import jwt from "jsonwebtoken";
interface IBody{
  username:string;
  email:string;
  password:string;
}

export async function POST(req:NextRequest){
  
    try{
      await connectDb();
      const body:IBody = await req.json();
      const {username, email,password} = body;
      if(!username || !email || !password){
        return NextResponse.json({
          message:"please fill all fields"
        })
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = await User.findOne({ email });

      if (user) {
        return NextResponse.json({
          message: "email already exists",
        });
      }

      const newUser = await User.create({
        username,
        email,
        password:hashedPassword
      });
      const token = jwt.sign({userId:newUser?._id},process.env.JWT_SECRET as string,{
        expiresIn:process.env.JWT_EXPIRES_AT
      })  
      return NextResponse.json({
        message:"user registered successfully",
        data:{
          newUser,
          token
        }
      })
    }catch(error){
      console.log(error);
    }
  
}