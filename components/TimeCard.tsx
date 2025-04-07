import { Pause, PlayIcon } from "lucide-react"

interface TimeCardProps {
  isPlay: boolean;
}

const TimeCard: React.FC<TimeCardProps> = ({isPlay}) => {
  return (
    <div className="w-full bg-[#1C1C1C] p-8 rounded-md flex items-center justify-between">
      <div className="p-2 rounded-md flex items-center gap-4 cursor-pointer hover:scale-105 transition-all" style={{backgroundColor: !isPlay ? "#B80F0A" : "#00C2A8"}}>
        {!isPlay ? (
          <>
            <Pause color="white" size={20}/>
            <p className="font-bold text-white text-xl">Stop Timer</p>
          </>
        ) : (
          <>
            <PlayIcon color="white" size={20}/>
            <p className="font-bold text-white text-xl">Start Timer</p>
          </>
        )}
      </div>
      <div>
        <p className="text-white font-bold text-3xl">00:05:14</p>
      </div>
    </div>
  )
}

export default TimeCard