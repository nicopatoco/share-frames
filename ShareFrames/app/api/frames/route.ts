import { NextResponse } from "next/server";

export async function GET(userAddress: string) {
  //const frames = await fetch(`https://api.frames.com/${uaerAddress}`);

  const frames = [
    {
      id: 1,
      name: "Frame 1",
      description: "Description 1",
      image: "image1.jpg",
    },
    {
      id: 2,
      name: "Frame 2",
      description: "Description 2",
      image: "image2.jpg",
    },
  ];
  return NextResponse.json(frames);
}