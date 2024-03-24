"use client"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import GetStartedButtonSection from "./get-started-button-section";

export default function DirectorySection() {

  return (
    <div className="pt-[100px] pb-[150px] flex flex-col items-center justify-center text-center px-4">
      
      <div className="h-30 w-60">
        <img src="sflogo.svg" alt="logo" className="w-30 h-30 object-contain object-center"></img>
      </div>
      <h1 className="text-2xl font-medium mb-12 leading-snug max-w-4xl pt-10">
        Share-Frames is a marketing tool for projects and content creators that want to scale in a Web3 world. Share Frames allow creators to collaborate with Web3 social media users in a win-win incentive program.
      </h1>


      <h1 className="text-5xl font-bold text-white mb-6">Directory of Frames on Farcaster</h1>
      <div className="flex justify-center gap-4 mb-10">
        <Button className="bg-white text-black hover:text-white">Latest</Button>
        <Button className="text-white">Fun & Games</Button>
        <Button className="text-white">Business</Button>
        <Button className="text-white">Degen</Button>
        <Button className="text-white">All</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card className="bg-white">
          <img
            alt="Pixel art Blog"
            className="w-full h-48 object-cover"
            height="200"
            src="/demo-pixelart.png"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <CardContent>
            <h2 className="text-2xl font-bold mb-2 mt-2">Pixel art Blog</h2>
            <p className="mb-4">Ready to take your pixel art skills to the next level? Subscribe to our blog for exclusive insights, techniques, and resources delivered straight to your inbox!</p>
            <Badge variant="secondary">Fun & Games</Badge>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <img
            alt="Cookies and Privacy Blog"
            className="w-full h-48 object-cover"
            height="200"
            src="/demo-privacy.png"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <CardContent>
            <h2 className="text-2xl font-bold mb-2 mt-2">Cookies and Privacy Blog</h2>
            <p className="mb-4">Stay ahead of the curve in web privacy! Subscribe now for expert analysis, industry news, and practical advice to safeguard your online identity!</p>
            <Badge variant="secondary">Business</Badge>
          </CardContent>
        </Card>
        <Card className="bg-white">
          <img
            alt="Crop.xyz"
            className="w-full h-48 object-cover"
            height="200"
            src="/demo-finance.png"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <CardContent>
            <h2 className="text-2xl font-bold mb-2 mt-2">Crop.xyz</h2>
            <p className="mb-4">Don't let finances hold you back – take control of your money today! Subscribe to our blog for expert guidance, budgeting tools, and stories to inspire your journey!</p>
            <Badge variant="secondary">Business</Badge>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}

