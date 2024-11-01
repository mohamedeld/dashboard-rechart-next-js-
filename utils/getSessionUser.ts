import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"


export const getUserSession = async ()=>{
    const session = await getServerSession(authOptions)
    if(!session || !session?.user){
      return null
    }
    return {
      user:session?.user,
    }
}