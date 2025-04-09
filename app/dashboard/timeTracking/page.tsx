'use client'
import Menu from '@/components/Navigation/Menu'
import ProtectedRoute from '@/components/ProtectedRoute'
import SelectPersonCard from '@/components/SelectPersonCard'
import TimeCard from '@/components/TimeCard'
import React, { useEffect, useState } from 'react'


const TimeTracking = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0);


  useEffect(() => {
    let interval: NodeJS.Timeout;
  
    if (isPlaying) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
  
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  const toggleTimer = () => {
    setIsPlaying((prev) => !prev)
  }

  const formatTime = (sec: number) => {
    const hrs = Math.floor(sec / 3600)
    const mins = Math.floor((sec % 3600) / 60)
    const secs = sec % 60
    return [hrs, mins, secs]
      .map((val) => String(val).padStart(2, '0'))
      .join(':')
  }

  return (
    <ProtectedRoute>    
        <Menu/>
        <div className='flex flex-col items-center justify-center p-2 min-h-screen gap-8'>
            <div className='flex items-center justify-between w-[30%]'>
                <h1 className='font-bold text-white text-3xl'>Dashboard</h1>
                <p className='text-xl text-gray-300'>{new Date().toLocaleDateString("de-De", {  year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            <div className='w-[30%]'>
              <TimeCard isPlay={isPlaying}             
                        onToggle={toggleTimer}
                        time={formatTime(seconds)}/>
            </div>
            <div className='w-[30%]'>
              <SelectPersonCard/>
            </div>
        </div>
    </ProtectedRoute>
  )
}

export default TimeTracking