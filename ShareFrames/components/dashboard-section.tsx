"use client"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { JSX, SVGProps } from "react"
import { CardContent, Card } from "@/components/ui/card"
import MyFramesSection from "./my-frames"

export default function DashboardSection() {
  
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

