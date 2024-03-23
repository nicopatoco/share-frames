"use client"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { JSX, SVGProps } from "react"
import { CardContent, Card } from "@/components/ui/card"
import { useRouter } from 'next/navigation'
import MyFramesSection from "./my-frames"

export default function DashboardSection() {

    const router = useRouter();

    const requestLoanAction = () => {
      console.log("Request Loan Action");
      router.push("/add-contract");
    };
  
  return (
    <div className="text-black bg-white py-32 px-8">
      <div className="flex justify-center space-x-4">

        <div className="rounded-lg p-6">
            <div className="flex flex-col space-y-8">
                <MyFramesSection />
            </div>
        </div>
      </div>
    </div>
  )
}

