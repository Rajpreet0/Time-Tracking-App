"use client";
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const ProtectedRoute = ({children} : {children: React.ReactNode}) => {

    const router = useRouter();

    useEffect(() => {
        const verified = localStorage.getItem("otp_verified");

        if (verified !== "true") {
            router.replace("/");
        }
    }, []);

  return (
    <>{children}</>
  )
}

export default ProtectedRoute