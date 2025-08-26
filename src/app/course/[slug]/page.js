"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  FaChevronDown,
  FaHandPaper,
  FaMinusCircle,
  FaPlusCircle,
  FaVideo,
} from "react-icons/fa";
import { PiRecordFill, PiStudentBold } from "react-icons/pi";

export default function CoursePage() {
  let slug = useParams().slug.replace(/[^a-zA-Z0-9]/g, " ");
  const [currentFaqId, setCurrentFaqId] = useState(null);

  let faqs = [
    {
      id: "1",
      question: "What is inframe?",
      answer:
        "inframe is an online learning platform that offers skill-based courses to help you improve your professional abilities inframe is an online learning platform that offers skill-based courses to help you improve your professional abilitiesinframe is an online learning platform that offers skill-based courses to help you improve your professional abilities.",
    },
    {
      id: "2",
      question: "How can I enroll in a course?",
      answer:
        "You can enroll by selecting your preferred course on our website and clicking the &#39;Buy Now&#39; or &#39;Add to Cart&#39; button.",
    },
    {
      id: "3",
      question: "Are the courses available in Hindi?",
      answer:
        "Yes, many of inframe is an online learning platform that offers skill-based courses to help you improve your professional abilitiesinframe is an online learning platform that offers skill-based courses to help you improve your professional abilitiesour courses are available in Hindi to make learning easier for regional students.",
    },
    {
      id: "4",
      question: "Do I get a certificate after course completion?",
      answer:
        "Yes, we proinframe is an online learning platform that offers skill-based courses to help you improve your professional abilitiesvide a certificate upon completion of all courses, which you can add to your resume.",
    },
    {
      id: "5",
      question: "Can I access the courses on mobile devices?",
      answer:
        "Absolutelyinframe is an online learning platform that offers skill-based courses to help you improve your professional abilitiesinframe is an online learning platform that offers skill-based courses to help you improve your professional abilities, our courses work smoothly on desktops, tablets, and mobile devices.",
    },
    {
      id: "6",
      question: "Is infraomplete the courses?",
      answer:
        "No, you get lifetime access and can complete the courses at your own pace.",
    },
    {
      id: "7",
      question: "What kind of support is available during the course?",
      answer:
        "We offer tecinframe is an online learning platform that offers skill-based courses to help you improve your professional abilitiesinframe is an online learning platform that offers skill-based courses to help you improve your professional abilitieshnical support and doubt clearing sessions to ensure a smooth learning experience.",
    },
  ];

  //   let courses = [
  //     "nift course",
  //     "nata course",
  //     "nift course",
  //     "nata course",
  //     "nift course",
  //     "nata course",
  //     "nift course",
  //     "nata course",
  //   ];

  return (
    <div className="w-full">
      <div className="max-w-[1320] mx-auto lg:px-6 px-3 lg:py-[0] sm:py-[20]">
        {/* <ul
                    className={`grid grid-cols-10 items-center bg-gray-300 -skew-x-[10deg]`}
                >
                    {courses.map((item, index) => {
                        return (
                            <Link href={`/course/${item.replaceAll(/[^a-zA-Z0-9]/g, "-")}`}>
                                <li
                                    key={index}
                                    className="py-[10px] px-[15px] cursor-pointer hover:bg-red-600 hover:text-white duration-300"
                                >
                                    {item}
                                </li>
                            </Link>
                        );
                    })}
                </ul> */}

        <div className="w-full  grid lg:grid-cols-[40%_auto] items-center gap-2 my-[30px]">
          <div className="sm:p-5 shadow-2xl  rounded-[0px]">
            <iframe
              className="rounded-[25px]"
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/A6CTW1YX2iI"
              title="NIFT 2025: How to Crack NIFT Exam in 8 Months? | Complete Preparation Strategy"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full max-w-4xl mx-auto px-4">
            {/* Heading */}
            <h3 className="text-3xl capitalize sm:text-[35px] font-bold text-red-700 mb-2">
              {slug}
            </h3>

            {/* Description */}
            <p className="text-gray-800 text-[18px] lg:text-start text-justify sm:tracking-normal tracking-tighter leading-[30px] mb-6">
              NIFT course is an online program designed to enhance students&#39;
              abilities in fashion and design. This structured curriculum
              includes daily recorded lectures, live mentorship, and mock tests
              to ensure deep conceptual clarity and competitive edge.
            </p>

            {/* Highlights */}
            <ul className="flex flex-wrap lg:justify-start sm:justify-center gap-4 my-6">
              {[
                {
                  icon: <FaHandPaper className="text-[20px]" />,
                  text: "3+ Mock Tests",
                },
                {
                  icon: <PiStudentBold className="text-[20px]" />,
                  text: "Mentor Support",
                },
                {
                  icon: <PiRecordFill className="text-[20px]" />,
                  text: "Daily Recordings",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 bg-red-600 text-white px-4 py-3 rounded-lg shadow-sm text-[16px] hover:scale-[1.03] transition duration-300"
                >
                  {item.icon}
                  {item.text}
                </li>
              ))}
            </ul>

            {/* Price */}
            <span className="text-[35px]  font-extrabold text-red-700 block mb-6">
              ₹ 1399/-
            </span>

            {/* Buttons */}
            <div className="grid sm:grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 bg-gray-300 text-red-700 hover:bg-red-600 hover:text-white transition duration-300 py-3 rounded-md text-[20px] font-medium">
                <FaVideo />
                Watch Demo
              </button>
              <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition duration-300 py-3 rounded-md text-[20px] font-semibold">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        {/* <div className="w-full">
                    {faqs.map((item, index) => {
                        return (
                            <div className="my-[15px]">
                                <h3
                                    onClick={() => setCurrentFaq(item.id)}
                                    className="py-[15px] text-[20px] bg-gray-300 px-[15px] rounded-[10px] cursor-pointer flex justify-between items-center"
                                >
                                    Which things I learn in this course ?
                                    <FaPlusCircle />
                                </h3>
                                <div
                                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out bg-gray-300 rounded-b-[10px] px-3 ${item.id === currentFaq ? "max-h-[500px] py-3" : "max-h-0 py-0"}`}
                                >
                                    in this course you will learn online trading and some extra
                                    knowledge of behind it that how things are works in this
                                    field. in this course you will learn online trading and some
                                    extra knowledge of behind it that how things are works in this
                                    field. in this course you will learn online trading and some
                                    extra knowledge of behind it that how things are works in this
                                    field. in this course you will learn online trading and some
                                    extra knowledge of behind it that how things are works in this
                                    field.
                                </div>
                            </div>
                        );
                    })}
                </div> */}

        <div className="w-full lg:p-3 lg:my-[60px] my-[30px] bg-gray-200  text-white rounded-[10px]">
          <div className="max-w-7xl mx-auto py-[30px] p-5 rounded-[10px]  text-white">
            <div className="">
              <h4 className="font-semibold mb-5 tracking-tight text-3xl text-black">
                Frequently Asked Questions
              </h4>

              {faqs.map((item, index) => {
                return (
                  <div key={index}>
                    <h6
                      onClick={() => {
                        setCurrentFaqId(item.id);
                        currentFaqId === item.id && setCurrentFaqId(0);
                      }}
                      className={`${item.id === currentFaqId ? "" : ""
                        } w-[100%] lg:text-[20px] text-[16px] hover:text-red-600 text-black py-[18px]  duration-200 cursor-pointer border-b-[1px] border-[#b1b1b1] mt-[0px] grid gap-1 grid-cols-[95%_auto] items-center `}
                    >
                      {item.question}
                      {item.id === currentFaqId ? (
                        <FaMinusCircle />
                      ) : (
                        <FaPlusCircle />
                      )}
                    </h6>
                    <div
                      className={`${currentFaqId === item.id
                        ? "h-auto opacity-[1]"
                        : "h-0 scale-0 opacity-0"
                        } text-black rounded-b-lg my-[10px]  text-[18px] left-0  w-[100%]  `}
                    >
                      {item.answer}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
