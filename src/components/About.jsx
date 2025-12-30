import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React from 'react'

const About = () => {
 
  useGSAP(() => {
    // You can add GSAP animations here if needed
    const titleSplit = SplitText.create("#about h2", {type:"words"});

    const scrollTimeline = gsap.timeline({
        scrollTrigger:{
            trigger:"#about",
            start:'top center',
        }
    })
    .from(titleSplit.words, {
        yPercent:100,
        opacity:0,
        stagger:0.02,
        duration:1,
        ease:"power4.out"
    })
    .from('.top-grid div, .bottom-grid div', {
        opacity:0,
        duration:1,
        stagger:0.04,
        ease:"power1.inOut"
    },'-=0.5');
    //-0.5 means the previous animation will end 0.5 seconds after this one starts
  });


  return (
    <div id="about">
        <div className="mb-16 md:px-0 px-5">
            <div className="content">
                <div className="md:col-span-8">
                    <p className="badge">Best Cochtails</p>
                    <h2>
                        Where every detail matters
                        <span className="text-white">-</span>
                        from muddle to garnish
                    </h2>
                </div>

                <div className="sub-content">
                    <p>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable. </p>
                
                    <div>
                        <p className='md:text-3xl'>
                            <span>4.5</span>/5
                        </p>
                        <p className="text-sm text-white-100">
                            More than +12000 customers 
                        </p>
                    </div>
                
                </div>
            </div>
        </div>

        <div className="top-grid">
            <div className="md:col-span-3">
                <div className="noisy" />
                <img src="/images/abt1.png" alt="grid-img-1" />
            </div>
            <div className="md:col-span-6">
                <div className="noisy" />
                <img src="/images/abt2.png" alt="grid-img-2" />
            </div>
            <div className="md:col-span-3">
                <div className="noisy" />
                <img src="/images/abt3.png" alt="grid-img-3" />
            </div>
        </div>

        <div className="bottom-grid">
            <div className="md:col-span-8">
                <div className="noisy" />
                <img src="/images/abt1.png" alt="grid-img-1" />
            </div>
            <div className="md:col-span-4">
                <div className="noisy" />
                <img src="/images/abt3.png" alt="grid-img-3" />
            </div>
        </div>
    </div>
  )
}

export default About