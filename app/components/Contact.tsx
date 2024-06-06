"use client"
import { useState } from "react";
import Heading from "./ui/Heading";

const Contact = () => {
  const [showContact, setShowContact] = useState(true);

  return showContact ? (
    <section id='contact' className='h-screen w-full flex flex-col pt-2 bottom-0'>
      <span className="sm:px-20 px-10" ><Heading
        label={
          <div className='flex flex-col justify-between sm:flex-row items-center pb-8'>
            <div className='font-bold sm:pb-3 sm:text-6xl text-5xl'>Contact Us</div>
            <div className='sm:text-2xl text-lg font-bold pt-2 sm:pt-0'>Let&apos;s Chat</div>
          </div>
        }
      /></span>

      <div className='sm:px-20 px-10 pb-6'>
        <span className=''>We&apos;re passionate about helping language schools thrive, and we&apos;d love to hear from you!</span> Our friendly team is just a message away.
      </div>
      <div className='sm:px-20 px-10 py-6'>
        <span className='font-bold'>Slide into our DMs! We&apos;re active on all major social media platforms.</span> Hit us up at any of the handles below and we&apos;ll get back to you within 24 hours.
      </div>
      <div className='sm:px-20 px-10 pb-24 py-16 w-full justify-evenly flex flex-row'>
        <a href="https://www.linkedin.com/company/cat-digitals/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BhqeobfQlSBGwHsL1FHdSEA%3D%3D">LinkedIn</a>
        <a href="https://www.facebook.com/profile.php?id=100093571020006">Facebook</a>
        <a href="https://www.instagram.com/_catdigitals_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">Instagram</a>
      </div>
      <div className="sm:px-20 px-10">
        <span className='font-bold'>Prefer email?</span> Shoot us a message at <a className='underline' href="mailto:nishant@versocia.com">nishant@versocia.com</a> and we&apos;ll be happy to answer your questions.
      </div>

      <footer className='w-full flex justify-between items-center bg-[#fafafb] sm:px-20 px-10 py-7 bottom-0 sm:absolute'>
        <div className='flex'>
          <img loading="lazy" className='w-16 sm:w-20 mr-[1vw] object-contain sm:flex' src="./logo.png" alt="Versocia Logo" />
          <img loading="lazy" className='w-4 sm:w-10 pr-[1vw] object-contain' src="./white-icon.png" alt="Versocia Logo" />
        </div>
        <div className='block sm:text-sm text-[2.5vw]'>Copyright © 2024 versocia. All rights reserved.</div>
      </footer>
    </section>
  ) : null;
};

export default Contact;