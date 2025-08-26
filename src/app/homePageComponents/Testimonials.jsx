'use client'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import Slider from "react-slick"

export default function Testimonials() {
    gsap.registerPlugin(ScrollTrigger);


    const cardRef = useRef();
    useEffect(() => {
        gsap.fromTo(
            cardRef.current,
            { y: '-80px', opacity: 0 },
            {
                y: '0px',
                opacity: 1,
                duration: 0.5,
                ease: 'power1.in',
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 60%',
                    toggleActions: 'play none none none',
                },
            }
        )
    }, [])

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        pushOnHover: true,
    };

    let data = [
        {
            name: 'KANIKA',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam beatae debitis, quae repellendus id deleniti pariatur eveniet voluptatum quisquam delectus ipsum non ullam eos ut quas cum, expedita dolores mollitia.',
            src: '/testimonial0.mp4',
        },
        {
            name: 'ROHAN',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam beatae debitis, quae repellendus id deleniti pariatur eveniet voluptatum quisquam delectus ipsum non ullam eos ut quas cum, expedita dolores mollitia.',
            src: '/testimonial1.mp4',
        },
        {
            name: 'MANISH',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam beatae debitis, quae repellendus id deleniti pariatur eveniet voluptatum quisquam delectus ipsum non ullam eos ut quas cum, expedita dolores mollitia.',
            src: '/testimonial2.mp4',
        },
    ];

    return (
        <div ref={cardRef} className="w-full lg:bg-gray-50">
            <h3 style={{ background: 'linear-gradient(135deg, rgba(230, 39, 39, 1) 0%, rgba(140, 0, 0, 0.95) 45%, rgba(90, 0, 0, 1) 100%)' }} className="px-6 lg:text-[35px] text-[25px] text-center font-bold uppercase text-white py-5  mb-10">Happy Students Testimonials</h3>
            <div className="max-w-[1320px] mx-auto lg:pb-[60px] lg:p-0 p-3">


                {data.length >= 1 ?
                    <div className="max-w-7xl mx-auto rounded-4xl">
                        <Slider {...settings}>
                            {
                                data.map((item, index) => (
                                    <div
                                        key={index}
                                        className=""
                                    >
                                        <video autoPlay
                                            muted
                                            playsInline
                                            className=" mx-auto lg:h-[400px] rounded-[30px] " src={item.src} ></video>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                    :
                    <div className="flex justify-center items-center h-auto ">
                        <div className="w-[70px] h-[70px] border-4 border-gray-300 border-t-gray-700 rounded-full animate-spin"></div>
                    </div>

                }
            </div>
        </div>
    );
}
