import Image from "next/image"
import Logo from '@/public/logo.png'
import MenuItem from "./MenuItem"

const Menu = () => {
  return (
    <div className="p-2 bg-[#1C1C1C] w-fit rounded-tr-lg rounded-br-lg border-gray-400 border-r-2 border-t-2 border-b-2 mt-[40vh] absolute">
        <div className="w-full h-full  flex flex-col"> 
            <div className="flex gap-4">
                <Image src={Logo} alt="Logo" width={20} height={20}/>
                <h1 className="text-white font-bold">Time Tracking</h1>
            </div>
            <div className="mt-2">
                <MenuItem menuTitle="Analytics" link="/dashboard/analytics"/>
                <MenuItem menuTitle="Dashboard" link="/dashboard/timeTracking"/>
            </div>
        </div>
    </div>
  )
}

export default Menu