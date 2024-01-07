import React from 'react'
import Image from "next/image";
const Testimonial = () => {
    return (

        <>
            <div className="justify-center items-center bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
                <Image
                    loading="lazy"
                    src="/Images/Wise.svg"
                    alt='Image'
                    height={100}
                    width={100}
                    className="aspect-[4.08] object-contain object-center w-[98px] overflow-hidden max-w-full mt-20 max-md:mt-10"
                />
                <div className="text-zinc-800 text-center text-3xl font-medium leading-10 max-w-[824px] mt-8 max-md:max-w-full">
                    I had the pleasure of experiencing the next generation of card
                    solutions with this incredible product. It's refreshing to see such
                    innovation in the financial industry.
                </div>{" "}
                <Image
                    loading="lazy"
                    src="/Images/Avtar.png"
                    alt='Image'
                    height={100}
                    width={100}
                    className="aspect-square object-contain object-center w-16 justify-center items-center overflow-hidden max-w-full mt-12 max-md:mt-10"
                />{" "}
                <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
                    Nick Babich
                </div>{" "}
                <div className="text-gray-500 text-center text-sm leading-5 whitespace-nowrap mt-1">
                    Lead Designer
                </div>{" "}
                <div className="items-stretch flex w-[100px] max-w-full gap-3 mt-4 mb-14 max-md:mb-10">
                    <Image
                        loading="lazy"
                        src="/Images/Star.svg"
                        alt='Image'
                        height={100}
                        width={100}
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />{" "}
                    <Image
                        loading="lazy"
                        src="/Images/Star.svg"
                        alt='Image'
                        height={100}
                        width={100}
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />{" "}
                    <Image
                        loading="lazy"
                        src="/Images/Star.svg"
                        alt='Image'
                        height={100}
                        width={100}
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />{" "}
                    <Image
                        loading="lazy"
                        src="/Images/Star.svg"
                        alt='Image'
                        height={100}
                        width={100}
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                </div>
            </div>{" "}

        </>
    )
}

export default Testimonial