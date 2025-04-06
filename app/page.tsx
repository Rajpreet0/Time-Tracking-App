"use client"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center p-2 mt-6">
      <Image src={Logo} alt="Logo" width={80} height={80}/>
      <p className="mt-2 text-white font-bold tracking-wide">Time Tracking App</p>
      <div className="flex flex-col items-center justify-center h-[500px] mt-12 w-full">
          <h2 className="font-bold text-xl text-white tracking-wide mb-6">Input-OTP</h2>
          <InputOTP maxLength={6}>
            <InputOTPGroup className="text-[#1DCD9F] text-xl ">
              <InputOTPSlot index={0}/>
              <InputOTPSlot index={1}/>
              <InputOTPSlot index={2}/>
              <InputOTPSlot index={3}/>
              <InputOTPSlot index={4}/>
              <InputOTPSlot index={5}/>
            </InputOTPGroup>
          </InputOTP>
          <Button 
            onClick={() => router.push('/dashboard/analytics')}
            className="mt-6 p-4 w-[100px] h-[40px] cursor-pointer hover:scale-105 transition-all">Submit</Button>
      </div>
    </div>
  );
}
