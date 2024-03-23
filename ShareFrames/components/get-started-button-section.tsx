"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

import { usePrivy } from '@privy-io/react-auth';

export default function GetStartedButtonSection() {

    const router = useRouter();

    const {
        ready,
        authenticated,
        login,
        logout
      } = usePrivy();
    
    const buttonAction = () => {
    router.push("/dashboard");  
    };

    return (
    <> 
        { authenticated && (
        <Button 
        className="bg-[#7bdbfb] hover:bg-[#98daf0] text-black rounded-md transition-colors duration-200"
        onClick={ () => buttonAction()}>
            Get Started
        </Button>
        )}
        { !authenticated && (
        <Button 
        className="bg-[#7bdbfb] hover:bg-[#98daf0] text-black rounded-md transition-colors duration-200"
        onClick={login}>
            Get Started
        </Button>
        )}
    </>    
    )
}

