"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// Declare the module to avoid TS errors
declare module 'split-type';

interface ScrollRevealTextProps {
    text: string;
    bgColor: string;
    fgColor: string;
    backgroundColor?: string;
    borderBottom?: string;
    sectionStyles?: React.CSSProperties;
}

const ScrollRevealText: React.FC<ScrollRevealTextProps> = ({
    text,
    bgColor,
    fgColor,
    backgroundColor = '#ffffff',
    borderBottom = 'none',
    sectionStyles = {}
}) => {
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        if (!section) return;

        const p = section.querySelector('.reveal-type') as HTMLParagraphElement | null;
        if (!p) return;

        // Explicitly cast to any to bypass type checks for SplitType
        // This is a temporary solution until proper types are available
        const splitText = new (SplitType as any)(p, { types: 'chars' });

        // Handle potential undefined or non-array chars
        const chars = splitText?.chars || [];

        gsap.fromTo(
            chars,
            {
                color: bgColor,
            },
            {
                color: fgColor,
                duration: 0.3,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                    markers: false,
                    toggleActions: 'play play reverse reverse',
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [bgColor, fgColor]);

    const style: React.CSSProperties = {
        backgroundColor,
        borderBottom,
        ...sectionStyles
    };

    return (
        <section ref={sectionRef} className="scroll-section font-medium" style={style}>
            <p
                className="reveal-type"
                data-bg-color={bgColor}
                data-fg-color={fgColor}
            >
                {text}
            </p>
        </section>
    );
};

export default ScrollRevealText;