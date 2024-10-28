"use client";
import { MdDashboard } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BiLogoTelegram } from "react-icons/bi";
import { FaClock } from "react-icons/fa";
import { SlEarphonesAlt } from "react-icons/sl";
import { IoIosSettings } from "react-icons/io";
import { usePathname } from "next/navigation";


const links = [
  {
    icon:<MdDashboard/>,
    path:'/'
  },
  {
    icon:<MdEmail/>,
    path:'/email'
  },
  {
    icon:<BiLogoTelegram/>,
    path:'/message'
  },
  {
    icon:<FaClock/>,
    path:'/clock'
  },
  {
    icon:<SlEarphonesAlt/>,
    path:'/earphone'
  },
  {
    icon:<IoIosSettings/>,
    path:'/settings'
  }
]

const VerticalIcon = () => {
    const pathName = usePathname();
  return (
    <ul className="flex flex-col gap-4">
      {
        links?.map(item=>{
          const isActive = pathName === item?.path;
          return (
            <li className={`w-[40px] h-[40px] rounded-full text-1xl transition-colors duration-300 flex justify-center items-center ${isActive ? 'bg-black text-white' : 'bg-white text-black'}`} key={item?.path}>{item?.icon}</li>
          )
        })
      }
    </ul>
  )
}

export default VerticalIcon