import Menu from '@/components/Navigation/Menu'
import ProtectedRoute from '@/components/ProtectedRoute'
import { DropdownMenu,DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../../../components/ui/dropdown-menu"
import { Funnel } from 'lucide-react'
import UserCard from '@/components/UserCard'
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'

const Analytics = () => {
  return (
    <ProtectedRoute>
      <Menu/>
      <div className='flex flex-col items-center justify-center p-2 min-h-screen gap-8'>
        <div className='flex flex-col sm:flex-row items-center justify-between w-full max-w-2xl'>
            <h1 className='font-bold text-white text-3xl mb-2 sm:mb-0'>Analytics</h1>
            <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-0">
                    <div className="bg-[#0D0D0D] rounded-md border-gray-600 border-1 p-2 flex items-center justify-between cursor-pointer">
                        <Funnel size={16} color="#99a1af "/>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#1C1C1C] text-white border-none">
                    <DropdownMenuItem className='cursor-pointer'>Day</DropdownMenuItem>
                    <DropdownMenuItem className='cursor-pointer'>Week</DropdownMenuItem>
                    <DropdownMenuItem className='cursor-pointer'>Month</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div className='w-full flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-4 mt-6 max-w-2xl'>
             <UserCard
              name='Rajpreet'
              shortcut='R'
              time='10h 45m'/>
             <UserCard
              name='Daria'
              shortcut='D'
              time='15h 30m'/>
        </div>
        <div className='w-full mt-6 max-w-2xl overflow-x-auto'>
          <Table className='text-white min-w-[300px]'>
            <TableHeader>
              <TableRow className='bg-neutral-900 hover:bg-neutral-900'>
                <TableHead className="text-gray-400">Person</TableHead>
                <TableHead className=" text-gray-400">Date</TableHead>
                <TableHead className=" text-gray-400">Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='bg-neutral-950 '>
              <TableRow>
                <TableCell className="text-white">Daria</TableCell>
                <TableCell className='text-gray-400'>04/07/2025</TableCell>
                <TableCell className='text-white'>5h 30min</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-white">Raj</TableCell>
                <TableCell className='text-gray-400'>04/07/2025</TableCell>
                <TableCell className='text-white'>6h 30min</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default Analytics



/*
    COLORS:

    BLACK: #00000
           #222222
    MINT:  #1DCD9F
           #169976

*/