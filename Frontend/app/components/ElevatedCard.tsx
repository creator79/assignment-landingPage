import React from 'react'
import Image from "next/image";
const ElevatedCard = () => {
  return (
   <>
     <div className="justify-center items-center bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
        <div className="self-center text-neutral-900 text-center text-4xl font-semibold leading-10 max-w-[704px] mt-12 max-md:max-w-full max-md:mt-10">
          Elevating Card Programs with Cutting-Edge Technology
        </div>
        <div className="text-gray-500 text-center text-lg leading-7 self-center max-w-xl mt-4 max-md:max-w-full">
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </div>
        <div className="justify-center items-stretch self-center flex gap-2 mt-8 rounded-lg">
          <div className="text-fuchsia-900 text-center text-base font-medium leading-5 grow whitespace-nowrap">
            Compare all Pro features
          </div>
          
          <Image
            loading="lazy"
            alt="Image"
            src="/Images/Arrow.svg"
            height={100}
            width={100}
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          />
        </div>
        <div className="self-stretch mt-24 mb-12 mx-8 p-4 max-md:max-w-full max-md:mr-2.5 max-md:my-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:mt-10">
                <div className="justify-center items-center bg-gray-100 self-center flex aspect-square flex-col w-14 h-14 px-4 rounded-[240px]">
                  <Image
                    loading="lazy"
                    src="/Images/Web.svg"
                    alt='Image'
                    height={100}
                    width={100}
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>
                <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
                  Globally Accepted
                </div>
                <div className="text-gray-500 text-center text-sm font-medium leading-6 self-center max-w-xs mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:mt-10">
                <div className="justify-center items-center bg-gray-100 self-center flex aspect-square flex-col w-14 h-14 px-4 rounded-[240px]">
                  <Image
                    loading="lazy"
                    src="/Images/Key.svg"
                    height={100}
                    width={100}
                    alt='Image'
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>
                <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
                  Biometric Integrated
                </div>
                <div className="text-gray-500 text-center text-sm font-medium leading-6 self-center max-w-xs mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:mt-10">
                <div className="justify-center items-center bg-gray-100 self-center flex aspect-square flex-col w-14 h-14 px-4 rounded-[240px]">
                  <Image
                    loading="lazy"
                    src="/Images/Lock.svg"
                    alt='Image'
                    height={100}
                    width={100}

                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>
                <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
                  Fully Secured
                </div>
                <div className="text-gray-500 text-center text-sm font-medium leading-6 self-center max-w-xs mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default ElevatedCard



