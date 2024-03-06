"use client"

import { ParallaxProvider } from "react-scroll-parallax"

import { BackgroundBeams } from "@/components/bg-beam"
import { SiteFooter } from "@/components/shared/site-footer"

interface MarketingLayoutProps {
    children: React.ReactNode
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
    return (
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            <header className="container fixed inset-x-3 top-2 z-40 overflow-hidden rounded-lg border antialiased backdrop-blur">
                <div className="flex items-center justify-between py-2">
                    <h1 className="font-heading anurati m-auto text-5xl">
                        ROBLOX
                    </h1>
                </div>
            </header>
            <ParallaxProvider>
                <BackgroundBeams />
                <main className="flex-1">{children}</main>
            </ParallaxProvider>
            <SiteFooter className="mt-24" />
        </div>
    )
}
