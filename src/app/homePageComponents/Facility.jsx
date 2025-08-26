'use client';
import React, { useEffect, useRef } from 'react';
import { FaChalkboardTeacher, FaBookOpen, FaTrophy } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

gsap.registerPlugin(ScrollTrigger);

export default function Facility() {
    const cardsRef = useRef([]);


    useEffect(() => {
        cardsRef.current.forEach((card, index) => {
            const item = highlights[index];

            const fromX = item.id % 2 === 1 ? -100 : 100; // Left or right slide

            gsap.fromTo(
                card,
                { x: fromX, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.0,
                    ease: 'power2.out', // Smooth and natural easing
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
    }, []);

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 2000,
    };

    const highlights = [
        {
            id: '1',
            heading: 'Best Faculty',
            description:
                "Learn from seasoned professionals from top design institutes. Our passionate instructors ensure you're ready for every challenge.",
            icon: <FaChalkboardTeacher />,
            src: '/bestFaculty.jpg'
        },
        {
            id: '2',
            heading: 'Best Material',
            description:
                'Access exclusive study resources curated by experts. Stay ahead with content tailored for NIFT, NID, NATA, and UCEED.',
            icon: <FaBookOpen />,
            src: '/bestMaterial.png'
        },
        {
            id: '3',
            heading: 'Best Results',
            description:
                'Join a legacy of 100% success stories. Our students make it to the top design schools — and so can you.',
            icon: <FaTrophy />,
            src: '/bestResult.JPG'
        },
    ];






    return (
        <div className="w-full bg-gradient-to-b from-[#fff9f9] to-[#fefefe] lg:py-[30px] py-[40px]">
            <h3 style={{ background: 'linear-gradient(135deg, rgba(230, 39, 39, 1) 0%, rgba(140, 0, 0, 0.95) 45%, rgba(90, 0, 0, 1) 100%)' }} className="px-6 lg:text-[35px] text-[25px] text-center font-bold uppercase text-white py-5  mb-5">Why Student Choose Us</h3>
            <div className="max-w-[1320px] mx-auto text-center mb-12">
                <p className="text-gray-600 max-w-xl mx-auto text-lg">
                    We're not just another coaching institute — we're your launchpad to success.
                </p>
            </div>

            {/* Slider for small screens */}
            <div className="sm:hidden">
                <Slider {...sliderSettings}>
                    {highlights.map((item, index) => (
                        <div key={index}>
                            <div
                                style={{ backgroundImage: `url(${item.src})` }}
                                ref={(el) => (cardsRef.current[index] = el)}
                                className="relative rounded-3xl border bg-cover bg-center border-red-100 lg:p-8 p-10 text-center transition-all lg:mx-4 overflow-hidden px-5"
                            >
                                {/* Gradient Overlay */}
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-black/80 via-black/70 to-black/50 z-10"></div>

                                {/* Text Content - ensure it's above the overlay */}
                                <div className="relative z-20">
                                    {/* Title */}
                                    <h3 className="text-[35px] font-bold text-white uppercase tracking-wide mb-3">
                                        {item.heading}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-white text-[16px] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Grid for large screens */}
            <div className="hidden max-w-5xl mx-auto sm:block gap-8">
                {highlights.map((item, index) => (
                    <div
                        style={{ backgroundImage: `url(${item.src})` }}
                        key={index}
                        ref={(el) => (cardsRef.current[index] = el)}
                        className={`${item.id % 2 != 0 ? 'ml-0' : 'ml-16'} w-[100%] h-[300px] bg-white relative bg-no-repeat  bg-cover bg-center my-[70] backdrop-blur-md bg-opacity-90 rounded-3xl shadow-lg border border-red-100 p-8 text-center transition-all  flex items-center`}
                    >
                        <div className='absolute w-[100%] h-[100%] z-[-10] top-0 left-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent rounded-3xl' ></div>
                        <div className='z-40  text-start max-w-lg'>
                            {/* Icon
                            <div className="mb-5">
                                <div className="inline-flex items-center justify-center w-[70px] h-[70px] rounded-full bg-gradient-to-br from-red-500 to-red-700 text-white text-[28px] shadow-lg border-4 border-white">
                                    {item.icon}
                                </div>
                            </div> */}

                            {/* Title */}
                            <h3 className="text-[40px] font-bold text-white uppercase tracking-wide mb-3">
                                {item.heading}
                            </h3>

                            {/* Description */}
                            <p className="text-white text-[20px] leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
