import Image from "next/image";
import Header from "./_components/Header";
import Aside from "./_components/Aside";
import { getSession } from "next-auth/react";
import { getUserSession } from "@/utils/getSessionUser";
import Card from "./_components/Card";
import { CiMenuKebab } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

async function Home() {
  return (
      <div>
      <Header/>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-screen">
        <Card title={"Browsers by State"} deleteIcon={<MdDelete />
} editIcon={<CiMenuKebab />
}>first</Card>
        <Card title={"Map Review"} deleteIcon={<MdDelete />
} editIcon={<CiMenuKebab />
}>second</Card>
        <Card title={"Details"} deleteIcon={<MdDelete />
} editIcon={<CiMenuKebab />
}>third</Card>
        <Card title={"New Request Trend"} deleteIcon={<MdDelete />
} editIcon={<CiMenuKebab />
}>fourth</Card>
      </div>
      </div>
  );
}

export default Home;