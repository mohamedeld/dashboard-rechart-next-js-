import { HiMenuAlt2 } from "react-icons/hi";
import VerticalIcon from "./VerticalIcon";
import Logout from "./Logout";




const Aside = () => {
  return (
    <div className="py-3 px-4 flex flex-col justify-between items-center">
      <div>      
        <HiMenuAlt2 className="text-5xl mt-3 mb-16 "/>
        <VerticalIcon/>
      </div>
      <div>
        <Logout/>
      </div>
    </div>
  )
}

export default Aside