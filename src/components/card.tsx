"use client"

import Image from "next/image"

import { BackgroundBeams } from "./bg-beam"

export function Card() {
    return (
        <div className="bg-secondary music relative mx-auto flex h-[30rem] max-w-sm flex-col items-start border border-black/[0.2] p-4 duration-200 hover:-translate-y-10 hover:scale-110 dark:border-white/[0.2]">
            <BackgroundBeams />
            <Icon className="absolute -left-3 -top-3 h-6 w-6 text-black dark:text-white" />
            <Icon className="absolute -bottom-3 -left-3 h-6 w-6 text-black dark:text-white" />
            <Icon className="absolute -right-3 -top-3 h-6 w-6 text-black dark:text-white" />
            <Icon className="absolute -bottom-3 -right-3 h-6 w-6 text-black dark:text-white" />

            <div className="bg-muted-foreground relative mb-16 h-48 w-full rounded-lg">
                <Image
                    src={"/card1.webp"}
                    alt=""
                    fill
                    className="object-contain"
                />
            </div>

            <h4 className="text-lg font-bold">Formulating The Vision</h4>
            <h5 className="mt-4 text-sm font-light text-black dark:text-white">
                It all starts with a vision - which we’ll work together on
                turning into a solid course by taking you through our proven
                processes and systems - ensuring we’re building your education
                on the perfect foundation. This includes your curriculum and
                value proposition.
            </h5>
        </div>
    )
}

export const Icon = ({ className, ...rest }: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
            />
        </svg>
    )
}
