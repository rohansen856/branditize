import * as React from "react"
import Image from "next/image"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <footer className={cn(className)}>
            <div className="relative flex flex-col items-center justify-between gap-4 overflow-hidden py-10 md:h-48 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 pt-14 md:flex-row md:gap-2">
                    <Icons.logo />
                    <p className="text-center text-sm leading-loose md:text-left">
                        Built by{" "}
                        <a
                            href={siteConfig.links.twitter}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            Rohan Sen
                        </a>
                        . Hosted on{" "}
                        <a
                            href="https://vercel.com"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            Vercel
                        </a>
                        . The source code is available on{" "}
                        <a
                            href={siteConfig.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                    <div className="ml-20 flex gap-6">
                        <Image
                            src={"/insta.svg"}
                            alt=""
                            height={20}
                            width={20}
                        />
                        <Image
                            src={"/linkedin.svg"}
                            alt=""
                            height={20}
                            width={20}
                        />
                        <Image src={"/yt.svg"} alt="" height={20} width={20} />
                    </div>
                </div>
            </div>
        </footer>
    )
}
