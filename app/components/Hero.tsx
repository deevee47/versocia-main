import React from 'react';
import Image from 'next/image';
import FadeInUp from './FadeInUp';

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
  return (
    <FadeInUp>
    <div id='hero' className="h-screen w-full flex flex-col justify-center items-center bg-white">
      <div className="pt-30 pb-10">
        <Image
          className="sm:w-[45vw] w-[75vw]"
          src="/logo.png"
          alt="Versocia Logo"
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="uppercase text-xl sm:text-4xl font-[Ovo] tracking-wider">
        Simply beyond
      </div>
      <div
        style={{ wordSpacing: '40px' }}
        className="pt-10 pb-20 font-normal text-sm text-center sm:text-2xl font-[Work Sans] sm:tracking-wide tracking-normal"
      >
        A Social Media Marketing Agency
      </div>
      <div
        style={{ wordSpacing: '20px' }}
        className="pt-20 font-[Work Sans] text-sm sm:text-2xl"
      >
        The Versatility your brand was Missing
      </div>
      </div>
    </FadeInUp>
  );
};

export default Hero;