"use client";
import React, { useState } from "react";
import { VscTriangleRight } from "react-icons/vsc";

import {
  FaAngleDown,
  FaAngleRight,
  FaAngleUp,
  FaChevronDown,
  FaClosedCaptioning,
} from "react-icons/fa";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { MdClose } from "react-icons/md";
import UserControl from "./UserControl";
import MegaMenu from "../homePageComponents/MegaMenu";
import { megaMenuData } from "../ApiData/categoryApi";
import Link from "next/link";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activePage, setActivePage] = useState('');
  const [MegaMenuOpen, setMegaMenuOpen] = useState(false)


  return (
    <header className="sticky top-0 z-[100] bg-white">
      {activePage && (
        <div className="w-[100%] h-[100vh] fixed top-0 left-0 bg-[rgba(0,0,0,0.8)] z-[40]"></div>
      )}

      {activePage && (
        <UserControl activePage={activePage} setActivePage={setActivePage} />
      )}
      {/* header for pc */}
      <div className="w-full shadow-lg z-[100] lg:block hidden px-6">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between py-[0px]">
          <div className="flex items-center gap-5">
            <img
              className="w-[160px] h-[70] object-cover"
              src="/logo.jpg"
              alt=""
            />
            <button onClick={() => setMegaMenuOpen(!MegaMenuOpen)} className={`${MegaMenuOpen ? 'bg-red-600 text-white' : 'bg-white'} flex items-center  gap-2 border-[2px] border-red-600 rounded-[10px] px-[15px] py-[8px] text-red-600    cursor-pointer  font-semibold duration-300 hover:bg-red-600 hover:text-white hover:border-transparent`}>
              All Courses <FaAngleDown className={`${MegaMenuOpen ? 'rotate-180' : 'rotate-0'} duration-200`} />
              <MegaMenu MegaMenuOpen={MegaMenuOpen} setMegaMenuOpen={setMegaMenuOpen} />

              {MegaMenuOpen && <div className="absolute top-[100%] z-50 left-0 w-full h-screen bg-[rgba(0,0,0,0.6)] "></div>}
            </button>
          </div>

          {/* mega menu open and close functionality*/}
          <div className="flex items-center gap-5">
            <ul className="flex items-center ">
              {megaMenuData.map((items, index) => {
                const { subCategory } = items
                return (
                  <li key={index} className="text-[14px] font-semibold hover:bg-red-50 px-[10px] py-[35px] duration-300 cursor-pointer uppercase text-gray-500 group">
                    {items.parentCategory}
                    <div className="invisible opacity-0 group-hover:opacity-100 origin-top transition-all brightness-110  duration-300 ease-in-out group-hover:visible absolute top-[100%] left-1/2 -translate-x-1/2 w-[1100px] h-auto bg-white shadow-2xl border-[1px] border-gray-300 grid grid-cols-4 gap-4 p-5 rounded-b-[35px]">
                      {subCategory.map((subCat, ind) => {
                        const { subSubCategory } = subCat
                        return (
                          <ul key={ind}>
                            <li className="text-[20px] uppercase text-red-600  mb-2">
                              {subCat.name}
                            </li>
                            <ul>
                              {subSubCategory.map((subSubCat, indx) => {
                                const { courses } = subSubCat
                                return (
                                  <ul key={indx}>
                                    <li className="text-[18px] capitalize my-4 ml-2 text-gray-700 flex items-center  gap-1"><VscTriangleRight /> {subSubCat.name}</li>
                                    {courses.map((course, indexs) => {
                                      return (
                                        <Link href={`/course/${course.toLowerCase().replace(/[^a-zA-Z0-9]/g, "-")}`}><li key={indexs} className="ml-8 my-[10px] text-gray-600 hover:text-red-600 duration-300">{course}</li></Link>
                                      )
                                    })}
                                  </ul>
                                )
                              })}

                            </ul>
                          </ul>
                        )
                      })}
                    </div>
                  </li>
                )
              })}
            </ul>

            <button
              onClick={() => {
                setActivePage("login")
                setMegaMenuOpen(false)
              }}
              className="bg-red-600  duration-300 cursor-pointer px-[25px] rounded-[10px] hover:bg-gray-700 py-[10px] text-white  text-[16px]"
            >
              Login / Register
            </button>
          </div>
        </div>
      </div>

      {/* header for mobile */}
      <div className="lg:hidden block">
        <div className="flex items-center justify-between gap-0 py-[20px] px-2 shadow-xl">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="text-[30px]"
            >
              <HiOutlineBars3CenterLeft />
            </button>
            <img
              className="w-[100px] object-cover"
              src="https://inframestudios.co.nz/wp-content/uploads/2025/01/Copy-of-Original-size-inframe-studios-removebg-preview-removebg-preview.png"
              alt=""
            />
          </div>
          <button
            onClick={() => {
              setActivePage("login")
              setMegaMenuOpen(false)
            }}
            className="bg-red-600 hover:bg-red-500 duration-300 cursor-pointer px-[25px] rounded-[10px] py-[5px] text-white text-[16px]"
          >
            Login
          </button>
        </div>
        <div
          className={`${mobileMenu ? "left-0" : "-left-[100%]"
            } duration-300 fixed top-0 w-[100%] h-[150vh] bg-white px-3 py-8`}
        >
          <div className="flex justify-between pr-[6px]">
            <img
              className="w-[200px] object-cover"
              src="https://inframestudios.co.nz/wp-content/uploads/2025/01/Copy-of-Original-size-inframe-studios-removebg-preview-removebg-preview.png"
              alt=""
            />
            <button
              onClick={() => setMobileMenu(false)}
              className="text-[30px] "
            >
              <MdClose />
            </button>
          </div>
          <ul className="px-3">
            <li className="my-[35px] text-[22px] border-b-[1px] border-gray-100 pb-2 flex items-center gap-1 justify-between">
              All Courses <FaAngleRight />
            </li>
            <li className="my-[35px] text-[22px] border-b-[1px] border-gray-100 pb-2">
              Online Courses
            </li>
            <li className="my-[35px] text-[22px] border-b-[1px] border-gray-100 pb-2">
              Offline Courses
            </li>
            <li className="my-[35px] text-[22px] border-b-[1px] border-gray-100 pb-2">
              Study Materials
            </li>
            <li className="my-[35px] text-[22px] border-b-[1px] border-gray-100 pb-2">
              Free Resources
            </li>
            <li className="my-[35px] text-[22px] border-b-[1px] border-gray-100 pb-2">
              Test Series
            </li>
            <button
              onClick={() => {
                setActivePage("login");
                setMobileMenu(false);
                setMegaMenuOpen(false)
              }}
              className="w-full bg-red-600 hover:bg-gray-900 duration-300 text-white rounded-[10px] py-[10px] text-[22px]"
            >
              Login / Register
            </button>
          </ul>
        </div>
      </div>
    </header>
  );
}
