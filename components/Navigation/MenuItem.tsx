"use client";
import { useRouter } from "next/navigation";

interface MenuItemProps {
    menuTitle: string;
    link: string;
}

const MenuItem: React.FC<MenuItemProps> = ({menuTitle, link}) => {

    const router = useRouter();

  return (
    <div className="mt-3 mb-2 p-1 flex gap-4 rounded-sm hover:bg-[#ffffff1c] transition-all">
        <p 
            onClick={() => router.push(link)}
            className="text-white cursor-pointer">{menuTitle}</p>
    </div>
  )
}

export default MenuItem