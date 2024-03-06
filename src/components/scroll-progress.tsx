"use client"

import { useEffect, useState } from "react"

export function ScrollProgress() {
    const [y, setY] = useState(0) // storing current scroll bar positiotn
    const [totalY, setTotalY] = useState(0) // storing Total Scrollable area
    const [scrollBar, setScrollBar] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", () => setY(window.scrollY))
        const element = document.getElementsByTagName("body")
        setY(window.scrollY)
        setTotalY(window.innerWidth)
        setScrollBar(window.innerHeight)
    }, [y])

    const scroll = `${(y / totalY) * 50}%`

    return (
        <div
            className="absolute -z-10 hidden h-full bg-blue-700 opacity-20 lg:block"
            style={{ width: scroll }}
        ></div>
    )
}
