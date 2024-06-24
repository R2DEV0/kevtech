import React, { FC, useEffect } from 'react';
import { ViewProps } from '../types/types';
import axios from 'axios';

const Resume: FC<ViewProps> = ({ view, setView }) => {

  useEffect(() => {
    const MakeCall = async () => {
      const res = await axios.post('/api/openai', {input: "what are you?"});
      if(res.data.statusCode === 200){
        console.log(res.data);
      } else {
        console.log(res.data);
      }
    }
    MakeCall();
  })

    return(
        <div className="mx-auto my-8">

        <header>
          <h1 className="text-3xl font-bold">Kevin R. Chancey</h1>
          <p className="text-lg">Las Vegas, NV --- (206) 519-4870</p>
          -------------------------------------
        </header>

        <section className="mb-4 nav-links text-lg">
            <a target="_blank" rel="noreferrer noopener" href='/resume.pdf'>DOWNLOAD</a>
        </section>
    
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">{`Experience >>>`}</h2>
    
          <article className="mb-4">
            <h3 className="text-lg font-semibold">Senior Developer | AREA15 | Las Vegas</h3>
            <p className="text-sm mb-2">February 2023 - Present</p>
            <ul className="list-disc list-inside text-lg">
              <li>Designed and implemented on-site ticketing/advertising kiosks.</li>
              <li>Developed immersive games using JavaScript/Next.js.</li>
              <li>Crafted custom WordPress plugins with PHP and React.js.</li>
              <li>Integrated various APIs including Stripe, Square, HubSpot, Strapi, etc.</li>
            </ul>
          </article>
    
          <article className="mb-4">
            <h3 className="text-lg font-semibold">Software Developer | Strategy9 | Las Vegas</h3>
           <p className="text-sm mb-2">August 2021 - Present</p>
            <ul className="list-disc list-inside text-lg">
              <li>Developed SMS-based valet system for the casino industry.</li>
              <li>Implemented contests, coupons, and promotions via email and SMS.</li>
              <li>Managed end-to-end email processes for compliance and brand consistency.</li>
              <li>Created sportspool applications for data-driven marketing.</li>
            </ul>
          </article>
    
          <article className="mb-4">
            <h3 className="text-lg font-semibold">Lead Software Developer | J Taylor Education | Las Vegas</h3>
           <p className="text-sm mb-2">June 2019 - Present</p>
            <ul className="list-disc list-inside text-lg">
              <li>Oversaw technology and infrastructure for virtual education solutions.</li>
              <li>Led AWS and WordPress implementation for online presence.</li>
              <li>Developed MERN stack applications for scalable solutions.</li>
              <li>Designed user-centric virtual education platforms.</li>
            </ul>
          </article>    
        </section>
    
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">{`Education >>>`}</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Amazon Web Services | Associate AWS Certified Developer 2024</li>
            <li>City University of Seattle | BS Applied Computing | Seattle, WA 2021</li>
            <li>Coding Dojo | Full-Stack Developer Certificate | Seattle, WA 2020</li>
            <li>City University of Seattle | BS Business Administration | Seattle, WA 2017</li>
            <li>Community College of the Air Force | AAS Transportation | Elmendorf AFB, AK 2014</li>
          </ul>
        </section>
    
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-2">{`Skills & Strengths >>>`}</h2>
          <div className="flex flex-wrap text-sm font-semibold">
            <span className="px-3 py-1 mr-2 mb-2">Full-Stack Development</span>
            <span className="px-3 py-1 mr-2 mb-2">API Development</span>
            <span className="px-3 py-1 mr-2 mb-2">Hosting/Maintaining Websites</span>
            <span className="px-3 py-1 mr-2 mb-2">MERN Stack</span>
            <span className="px-3 py-1 mr-2 mb-2">PHP, React/Next.js</span>
            <span className="px-3 py-1 mr-2 mb-2">AWS, HTML, CSS, Javascript</span>
            <span className="px-3 py-1 mr-2 mb-2">SQL, ASP.net</span>
            <span className="px-3 py-1 mr-2 mb-2">AWS, Netlify, Pantheon, WebOps</span>
            <span className="px-3 py-1 mr-2 mb-2">WordPress/Plugin Development</span>
          </div>
        </section>
    
      </div>
    )
}

export default Resume;