import React from 'react';
import Image from "next/image";

const Logos = () => {
  return (
    <>
      <div className="bg-white flex flex-col px-5 py-8 md:px-16 lg:py-12 max-w-[1216px] mx-auto">
        <div className="flex flex-wrap gap-5 justify-center">
          <Image
            loading="lazy"
            src="/Images/Nuxt.svg"
            alt='Image'
            height={100}
            width={100}
            className="aspect-[4.08] object-contain object-center w-[98px] h-auto mb-5 max-w-full"
          />
          <Image
            loading="lazy"
            src="/Images/Miro.svg"
            alt='Image'
            height={100}
            width={100}
            className="aspect-[2.83] object-contain object-center w-[68px] h-auto mb-5 max-w-full"
          />
          <Image
            loading="lazy"
            src="/Images/Lotte.png"
            alt='Image'
            height={100}
            width={100}
            className="aspect-[5.17] object-contain object-center w-[124px] h-auto mb-5 max-w-full"
          />
          <Image
            loading="lazy"
            src="/Images/Wise.svg"
            alt='Image'
            height={100}
            width={100}
            className="aspect-[4.42] object-contain object-center w-[106px] h-auto mb-5 max-w-full"
          />
          <Image
            loading="lazy"
            src="/Images/Dribble.svg"
            alt='Image'
            height={100}
            width={100}
            className="aspect-[4.08] object-contain object-center w-[98px] h-auto mb-5 max-w-full"
          />
          <Image
            loading="lazy"
            src="/Images/Kinsto.png"
            alt='Image'
            height={100}
            width={100}
            className="aspect-[5] object-contain object-center w-[120px] h-auto mb-5 max-w-full"
          />
          <Image
            loading="lazy"
            src="/Images/AngleList.svg"
            alt='Image'
            height={100}
            width={100}
            className="aspect-[4.25] object-contain object-center w-[102px] h-auto mb-5 max-w-full"
          />
          <Image
            loading="lazy"
            src="/Images/Behance.svg"
            alt='Image'
            height={100}
            width={100}
            className="aspect-[5.5] object-contain object-center w-[132px] h-auto mb-5 max-w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Logos;
