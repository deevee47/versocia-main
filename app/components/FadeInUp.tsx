'use client'
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInUpProps {
  children: React.ReactNode;
  className?: string;
}

const FadeInUp: React.FC<FadeInUpProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px 0px',
  });

  useEffect(() => {
    if (inView && ref.current) {
      ref.current.classList.add('animate-fadeInUp', 'opacity-100');
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`opacity-0 ${className}`}
      style={{ transitionProperty: 'opacity, transform' }}
    >
      <div ref={inViewRef}>{children}</div>
    </div>
  );
};

export default FadeInUp;