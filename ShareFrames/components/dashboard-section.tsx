"use client"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { JSX, SVGProps } from "react"
import { CardContent, Card } from "@/components/ui/card"
import MyFramesSection from "./my-frames"
import { useRouter } from 'next/navigation'

export default function DashboardSection() {

  const router = useRouter();

  const createFrameSet = () => {
    console.log("Create a frame set");
    router.push("/frame");
  };

  
  return (
    <>
    <div className="container mx-auto">
   
      <div className="text-black bg-white my-32 mx-64 rounded-lg border-grey border-[1px] text-center shadow-md">
      {/* <h1 className="text-2xl w-30 font-semibold pt-5"> Create a new Share-Frame</h1> */}
      <div className="h-30 w-20 mx-auto pt-10 pb-5 flex flex-col">
        <img src="createNew.svg" alt="logo" className="w-30 h-30 object-contain object-center mx-auto"></img>
      </div>
      <div className="pb-5">
      <Button className="bg-green-500 text-white" onClick={createFrameSet}>Create New Frame</Button>
      </div>
      </div>

      <div className="text-black bg-white my-32 mx-64 rounded-lg border-grey border-[1px] shadow-md">
        <div className="flex justify-center space-x-4">

          <div className="rounded-lg p-6">
              <div className="flex flex-col space-y-8">
                  <MyFramesSection />
              </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

