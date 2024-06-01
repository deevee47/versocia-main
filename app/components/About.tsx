import React from 'react';
import Heading from './ui/Heading';
import ScrollRevealText from './ui/ScrollRevealText';
import FadeInUp from './FadeInUp';


const About: React.FC = () => {
    return (
        <section id='about'>
            <Heading
                label={
                    <div className="flex flex-col justify-between sm:flex-row items-center">
                        <div className="font-bold sm:text-6xl text-5xl py-8">About</div>
                        <div className="text-center font-bold sm:text-xl text-2xl">
                            What makes us,<br />
                            us.
                        </div>
                    </div>
                }
            />
            <FadeInUp>
            <div className="bg-black p-14 rounded-lg sm:p-24 text-center sm:text-3xl text-2xl"> 
                <ScrollRevealText
                    text="A Social Media Marketing Agency for Language Schools. We're your
                    bridge to a world of engaged students, passionate about language
                    learning. Our team of social media experts goes beyond the classroom,
                    crafting compelling narratives that showcase your school's unique
                    identity and the transformative power of languages. We become an
                    extension of your team, working collaboratively to achieve your goals."
                    bgColor="gray"
                    fgColor="white"
                    backgroundColor="black"
                    />
                <div className="mt-36 text-3xl sm:text-4xl tracking-wider text-white">
                    Simply beyond Marketing
                </div>
                </div>
            </FadeInUp>
        </section>
    );
};

export default About;