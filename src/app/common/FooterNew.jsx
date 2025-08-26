'use client'
import { FaFacebookSquare, FaGraduationCap, FaLinkedin, FaTwitterSquare, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { megaMenuData } from "../ApiData/categoryApi";
import Link from "next/link";

export default function FooterNew() {
    return (
        <>
            <div className="w-full lg:mt-[60px] mt-[30px]  bg-gradient-to-r from-red-700 via-red-800 to-black text-white lg:px-6 px-3">
                <div className="max-w-[1320px] mx-auto py-[30px] grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-10">
                    {megaMenuData.map((item, index) => (
                        <ul key={index}>
                            <li className="uppercase text-[20px] tracking-widest mb-4 font-extrabold border-b-[1] border-white">{item.parentCategory}</li>
                            {item.subCategory.map((subCat) =>
                                subCat.subSubCategory.map((subSubCat) =>
                                    subSubCat.courses.map((course, courseIndex) => (
                                        <Link href={`/course/${course.replace(/[^a-zA-Z0-9]/g, "-")}`}> <li key={courseIndex} className="my-2 text-[16px] cursor-pointer hover:text-gray-200 hover:underline duration-300 ">{course}
                                        </li></Link>
                                    ))
                                )
                            )}
                        </ul>
                    ))}
                </div>
            </div>

            <div className="w-full lg:py-[30px] py-[20px] bg-black lg:px-6 px-3 " >
                <div className="max-w-[1320] mx-auto">
                    <div className="grid md:grid-cols-4 justify-center items-center gap-10">
                        <div className="text-white md:border-r-[1] pr-5 h-[100%] border-white">
                            <h2 className="text-[24px] mb-4 font-semibold uppercase ">Student Zone</h2>
                            <ul>
                                <li className="mb-[20px] hover:text-gray-300 duration-100 text-[17px] cursor-pointer flex items-center gap-2"><FaGraduationCap className="text-[25px]" /> Top Colleges In Jodhpur</li>
                                <li className="mb-[20px] hover:text-gray-300 duration-100 text-[17px] cursor-pointer flex items-center gap-2"><FaGraduationCap className="text-[25px]" /> Top Colleges In Udaipur</li>
                                <li className="mb-[20px] hover:text-gray-300 duration-100 text-[17px] cursor-pointer flex items-center gap-2"><FaGraduationCap className="text-[25px]" /> Top Colleges In Jaipur</li>
                                <li className="mb-[20px] hover:text-gray-300 duration-100 text-[17px] cursor-pointer flex items-center gap-2"><FaGraduationCap className="text-[25px]" /> Top Colleges In Rajasthan</li>
                            </ul>
                        </div>
                        <div className="text-white md:border-r-[1] pr-5 border-white">
                            <h2 className="text-[24px] mb-2 font-semibold uppercase">About Us</h2>
                            <p className="text-[18px] text-justify" >InFrame Design Institute (IDI), established in 2013, is a premier
                                design education center located in Jodhpur, Rajasthan. Founded by a
                                group of artists,
                                IDI offers comprehensive coaching for various
                                design entrance examinations, including NIFT, NID, and UCEED.
                            </p>

                        </div>

                        <div className="text-white md:border-r-[1] pr-3 h-[100%] border-white">
                            <h2 className="text-[24px] font-semibold mb-4 uppercase  ">Connect with us</h2>
                            <p className="my-[5px] text-[18px]">EMAIL : <span className="hover:underline duration-100 cursor-pointer">Inframe@gmail.com</span></p>
                            <p className="my-[5px] text-[18px]">PHONE : <span className="hover:underline duration-100 cursor-pointer">+91-8079025145</span></p>
                            <ul className="flex flex-wrap gap-5 items-center my-[15px] text-[18px]">
                                <li className="cursor-pointer hover:text-gray-300 duration-100">Terms and condition &nbsp; | </li>
                                <li className="cursor-pointer hover:text-gray-300 duration-100">Privacy Policy &nbsp; | </li>
                                <li className="cursor-pointer hover:text-gray-300 duration-100">Refund Policy &nbsp; |</li>
                                <Link href={'/contact-us'}><li className="cursor-pointer hover:text-gray-300 duration-100">Contact Us &nbsp; |</li></Link>
                                <Link href="/about-us"><li className="cursor-pointer hover:text-gray-300 duration-100">About Us</li></Link>
                            </ul>
                        </div>
                        <div className="text-white  h-[100%]">
                            <h3 className="text-[24px] font-semibold uppercase">Social Channels</h3>
                            <div className="flex items-center gap-5 text-[25px] cursor-pointer my-[10px] mr-1">
                                <FaYoutube className="hover:text-gray-400 duration-100" />
                                <FaFacebookSquare className="hover:text-gray-400 duration-100" />
                                <RiInstagramFill className="hover:text-gray-400 duration-100" />
                                <FaTwitterSquare className="hover:text-gray-400 duration-100" />
                                <FaLinkedin className="hover:text-gray-400 duration-100" />
                            </div>
                            <h3 className="text-[20px] mt-[25px] font-semibold uppercase">Get the app for better Experience</h3>
                            <img className="w-[180] -ml-3 cursor-pointer object-cover" src="https://cdn.toprankers.net.in/images/google-play-badge1699151081.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-black text-white">
                <p className="text-center py-[15px] border-t-[1] border-white">© Copyrights 2013 - 2025 IDI Jodhpur. All Rights Reserved</p>
            </div>
        </>
    )
}