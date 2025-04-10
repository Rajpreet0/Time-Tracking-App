"use client";
import { ArrowDown } from "lucide-react"
import { DropdownMenu,DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { useEffect, useState } from "react";

interface User {
    id: number;
    name: string;
    email: string;
}

interface SelectedPersonCardProps {
    onSelect: (user: User) => void
}


const SelectPersonCard: React.FC<SelectedPersonCardProps> = ({onSelect}) => {

    const [users, setUsers] = useState<User[]>([])
    const [selectedUser, setSelectedUser] = useState<User | null>(null)

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch('/api/users')
            const data = await res.json()
            setUsers(data)
        }
        fetchUsers()
    }, [])


    const handleSelect = (user: User) => {
        setSelectedUser(user)
        onSelect(user)
    }

  return (
    <div className="w-full bg-[#1C1C1C] p-4 rounded-md">
        <p className="text-gray-300">Select Person</p>
        <div className="w-full p-4">    
            <DropdownMenu>
                <DropdownMenuTrigger className="w-full focus:outline-0">
                    <div className="bg-[#0D0D0D] rounded-md border-gray-600 border-1 p-2 flex items-center justify-between">
                        <p className="text-gray-400 text-sm ml-2">{selectedUser ? selectedUser.name : 'Choose a Person...'}</p>
                        <ArrowDown className="mr-2" color="#99a1af "/>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#0D0D0D] text-white border-none w-[450px]">
                        {users.map((user) => (
                            <DropdownMenuItem
                                key={user.id}
                                onClick={() => handleSelect(user)}
                                className="cursor-pointer"
                            >
                                {user.name}
                            </DropdownMenuItem>
                        ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        {selectedUser && (
            <div className="flex items-center gap-2 p-4">
                    <Avatar>
                        <AvatarFallback className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></AvatarFallback>
                    </Avatar>
                    <p className="text-white">{selectedUser?.name}</p>
            </div>
         )}
    </div>
  )
}

export default SelectPersonCard