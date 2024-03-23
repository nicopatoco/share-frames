"use client"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import GetStartedButtonSection from "./get-started-button-section";

export default function DirectorySection() {

  return (
    <div className="bg-gradient-to-r from-orange-300 via-red-300 to-orange-300 pt-[100px] pb-[150px] flex flex-col items-center justify-center text-center px-4">

      <h1 className="text-5xl font-bold mb-4 leading-snug text-white ">Share Frames</h1>
      <h1 className="text-3xl font-bold mb-12 leading-snug  max-w-4xl">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris nunc,"
      </h1>


      <h1 className="text-5xl font-bold text-white mb-6">Directory of Frames on Farcaster</h1>
      <div className="flex justify-center gap-4 mb-10">
        <Button className="bg-white text-black">Featured</Button>
        <Button className="text-white">Fun & Games</Button>
        <Button className="text-white">Business</Button>
        <Button className="text-white">Degen</Button>
        <Button className="text-white">All</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-white">
          <img
            alt="Farcosystem"
            className="w-full h-48 object-cover"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <CardContent>
            <h2 className="text-2xl font-bold mb-2">Farcosystem</h2>
            <p className="mb-4">An overview of the Farcaster ecosystem as of February 2024.</p>
            <Button variant="outline">Mint NFT</Button>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <img
            alt="Girl Scout Cookies"
            className="w-full h-48 object-cover"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <CardContent>
            <h2 className="text-2xl font-bold mb-2">Girl Scout Cookies</h2>
            <p className="mb-4">Girl Scout Cookies Layla at Troop 1473, go order some cookies!</p>
            <Badge variant="secondary">Ecommerce</Badge>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <img
            alt="Crop.xyz"
            className="w-full h-48 object-cover"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <CardContent>
            <h2 className="text-2xl font-bold mb-2">Crop.xyz</h2>
            <p className="mb-4">Social Farming game in a Frame</p>
            <Badge variant="secondary">Games</Badge>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}

