'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

export default function AppSection() {

    gsap.registerPlugin(ScrollTrigger);

    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        if (!leftRef.current || !rightRef.current) return;

        // Left section comes from left (x: -100%)
        gsap.fromTo(
            leftRef.current,
            { x: '-100%', opacity: 0 },
            {
                x: '0%',
                opacity: 1,
                duration: 1.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: leftRef.current,
                    start: 'top 60%',
                    toggleActions: 'play none none none',
                },
            }
        );

        // Right section (form) comes from right (x: 100%)
        gsap.fromTo(
            rightRef.current,
            { x: '100%', opacity: 0 },
            {
                x: '0%',
                opacity: 1,
                duration: 1.0,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: rightRef.current,
                    start: 'top 60%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);
    return (
        <div className="w-full bg-gray-100 lg:p-0 p-3 lg:py-[30px] py-[30px] overflow-hidden">
            <div className="max-w-[1120px] grid lg:grid-cols-[70%_auto] items-center mx-auto lg:p-0 p-5  rounded-[10px] ">
                <div ref={leftRef}>
                    <h3 className="lg:text-[30px] text-[25px] lg:text-start text-center font-bold">Download Our App For Better Experience</h3>
                    <ul>
                        <li className="my-[15px] text-[20px]">Live & recorded classes available at ease</li>
                        <li className="my-[15px] text-[20px]">Dashboard for progress tracking</li>
                        <li className="my-[15px] text-[20px]">Lakhs of practice questions</li>
                    </ul>
                    <div className="flex items-center gap-5 my-[25px]">
                        <img className="lg:w-[200px] w-[120px] cursor-pointer object-cover" src="https://www.pw.live/_next/static/media/google-play-badge.171251c3.webp" alt="" />
                        <img className="lg:w-[200px] w-[120px] cursor-pointer object-cover" src="https://www.pw.live/_next/static/media/apple-store-badge.acb101ce.webp" alt="" />
                    </div>
                </div>
                <div ref={rightRef} className="lg:w-[350px]   h-[500px]">
                    <img className="w-full h-full object-cover rounded-[10px]" src="https://www.mindinventory.com/blog/wp-content/uploads/2018/12/benefits-of-mobile-app-for-business.webp" alt="" />
                </div>
            </div>
        </div>
    )
}