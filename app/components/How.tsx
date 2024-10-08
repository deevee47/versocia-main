import React from 'react'
import Heading from './ui/Heading'
import Card from './ui/Card'


const How = () => {
  return (
    <section id='howwedoit' className='pt-36 pb-10 sm:px-20 bg-black text-white'>
      <Heading
        label={
          <div className="flex flex-col justify-between sm:flex-row items-center">
            <div className="font-bold sm:text-6xl text-5xl py-8">How we do it</div>
            <div className="text-center font-bold sm:text-xl text-2xl">
              The versocia<br></br> Formula
            </div>
          </div>
        }
      />
      <div className="wrapper max-w-2xl mx-auto mt-20 bg-black ">

        <Card title='Uncover Your Unique Story' description="Every business has a unique story to tell. We begin by delving deep into what sets your company apart—whether it's your innovative solutions, exceptional service, or outstanding products. We uncover the essence of your brand to effectively communicate your strengths to potential customers." />

        <Card title='Create Captivating Visuals' description="We leverage our industry expertise to craft ad strategies that grab attention and inspire action. Using proven techniques, we create ads that stop the scroll, spark curiosity, and drive engagement and inquiries." />

        <Card title='Target the Right Audience' description="Forget casting a wide net. We employ advanced targeting strategies to pinpoint your ideal customers. By analyzing demographics, interests, and online behavior, we ensure your ads reach the right people at the right time—increasing the likelihood of converting leads into satisfied customers." />

        <Card title='Optimize for Success' description="Success in social media marketing isn't accidental—it's strategic. We meticulously monitor." />
      
      </div>
    </section>
          
  )
}

export default How
