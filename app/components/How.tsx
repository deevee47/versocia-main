import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'
import Image from 'next/image'
import Heading from './ui/Heading'

const How = () => {
  return (
    <section className='mt-36'>
      <Heading label={'How We Do It'} />
      <div className="bg-red-700   rounded-2xl flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div className='z-50 rounded-2xl shadow-2xl my-auto bg-black '>
          <StickyScroll content={content} contentClassName={""} />
        </div>
      </div>
    </section>
          
  )
}

export default How



const content = [
  {
    title:"",
    description:
      "Every language school has a unique story to tell. We start by diving deep to uncover the heart and soul of your school's identity. What makes your learning experience special?",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-none">
        <Image
          src="/icon-3.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Ideas"
        />
      </div>
    ),
  },
  {
    title: "",
    description:
      "We ditch the static and embrace captivating visuals and storytelling. Our ad creatives are designed to stop the scroll, spark curiosity, and leave a lasting impression.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-none">
        <Image
          src="/icon-4.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Ideas"
        />
      </div>
    ),
  },
  {
    title: "",
    description:
      "We don't just throw spaghetti at the social media wall. We leverage advanced targeting options to ensure your ads reach the right people at the right time.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-none">
        <Image
          src="/icon-2.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Ideas"
        />
      </div>
    ),
  },
  {
    title: "",
    description:
      "We don't leave success to chance. Our team meticulously tracks and analyzes campaign performance, making real-time adjustments to optimize results and maximize your return on investment (ROI).",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-none">
        <Image
          src="/icon-1.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Ideas"
        />
      </div>
    ),
  },
];
