import React from 'react'
import Heading from './ui/Heading'
import Card from './ui/Card'


const How = () => {
  return (
    <section className='pt-36 pb-10 sm:px-20 bg-black text-white'>
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
      <div className="wrapper max-w-2xl mx-auto mt-20 bg-black">

        <Card title='Uncover Your Unique Story' description="Every language school has a unique story to tell. We start by diving deep to uncover the heart and soul of your school' s identity. What makes your learning experience special?" />

        <Card title='Create Captivating Visuals' description="We ditch the static and embrace captivating visuals and storytelling. Our ad creatives are designed to stop the scroll, spark curiosity, and leave a lasting impression." />

        <Card title='Target the Right Audience' description="We don't just throw spaghetti at the social media wall. We leverage advanced targeting options to ensure your ads reach the right people at the right time." />

        <Card title='Optimize for Success' description="We don't leave success to chance. Our team meticulously tracks and analyzes campaign performance, making real-time adjustments to optimize results and maximize your return on investment (ROI)." />
      
      </div>
    </section>
          
  )
}

export default How