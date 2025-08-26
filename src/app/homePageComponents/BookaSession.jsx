"use client";
import React, { useEffect, useRef } from "react";
import { MdLocalPhone, MdOutlineImportContacts } from "react-icons/md";
import { FaGraduationCap, FaUser } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function BookaSession() {
  gsap.registerPlugin(ScrollTrigger);

  const leftRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (!leftRef.current || !formRef.current) return;

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
      formRef.current,
      { x: '100%', opacity: 0 },
      {
        x: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 60%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);


  return (
    <div className="w-full lg:my-[100px]">
      <h3 style={{ background: 'linear-gradient(135deg, rgba(230, 39, 39, 1) 0%, rgba(140, 0, 0, 0.95) 45%, rgba(90, 0, 0, 1) 100%)' }} className="px-6 lg:text-[35px] text-[25px] text-center font-bold uppercase text-white py-5 mb-10">Book A Free Session</h3>
      <div style={{ backgroundImage: 'url("/bookSession.jpg")' }} className="w-full  bg-cover bg-center relative ">

        <div className="absolute w-[100%] h-[100%] bg-gradient-to-r from-black/95 via-black/40 to-black/100"></div>
        <div className="max-w-[1320px] mx-auto items-center overflow-hidden grid lg:grid-cols-[60%_auto] grid-cols-1">
          {/* Left Section */}
          <div ref={leftRef} className="p-8 lg:p-12 bg-no-repeat bg-cover flex flex-col  space-y-6  relative z-40">
            <div className="flex items-center gap-3 text-white">
              <MdOutlineImportContacts className="text-[40px] " />
              <h3 className="text-[26px] lg:text-[35px] font-bold leading-tight text-white">
                Book Your Free Counseling Session
              </h3>
            </div>

            <p className="text-[16px] text-white leading-[35px]">
              Not sure which creative career to pursue? Let's talk it out. Our expert
              mentors will help you understand the best path forward based on your
              passion and goals.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white text-[16px]">
                <FaUser className="text-white mt-1" />
                Fill out a short form with your details.
              </li>
              <li className="flex items-start gap-3 text-white text-[16px]">
                <MdLocalPhone className="text-white mt-1" />
                Get a call from our academic counselor within 24 hours.
              </li>
              <li className="flex items-start gap-3 text-white text-[16px]">
                <FaGraduationCap className="text-white mt-1" />
                Receive personalized guidance on exams, programs, and colleges.
              </li>
            </ul>

            {/* Callout or Highlight
          <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-lg shadow-sm mt-4">
            <p className="text-sm text-white font-medium">
              🎯 9 out of 10 students say this session clarified their career direction.
            </p>
          </div> */}

            {/* Assurance */}
            <div className="text-[14px] text-white italic mt-2">
              “I was confused between NID and UCEED — this call helped me decide clearly.” — Rhea, Design Aspirant
            </div>
          </div>

          {/* Right Section - Form */}
          <form ref={formRef} className="p-8 lg:p-12 z-40 border-2 border-white rounded-[15px] bg-black/10 text-white space-y-6 flex flex-col justify-center lg:mx-10 lg:my-15 m-5">
            <h2 className="text-[27px] font-bold text-white">
              Fill in Your Details
            </h2>

            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">
                Full Name*
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                Email Address*
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white font-medium mb-2">
                Phone Number*
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="exam" className="block text-white font-medium mb-2">
                Exam Type*
              </label>
              <select
                id="exam"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white text-black  focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              >
                <option l value="">-- Select Exam Type --</option>
                <option l value="nift">NIFT</option>
                <option l value="nid">NID</option>
                <option l value="uceed">UCEED</option>
                <option l value="nata">NATA</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 uppercase"
            >
              Book My Session
            </button>
          </form>
        </div>
      </div>
    </div>

  );
}
