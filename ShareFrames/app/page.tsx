"use client";

import Image from "next/image";
import { usePrivy } from '@privy-io/react-auth';

import { Button } from "@/components/ui/button"
import HeaderLandingSection from '@/components/header-landing-section';
import HeroSection from '@/components/hero-section';
import HowWorksSection from '@/components/how-works-section';
import DisclaimerSection from '@/components/disclaimer-section';


export default function Home() {

  const {
    ready,
    authenticated,
    login,
    logout
  } = usePrivy();

  return (
    <>
      <HeaderLandingSection />
      <HeroSection />
      <HowWorksSection />
      <DisclaimerSection /> 
    </>
  );
}
