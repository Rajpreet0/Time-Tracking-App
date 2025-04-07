import { ArrowDown } from "lucide-react"
import { DropdownMenu,DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu"
import { Avatar, AvatarFallback } from "./ui/avatar"

const SelectPersonCard = () => {
  return (
    <div className="w-full bg-[#1C1C1C] p-4 rounded-md">
        <p className="text-gray-300">Select Person</p>
        <div className="w-full p-4">    
            <DropdownMenu>
                <DropdownMenuTrigger className="w-full focus:outline-0">
                    <div className="bg-[#0D0D0D] rounded-md border-gray-600 border-1 p-2 flex items-center justify-between">
                        <p className="text-gray-400 text-sm ml-2">Choose a Person...</p>
                        <ArrowDown className="mr-2" color="#99a1af "/>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#0D0D0D] text-white border-none w-[450px]">
                    <DropdownMenuItem>Rajpreet</DropdownMenuItem>
                    <DropdownMenuItem>Daria</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div className="flex items-center gap-2 p-4">
            <Avatar>
                <AvatarFallback className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></AvatarFallback>
            </Avatar>
            <p className="text-white">Rajpreet</p>
        </div>
    </div>
  )
}

export default SelectPersonCard