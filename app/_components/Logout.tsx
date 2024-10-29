import Image from 'next/image'
import { IoLogOut } from "react-icons/io5";

const Logout = () => {
  return (
    <div className='flex flex-col mb-2'>
      <div>
        <Image src="" width={30} height={30} alt="user profile image" quality={85} className='object-cover rounded-full'/>
      </div>
      <IoLogOut/>
    </div>
  )
}

export default Logout