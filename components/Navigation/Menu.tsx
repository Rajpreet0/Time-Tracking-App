import Image from "next/image"
import Logo from '@/public/logo.png'
import MenuItem from "./MenuItem"

const Menu = () => {
  return (
    <div className="p-2 bg-[#222222] w-fit rounded-lg border-gray-400 border-2">
        <div className="w-full h-full flex flex-col"> 
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