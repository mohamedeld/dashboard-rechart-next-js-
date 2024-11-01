import Image from "next/image";
import Header from "./_components/Header";
import Aside from "./_components/Aside";
import { getSession } from "next-auth/react";
import { getUserSession } from "@/utils/getSessionUser";
import Card from "./_components/Card";
import { CiMenuKebab } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import CustomLineChart from "./_components/charts/CustomLineChart";
import CustomPieChart from "./_components/charts/CustomPieChart";

async function Home() {
  return (
      <div className="grid grid-cols-[auto_1fr] min-h-screen bg-[#f8f4f0]">
        <Aside/>
      <div>
        <Header/>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-screen">
         
          <Card title={"Map Review"} deleteIcon={<MdDelete />
        } editIcon={<CiMenuKebab />
        }>
          <CustomPieChart/>
        </Card>
        <Card title={"Browsers by State"} deleteIcon={<MdDelete />
        } editIcon={<CiMenuKebab />
        }>
          <CustomLineChart/>
        </Card>
          <Card title={"Details"} deleteIcon={<MdDelete />
        } editIcon={<CiMenuKebab />
        }>third</Card>
          <Card title={"New Request Trend"} deleteIcon={<MdDelete />
        } editIcon={<CiMenuKebab />
        }>fourth</Card>
        </div>
      </div>
      </div>
  );
}

export default Home;