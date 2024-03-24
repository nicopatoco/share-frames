"use client";


import { Button } from "@/components/ui/button"
import Link from "next/link";

import { usePrivy } from '@privy-io/react-auth';

import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Menu } from "lucide-react";
import GetStartedButtonHeader from './get-started-button-header';

export default function HeaderLandingSection() {

  const {
    authenticated,
  } = usePrivy();


  return (
    <div className="bg-gradient-to-r from-orange-300 via-red-300 to-orange-300 px-12 py-6">
        <div className="rounded-lg flex justify-between items-center px-6 py-4 shadow-sm border-grey border-[1px]">

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
                    </>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">Share Frames</h1>
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
                </>
              )}
          </nav>

            <div className="flex items-center">
              <GetStartedButtonHeader />
            </div>
        </div>
    </div>
  )
}

