"use client"
import GetStartedButtonSection from "./get-started-button-section";

export default function HeroSection() {

  return (
    <div className="bg-gradient-to-r from-orange-300 via-red-300 to-orange-300 pt-[200px] pb-[150px] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold mb-4 leading-snug">Share Frames</h1>
      <h1 className="text-7xl font-bold mb-4 leading-snug  max-w-4xl">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mauris nunc,"
      </h1>
      <p className="mb-12 text-xl leading-snug max-w-4xl">
      Donec laoreet, augue vel dictum mollis, magna felis convallis justo, vitae vulputate lectus metus vitae sem. Integer ultricies ipsum vitae dolor imperdiet semper.
      </p>
      <GetStartedButtonSection />
    </div>
  )
}

