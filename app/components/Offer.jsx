'use client';

import React, { useEffect, useRef, useState } from 'react';
import Heading from './ui/Heading';
import FadeInUp from './FadeInUp';

const Video = React.forwardRef((props, ref) => {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <video
        width="full"
        height="full"
        muted
        loop
        preload="auto"
        ref={ref}
        className="rounded-2xl"
      >
        <source src="./glass.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
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
    <div id="offer" className="w-full flex flex-col my-36">
      <Heading label={'The versocia Summer Offer'} />
      <div className="mx-auto mb-36">
        <Video ref={videoRef} />
      </div>

      <Heading label={'Adding More to your Glass'} />
    
      <div className="mt-16 sm:w-[60%] w-[80%] mx-auto flex justify-center flex-col items-center text-left">
        <FadeInUp>
          <div className="mb-16">
            <span className="font-bold">Summer's calling, and so are new students! </span>
            Enroll with Versocia before the season ends and unlock{' '}
            <span className="font-bold">lifetime FREE premium creatives valued at $xyz. </span>
            These custom-made visuals and ad copy will grab attention and get your language school noticed.
          </div>
        </FadeInUp>

        <div>
          <FadeInUp>
            <span className="font-bold">We're not afraid to put our money where our mouth is. </span>
            That's why we offer a <span className="font-bold">60 days</span> growth guarantee. If your enrollment
            numbers aren't trending upwards after 60 days (which, hey, paid ads take some time to heat up!), we'll keep
            working on your campaign for an additional 60 days at <span className="font-bold">No Service Fee. </span>
            Consider it our way of saying,
            <br />
            "Let's make this Summer epic for your school!"
          </FadeInUp>
        </div>
      </div>
    </div>
  );
};

export default Offer;
