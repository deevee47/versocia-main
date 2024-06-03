"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// Augment the existing module instead of redeclaring it
declare module 'split-type' {
    interface SplitType {
        chars?: HTMLElement[];
        words?: HTMLElement[];
    }
}

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

        const splitText = new SplitType(p, { types: 'words' });

        // Handle potential undefined or non-array words
        const words = splitText?.words || [];

        // Set initial color to fgColor (light color)
        gsap.set(words, { color: bgColor });

        // Animate from fgColor (light) to bgColor (dark)
        gsap.to(words, {
            color: fgColor,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse',
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [bgColor, fgColor]);

    const style: React.CSSProperties = {
        backgroundColor,
        borderBottom,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        ...sectionStyles
    };

    return (
        <section ref={sectionRef} className="scroll-section font-medium" style={style}>
            <p
                className="reveal-type"
                data-bg-color={bgColor}
                data-fg-color={fgColor}
                style={{
                    textAlign: 'center',
                    wordSpacing: '0.25rem',
                    lineHeight: '1.2',
                }}
            >
                {text}
            </p>
            <style jsx global>{`
        .reveal-type span {
          display: inline-block;
          white-space: nowrap;
        }
      `}</style>
        </section>
    );
};

export default ScrollRevealText;