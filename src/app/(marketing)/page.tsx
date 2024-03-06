"use client"

import Image from "next/image"

import { Separator } from "@/components/ui/separator"
import { Boxes } from "@/components/bg-boxes"
import { CallButton } from "@/components/call-button"
import { Card } from "@/components/card"
import { Meteors } from "@/components/meteor"

export default function ProfilePage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pt-32">
            <Meteors number={20} className="absolute left-1/2" />
            <h3 className="mt-24 text-center text-xl font-bold">
                Build. Manage. Grow
            </h3>
            <h2 className="animate-gradient font-heading relative mt-12 bg-clip-text px-16 text-center text-4xl text-transparent sm:text-lg md:text-2xl lg:w-full xl:text-4xl">
                HELPING PROFESSIONALS IMPACT THE WORLD BY TURNING THEIR
                EXPERTISE INTO PROFITABLE ONLINE EDUCATION
            </h2>
            <div className="mt-24 w-full px-16">
                <div className="bg-secondary h-[70vh] w-full"></div>
            </div>
            <div className="mb-16 mt-6 flex justify-center">
                <CallButton />
            </div>
            <div className="my-16 flex w-full flex-col-reverse overflow-hidden lg:h-[70vh] lg:flex-row">
                <div className="bg-secondary relative flex w-full flex-col overflow-hidden p-6 lg:h-full lg:w-3/5">
                    <Boxes className="z-10 opacity-50" />
                    <h5 className="z-20 text-3xl font-extrabold">
                        The Future is Online Education
                    </h5>
                    <h6 className="z-20 my-auto mb-12 max-w-[700px]">
                        It allows any professional to scale their impact and
                        profit by sharing their expertise with thousands of
                        students globally. It&apos;s a win-win for everyone.
                        <br />
                        <br />
                        However, creating and scaling an online education by
                        yourself is a complex and time-consuming process.
                        That&apos;s where we come in.
                        <br />
                        <br />
                        At Gro Bloc, we have learnt the ins and outs of the
                        industry by studying & graduating advanced programs at
                        COET - the leading institution in online education - and
                        we’re therefore well-equipped to help you through every
                        step of the process.
                        <br />
                        <br />
                        From vision, to production, to launching - followed by
                        ongoing business management and scaling.
                        <br />
                        <br />
                        We work hand-in-hand every step of the way. Let&apos;s
                        talk.
                    </h6>
                    <CallButton />
                </div>
                <div className="bg-secondary relative mx-auto h-72 w-full lg:mx-0 lg:h-full lg:w-2/5">
                    <Image
                        src={"/text1.webp"}
                        alt=""
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="overflow-hidden">
                <h5 className="mx-16 mb-2 mt-24 text-center text-lg capitalize md:text-xl lg:text-2xl 2xl:text-4xl ">
                    Your 360 degree partner
                </h5>

                <p className="z-20 rounded-lg text-center text-lg">
                    We work hand-in-hand throughout the entire process.
                </p>
                <div className="z-10 mb-28 mt-12 flex w-full flex-wrap items-center justify-around gap-6 overflow-visible px-16">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <h5 className="text-md mx-16 mb-4 mt-24 text-center capitalize md:text-lg lg:text-2xl 2xl:text-4xl">
                We&apos;re friendly. Let&apos;s see if there&apos;s synergy.
            </h5>
            <p className="z-20 mb-10 rounded-lg text-center text-sm lg:text-lg 2xl:text-xl">
                We&apos;d love to hop on a free strategy call with you, to
                discuss potential and answer any questions you may have.
            </p>
            <div className="flex w-full justify-center">
                <CallButton />
            </div>
        </div>
    )
}
