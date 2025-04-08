import { Avatar, AvatarFallback } from "./ui/avatar";

interface UserCardProps {
    name: string;
    time: string;
    shortcut: string;
}

const UserCard: React.FC<UserCardProps> = ({name, time, shortcut}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 bg-[#1C1C1C] w-[200px] rounded-lg">
        <Avatar className="w-[50px] h-[50px]">
            <AvatarFallback className="bg-gradient-to-r from-gray-500 via-zinc-500 to-neutral-500 text-gray-700">{shortcut}</AvatarFallback>
        </Avatar>
        <div>
            <h2 className="text-white font-semibold text-xl">{name}</h2>
        </div>
        <div>
            <p className="text-white font-semibold text-2xl">{time}</p>
        </div>
    </div>
  )
}

export default UserCard