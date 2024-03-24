"use client"


import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

import { usePrivy } from '@privy-io/react-auth';


export default function GetStartedButtonHeader() {

    const {
        ready,
        authenticated,
        login,
        logout
      } = usePrivy();
    
  return (
    <> 
        { authenticated && (
            <Button 
            className="bg-[#ca8a04] hover:bg-[#ca8a04] rounded-none text-white transition-colors duration-200"
            onClick={logout}>
                Logout
            </Button>            
        )}
        { !authenticated && (
            <Button 
            className="bg-[#ca8a04] hover:bg-[#ca8a04] rounded-none text-white transition-colors duration-200"
            onClick={login}>
                Get Started
            </Button>            
        )}
    </>    
  )
}

