'use client'

import Menu from '@/components/Navigation/Menu'
import ProtectedRoute from '@/components/ProtectedRoute'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Funnel } from 'lucide-react'
import UserCard from '@/components/UserCard'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { useEffect, useState } from 'react'
import CustomTooltip from '@/components/CustomTooltip'

interface Entry {
  user: string
  date: string
  duration: number
}

const Analytics = () => {
  const [entries, setEntries] = useState<Entry[]>([])
  const [totals, setTotals] = useState<Record<string, number>>({})
  const [filter, setFilter] = useState<'day' | 'week' | 'month'>('week')

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/analytics?filter=${filter}`)
      const data = await res.json()
      setEntries(data.entries)
      setTotals(data.weeklyTotals)
    }
    fetchData()
  }, [filter])

  const formatDuration = (mins: number) => {
    const h = Math.floor(mins / 60)
    const m = mins % 60
    return `${h}h ${m}m`
  }

  const uniqueUsers = Object.keys(totals)

  return (
    <ProtectedRoute>
      <Menu />
      <div className='flex flex-col items-center justify-center p-2 min-h-screen gap-8'>
        <div className='flex flex-col sm:flex-row items-center justify-between w-full max-w-2xl'>
          <h1 className='font-bold text-white text-3xl mb-2 sm:mb-0'>Analytics</h1>
          <CustomTooltip content='Filter'>
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-0">
                <div className="bg-[#0D0D0D] rounded-md border-gray-600 border-1 p-2 flex items-center justify-between cursor-pointer">
                  <Funnel size={16} color="#99a1af" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1C1C1C] text-white border-none">
                <DropdownMenuItem onClick={() => setFilter('day')} className='cursor-pointer'>Day</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilter('week')} className='cursor-pointer'>Week</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilter('month')} className='cursor-pointer'>Month</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CustomTooltip>
        </div>

        <div className='w-full flex flex-col sm:flex-row items-center justify-center sm:justify-around gap-4 mt-6 max-w-2xl'>
          {uniqueUsers.map((name) => (
            <UserCard
              key={name}
              name={name}
              shortcut={name.charAt(0)}
              time={formatDuration(totals[name])}
            />
          ))}
        </div>

        <div className='w-full mt-6 max-w-2xl overflow-x-auto'>
          <Table className='text-white min-w-[300px]'>
            <TableHeader>
              <TableRow className='bg-neutral-900 hover:bg-neutral-900'>
                <TableHead className="text-gray-400">Person</TableHead>
                <TableHead className="text-gray-400">Date</TableHead>
                <TableHead className="text-gray-400">Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='bg-neutral-950'>
              {entries.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell className="text-white">{entry.user}</TableCell>
                  <TableCell className="text-gray-400">{entry.date}</TableCell>
                  <TableCell className="text-white">{formatDuration(Number(entry.duration))}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default Analytics
