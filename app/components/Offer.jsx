'use client';

import React, { useEffect, useRef, useState } from 'react';
import Heading from './ui/Heading';
import FadeInUp from './FadeInUp';

const Video = React.forwardRef((props, ref) => {
  return (
      <video
        width="full"
        height="full"
        muted
        loop
        preload="none"
        ref={ref}
        loading="lazy"
      >
        <source src="./glass.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  );
});

Video.displayName = 'Video';

const Offer = () => {
  const videoRef = useRef(null);
  const [observerInstance, setObserverInstance] = useState(null);

  useEffect(() => {
    const video = videoRef.current;

    if (typeof window !== 'undefined' && video && !observerInstance) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              video.play();
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(video);
      setObserverInstance(observer);
    }

    return () => {
      if (observerInstance) {
        observerInstance.disconnect();
      }
    };
  }, [observerInstance, videoRef]);

  return (
    <div id="offer" className="w-full flex flex-col sm:py-36 bg-black text-white sm:px-20 pb-0">
      <Heading label={'The versocia monsoon Offer'} />
      <div className="mx-auto sm:mb-36 ">
        <Video ref={videoRef} />
      </div>

      <Heading label={'Adding More to your Glass'} />
    
      <div className="pt-16 sm:w-[60%] w-[80%] mx-auto flex justify-center flex-col items-center text-left">
        <FadeInUp>
          <div className="pb-16">
            <span className="font-bold">monsoon's calling, and so are new opportunities! </span>
            Partner with Versocia before the season ends and unlock {' '}
            <span className="font-bold">lifetime FREE premium ad copy insights and strategies valued at $350/month. </span>
          </div>
        </FadeInUp>

        <div>
          <FadeInUp>
            <span className="font-bold">We're not afraid to put our money where our mouth is. </span>
            That's why we offer a <span className="font-bold">30-day</span>  free trial. If your customer inquiries aren't trending upwards after 30 days, you can keep all the clients we bring you for <span className='font-bold'>completely free</span>, and we won't charge you a thing if you're not satisfied with the results. Think of it as our way of saying, "Let's make this monsoon outstanding for your business!"
            <br />
          </FadeInUp>
        </div>
      </div>
    </div>
  );
};

export default Offer;
