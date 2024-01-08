import React from 'react';
import Image from "next/image";
const Unlock = () => {
  return (
    <>
      <div className="bg-white flex flex-col px-5 py-8 md:px-20">
        <div className="text-neutral-900 text-center text-4xl font-semibold leading-10 max-w-[704px] mt-12 md:max-w-full md:mt-10">
          Unlock Limitless Possibilities with Our New Card Solutions
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 mb-12 md:mx-8 md:px-16">
          <div className="flex items-stretch gap-2">
            <div className="bg-fuchsia-900 flex items-center gap-2 px-4 py-3 rounded-lg">
              <div className="text-white text-center text-base font-medium leading-5 grow flex-wrap">
                Unlock your card
              </div>
              <Image
                loading="lazy"
                src="/Images/Unlock.svg"
                alt='Image'
                height={100}
                width={100}
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="bg-zinc-100 flex items-center gap-2 px-4 py-3 rounded-lg mt-4 md:mt-0">
              <div className="text-gray-500 text-center text-base font-medium leading-5 grow flex-wrap">
                Customer support
              </div>
              <Image
                loading="lazy"
                src="/Images/HeadPhone.svg"
                alt='Image'
                height={100}
                width={100}
                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unlock;
