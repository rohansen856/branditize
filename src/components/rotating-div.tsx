import React from "react"
import cx from "classnames"
import { useParallax } from "react-scroll-parallax"

const shared =
    "absolute border-4 border-secondary bg-background border-solid rounded-lg h-14 w-14 flex items-center justify-center"

export function RotatingDiv() {
    const parallax = useParallax<HTMLDivElement>({
        rotate: [0, 360],
        shouldAlwaysCompleteAnimation: true,
    })
    return (
        <div className="relative w-full overflow-hidden rounded-md py-10">
            <div className="flex w-full flex-row items-center justify-evenly">
                <div
                    ref={parallax.ref}
                    className="border-secondary relative flex h-48 w-48 items-center justify-center rounded-full border-4 border-solid text-4xl md:h-96 md:w-96"
                >
                    😵‍💫
                    <div
                        className={cx(
                            shared,
                            "top-0 left-1/2 -translate-y-1/2 -translate-x-1/2"
                        )}
                    >
                        💎
                    </div>
                    <div
                        className={cx(
                            shared,
                            "right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
                        )}
                    >
                        🤡
                    </div>
                    <div
                        className={cx(
                            shared,
                            "bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2"
                        )}
                    >
                        💰
                    </div>
                    <div
                        className={cx(
                            shared,
                            "top-1/2 left-0 -translate-y-1/2 -translate-x-1/2"
                        )}
                    >
                        👌🏻
                    </div>
                </div>
            </div>
        </div>
    )
}
