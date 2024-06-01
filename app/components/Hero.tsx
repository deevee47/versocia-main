import React from 'react';
import Image from 'next/image';
import FadeInUp from './FadeInUp';

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
  return (
    <FadeInUp>
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="pt-30 pb-10">
        <Image
          className="w-[45vw]"
          src="/logo.png"
          alt="Versocia Logo"
          width={500}
          height={500}
        />
      </div>
      <div className="uppercase text-3xl sm:text-4xl font-[Ovo] tracking-wider">
        Simply beyond
      </div>
      <div
        style={{ wordSpacing: '40px' }}
        className="pt-10 pb-20 font-normal text-3xl sm:text-2xl font-[Work Sans] tracking-wide"
      >
        A Social Media Marketing Agency
      </div>
      <div
        style={{ wordSpacing: '20px' }}
        className="pt-20 font-[Work Sans] text-xl sm:text-2xl"
      >
        The Versatility your brand was Missing
      </div>
      </div>
    </FadeInUp>
  );
};

export default Hero;