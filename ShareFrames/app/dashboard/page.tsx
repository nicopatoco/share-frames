"use client";

import DashboardSection from "@/components/dashboard-section";
import FooterSectionWhite from "@/components/footer-section-white"
import HeaderSection from "@/components/header-section"

import {usePrivy} from '@privy-io/react-auth';

export default function Page() {

    const {
        user,
      } = usePrivy();

    const wallet = user?.wallet;

    return (
        <>
            <HeaderSection />
            <DashboardSection />
            
            <FooterSectionWhite />
        </>
    )
  }