import React from 'react'

const Hero = () => {
  return (
<>
<div className="flex w-full flex-col items-center pt-12 px-20 max-md:max-w-full max-md:px-5">
        <div className="text-fuchsia-900 text-center text-base font-medium leading-5 mt-11 max-md:max-w-full max-md:mt-10">
          Seamless experience
        </div>
        <div className="text-neutral-900 text-center text-6xl font-semibold leading-[72px] max-w-[832px] mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
          Unleashing the Next Generation of Card Solutions
        </div>
        <div className="text-gray-500 text-center text-lg leading-7 max-w-[648px] mt-4 max-md:max-w-full">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        </div>
        <div className="justify-center items-stretch bg-fuchsia-900 flex gap-2 mt-8 p-4 rounded-lg">
          <div className="text-white text-center text-base font-medium leading-5 grow whitespace-nowrap">
            Unlock your Card
          </div>
       
        </div>
        <div className="text-gray-500 text-center text-sm font-medium leading-5 mt-4 max-md:max-w-full">
          *No credit card required
        </div>
      </div>
</>
  )
}

export default Hero