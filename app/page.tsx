"use client"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CORRECT_OTP = "323473";

export default function Home() {

  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (otp === CORRECT_OTP) {
      localStorage.setItem("otp_verified", "true");
      router.push("/dashboard/analytics");
    } else {
      alert("Invalid OTP ❌");
    }
  }

  return (
    <div className="flex flex-col justify-center items-center p-2 mt-6">
      <Image src={Logo} alt="Logo" width={80} height={80}/>
      <p className="mt-2 text-white font-bold tracking-wide">Time Tracking App</p>
      <div className="flex flex-col items-center justify-center h-[500px] mt-12 w-full">
          <h2 className="font-bold text-xl text-white tracking-wide mb-6">Input-OTP</h2>
          <InputOTP maxLength={6} onChange={(value) => setOtp(value)}>
            <InputOTPGroup className="text-[#1DCD9F] text-xl ">
              {[...Array(6)].map((_, i) => (
                <InputOTPSlot key={i} index={i}/>
              ))}
            </InputOTPGroup>
          </InputOTP>
          <Button 
            onClick={handleSubmit}
            className="mt-6 p-4 w-[100px] h-[40px] bg-[#00C2A8] cursor-pointer hover:scale-105 transition-all">Submit</Button>
      </div>
    </div>
  );
}
