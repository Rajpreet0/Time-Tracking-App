'use client'
import Menu from '@/components/Navigation/Menu'
import ProtectedRoute from '@/components/ProtectedRoute'
import SelectPersonCard from '@/components/SelectPersonCard'
import TimeCard from '@/components/TimeCard'
import React, { useEffect, useState } from 'react'

interface User {
  id: number;
  name: string;
  email: string;
}


const TimeTracking = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [startTime, setStartTime] = useState<Date | null>(null)

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

  const toggleTimer = async () => {

    if (!selectedUser) {
      alert('Please select a user first!');
      return
    }

    if (!isPlaying) {
      setStartTime(new Date())
      setIsPlaying(true)
    } else {
      const endTime = new Date()

      await fetch('/api/time', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userId: selectedUser.id,
          start: startTime,
          end: endTime,
        }),
      })

      setIsPlaying(false)
      setStartTime(null)
      setSeconds(0)
    }
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
              <SelectPersonCard onSelect={setSelectedUser}/>
            </div>
        </div>
    </ProtectedRoute>
  )
}

export default TimeTracking