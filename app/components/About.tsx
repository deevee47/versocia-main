import React from 'react';
import Heading from './ui/Heading';
import ScrollRevealText from './ui/ScrollRevealText';
import FadeInUp from './FadeInUp';


const About: React.FC = () => {
    return (
        <section id='about' className='sm:px-20 bg-black text-white'>
            <Heading
                label={
                    <div className="flex flex-col justify-between sm:flex-row items-center">
                        <div className="font-bold sm:text-6xl text-5xl py-8">About</div>
                        <div className="text-center font-bold sm:text-xl text-2xl">
                            What makes us,<br />
                            Us.
                        </div>
                    </div>
                }
            />
            <FadeInUp>
            <div className="bg-black rounded-lg sm:p-24 text-center sm:text-3xl text-2xl"> 
                    <ScrollRevealText
                        text="A Social Media Marketing Agency for Remodelling Companies. We're your bridge to a world of stunning transformations and delighted homeowners. Our team of social media experts goes beyond the basics, telling stories that resonate with homeowners seeking exceptional remodeling solutions. Through targeted strategies, we ensure your brand stands out in a competitive market, attracting more clients and driving growth for your remodeling business."
                    bgColor="#1f2937"
                    fgColor="white"
                    backgroundColor="black"
                    />
                    <div className="mt-36 text-3xl sm:text-4xl tracking-wider font-[Ovo] text-white">
                    Simply beyond Marketing
                </div>
                </div>
            </FadeInUp>
        </section>
    );
};

export default About;