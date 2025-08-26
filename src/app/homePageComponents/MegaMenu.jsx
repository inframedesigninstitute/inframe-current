import Link from "next/link";
import { useState } from "react";
import { megaMenuData } from "../categoryData/categoryApi";
import MegaMenuContent from "./MegaMenuContent";

export default function MegaMenu({ MegaMenuOpen, setMegaMenuOpen }) {
    const [activeTab, setActiveTab] = useState("onlineCourse");

    const tabMap = {
        onlineCourse: "Online Courses",
        offlineCourse: "Offline courses",
        studyMaterial: "Study Material",
        testSeries: "Test Series",
        freeRes: "Free Resources",
    };

    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className={`${MegaMenuOpen
                ? "translate-y-0 block opacity-100 visible"
                : "invisible -translate-y-10 opacity-0 hidden"
                } absolute duration-400 transition-all ease-in-out top-[100%] left-[170px] bg-white shadow-2xl rounded-b-[15px] w-[900px] origin-top h-[auto] z-[100] px-5 py-5 lg:block hidden text-gray-900`}
        >
            <div className="grid grid-cols-[25%_auto] gap-5">
                <div className="border-0">
                    <ul>
                        <li onClick={() => setActiveTab("onlineCourse")} className="menu-tab w-full hover:bg-gray-300 duration-300 rounded-[10px] text-[17px] text-start px-2 py-3">Online Course</li>
                        <li onClick={() => setActiveTab("offlineCourse")} className="menu-tab w-full hover:bg-gray-300 duration-300 rounded-[10px] text-[17px] text-start px-2 py-3">Offline Course</li>
                        <li onClick={() => setActiveTab("studyMaterial")} className="menu-tab w-full hover:bg-gray-300 duration-300 rounded-[10px] text-[17px] text-start px-2 py-3">Study Material</li>
                        <li onClick={() => setActiveTab("testSeries")} className="menu-tab w-full hover:bg-gray-300 duration-300 rounded-[10px] text-[17px] text-start px-2 py-3">Test Series</li>
                        <li onClick={() => setActiveTab("freeRes")} className="menu-tab w-full hover:bg-gray-300 duration-300 rounded-[10px] text-[17px] text-start px-2 py-3">Free Resources</li>
                    </ul>
                </div>
                <div className="h-[80vh] overflow-y-scroll">
                    <MegaMenuContent
                        category={tabMap[activeTab]}
                        setMegaMenuOpen={setMegaMenuOpen}
                    />
                </div>
            </div>
        </div>
    );
}
