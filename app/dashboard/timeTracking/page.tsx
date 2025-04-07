import Menu from '@/components/Navigation/Menu'
import ProtectedRoute from '@/components/ProtectedRoute'
import SelectPersonCard from '@/components/SelectPersonCard'
import TimeCard from '@/components/TimeCard'
import React from 'react'

const TimeTracking = () => {
  return (
    <ProtectedRoute>    
        <Menu/>
        <div className='flex flex-col items-center justify-center p-2 min-h-screen gap-8'>
            <div className='flex items-center justify-between w-[30%]'>
                <h1 className='font-bold text-white text-3xl'>Dashboard</h1>
                <p className='text-xl text-gray-300'>April 7, 2025</p>
            </div>
            <div className='w-[30%]'>
              <TimeCard isPlay={true}/>
            </div>
            <div className='w-[30%]'>
              <SelectPersonCard/>
            </div>
        </div>
    </ProtectedRoute>
  )
}

export default TimeTracking