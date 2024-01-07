import React from 'react'
import Image from "next/image";

const Spending = () => {
  return (
    <>
      <div className="justify-center items-center bg-white flex w-full flex-col px-10 py-8 max-md:max-w-full max-md:px-5 md:flex-1 md:mr-20">
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
            src="/Images/Arrow.svg"
            alt='Image'
            height={100}
            width={100}
            className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          />
        </div>
        <div className="self-stretch mt-24 mb-12 mx-8 max-md:max-w-full max-md:mr-2.5 max-md:my-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <Image
                loading="lazy"
                src="/Images/Phone2.png"
                alt='Image'
                height={2000} // Increase the size if the original image is larger
                width={2000} // Increase the size if the original image is larger
                className="aspect-[1.21] w-full items-center overflow-hidden grow max-md:max-w-full max-md:mt-8"
              />
            </div>
            <div className="flex-grow flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="justify-center bg-[#FAF9FF] flex grow flex-col w-full px-8 py-6 rounded-lg items-end max-md:max-w-full max-md:mt-8 max-md:px-5">
                <div className="justify-center items-center border bg-white flex  max-w-full flex-col md:w-full md:mr-2.5 md:mt-10 md:px-5 p-7 rounded-xl border-solid border-purple-400 mt-16 mb-9 ">
                  <div className="items-stretch self-stretch flex justify-between gap-5">
                    <div className="items-stretch flex flex-col">
                      <div className="text-neutral-900 text-xl font-semibold leading-6 whitespace-nowrap">
                        Spending
                      </div>
                      <div className="items-stretch flex justify-between gap-1.5 mt-1.5">
                        <Image
                          loading="lazy"
                          src="/Images/Message.svg"
                          alt='Image'
                          height={100}
                          width={100}
                          className="aspect-square object-contain object-center w-[19px] overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-gray-500 text-sm font-medium leading-4 grow whitespace-nowrap self-start">
                          9349 visa card
                        </div>
                      </div>
                    </div>
                    <Image
                      loading="lazy"
                      src="/Images/Wide.svg"
                      alt='Image'
                      height={100}
                      width={100}
                      className="aspect-[1.05] object-contain object-center w-5 overflow-hidden shrink-0 max-w-full self-start"
                    />
                  </div>
                  <div className="items-stretch flex gap-2.5 mt-7 self-start">
                    <div className="text-neutral-900 text-3xl font-medium leading-10 grow whitespace-nowrap">
                      127.14
                    </div>
                    <div className="text-neutral-900 text-sm font-medium leading-4 self-center whitespace-nowrap my-auto">
                      USD
                    </div>
                  </div>
                  <div className="items-stretch self-stretch flex justify-between gap-5 mt-2.5 ">
                    <div className="text-gray-500 text-sm font-medium leading-4 whitespace-nowrap">
                      vs last week
                    </div>
                    <div className="  text-gray-500 text-sm font-medium leading-4 grow ">
                      Last Purchased ( Feb 24 19:59 UTC-5 )
                    </div>
                  </div>
                  <div className="self-stretch flex items-stretch justify-between gap-5 mt-9 pr-12 max-md:pr-5">
                    <div className="text-gray-500 text-sm font-medium leading-4">
                      400 USD
                    </div>
                    <div className="text-gray-500 text-sm font-medium leading-4 self-center my-auto">
                      1000 USD
                    </div>
                    <div className="text-gray-500 text-sm font-medium leading-4 self-center my-auto">
                      5000 USD
                    </div>
                  </div>
                  <div className="items-stretch self-stretch flex gap-1 mt-3 pr-1.5 relative">
                    <div className="bg-fuchsia-900 flex w-[102px] shrink-1 h-3 flex-col rounded-xl" />
                    <Image
                      loading="lazy"
                      src="/Images/Indicator.svg"
                      alt='Image'
                      height={100}
                      width={100}
                      className="aspect-[11.83] object-cover object-center w-[142px] overflow-hidden shrink-1 max-w-full "
                    />
                    <div className="hidden sm:flex bg-gray-200 w-[102px] shrink-1 h-3 flex-col rounded-xl  " />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Spending