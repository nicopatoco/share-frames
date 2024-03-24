"use client";


import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import Link from "next/link";

import { usePrivy } from '@privy-io/react-auth';

import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import GetStartedButtonHeader from './get-started-button-header';
import { displayUsername } from "@/lib/utils";

import Image from "next/image";

export default function HeaderSection() {

  const {
    user,
    ready,
    authenticated,
    login,
    logout
  } = usePrivy();

  return (
    <div className="px-12 py-6">
        <div className="bg-white flex justify-between items-center px-6 py-4 ">

            <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                {authenticated && (
                    <>
                      <Link href="/" className="block px-2 py-1 text-lg">
                      Home
                      </Link>
                      <Link href="/dashboard" className="block px-2 py-1 text-lg">
                      Dashboard
                      </Link>
                      <Link href="/subscribers" className="block px-2 py-1 text-lg">
                      Subscribers
                      </Link>
                    </>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">Share-Frames</h1>
              {/* <Image src="/logo.png" width={100} height={100} alt="Share Frames Logo" /> */}
              </Link>
          </div>

            <nav className="mx-4 flex items-center space-x-2 lg:space-x-4 hidden md:block">
            { authenticated && (
                <>
                  <Button asChild variant="ghost">
                      <Link href="/" className="text-sm font-medium transition-colors">
                          Home
                      </Link>
                  </Button>
                  <Button asChild variant="ghost">
                      <Link href="/dashboard" className="text-sm font-medium transition-colors">
                          Dashboard
                      </Link>
                  </Button>
                  <Button asChild variant="ghost">
                      <Link href="/subscribers" className="text-sm font-medium transition-colors">
                          Subscribers
                      </Link>
                  </Button>
                </>
              )}          </nav>

            <div className="flex items-center">
              <GetStartedButtonHeader />
            </div>
            <div className="absolute top-15 right-40" >
            {authenticated && ( 
                <>
                <span>{displayUsername(user?.farcaster?.ownerAddress)}</span>
                </>
                
               )}  
            </div>
        </div>
    </div>
  )
}

