import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
    const videoRef = useRef();
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(()=>{
        // Split text into individual characters and words for animated entrance
        const heroSplit = new SplitText("#hero .title", {type:"chars, words"});
        const paragraphSplit = new SplitText(".subtitle", {type:"lines"});

        // Apply gradient class to each character individually
        heroSplit.chars.forEach(char => {
            char.classList.add('text-gradient');
        });

        // Animate title characters from bottom (yPercent:100) with stagger effect
        gsap.from(heroSplit.chars, {
            yPercent:100,
            duration:1.8,
            ease: "expo.out",
            stagger:0.06
        });

        // Animate subtitle lines with fade in and slide up effect
        gsap.from(paragraphSplit.lines, {
            opacity:0,
            yPercent:100,
            duration:1.8,
            ease: "expo.out",
            stagger:0.06,
            delay:1
        });

        // Parallax effect for leaves: moves opposite directions on scroll
        // scrub:true links animation progress directly to scroll position
        gsap.timeline({
            scrollTrigger:{
                trigger:"#hero",
                start:"top top",
                end:"bottom top",
                scrub:true
            }
        })
        .to('.right-leaf', {y:200}, 0)
        .to('.left-leaf', {y: -200}, 0);

        // VIDEO SCROLL ANIMATION SETUP
        // When top of the video hits 50% of the viewport height, the animation starts
        // When bottom of the video hits top of the viewport, the animation ends
        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top'; 

        // Create timeline for scroll-controlled video playback
        // scrub:true = scroll position directly controls video frames (no auto-play)
        // pin:true = keeps video fixed while scrolling through it
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,  // Links scroll to animation progress
                pin: true,     // Pins element while animating
                markers: true  // Shows start/end markers for debugging
            }
        })

        // Wait for video metadata to load to get actual duration
        videoRef.current.onloadedmetadata = () => {
            const videoDuration = videoRef.current.duration;

            console.log('Video Duration:', videoDuration);

            // KEY: Animate video's currentTime from 0 to full duration
            // As you scroll, GSAP seeks through video frames (not play/pause)
            // Scroll down = currentTime increases (forward frames)
            // Scroll up = currentTime decreases (backward frames)
            tl.to(videoRef.current, {
                currentTime: videoDuration
            });
        };
    });


  return (
    <>
        <section id="hero" className="noisy">
            <h1 className="title">MOJITO</h1>
            <img src='images/hero-left-leaf.png'
                alt="left-leaf"
                className='left-leaf' 
            />

            <img src='images/hero-right-leaf.png'
                alt="right-leaf"
                className='right-leaf' 
            />

            <div className="body">
                <div className="content">
                    <div className="space-y-5 hidden md:block">
                        <p>Cool. Crisp. Classic.</p>
                        <p className="subtitle">Sip the Spirit <br /> of summer</p>
                    </div>

                    <div className="view-cocktails">
			 <p className="subtitle">
				Every cocktail on our menu is a blend of premium ingredients,
				creative flair, and timeless recipes — designed to delight your
				senses.
			 </p>
			 <a href="#cocktails">View cocktails</a>
                    </div>
                </div>
            </div>
        </section>
        {/* absolute inset-0 = position:absolute with top/right/bottom/left all set to 0 */}
        {/* Makes video container stretch to fill entire parent element */}
        <div className='video absolute inset-0'>
            <video
                ref={videoRef}
                src="/videos/output.mp4"
                muted
                playsInline
                preload='auto'
            ></video>
        </div>
    </>
  )
}

export default Hero