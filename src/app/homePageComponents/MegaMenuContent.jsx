import Link from "next/link";
import { megaMenuData } from "../categoryData/categoryApi";

export default function MegaMenuContent({ category, setMegaMenuOpen }) {
    const categoryData = megaMenuData.find(
        (item) => item.parentCategory === category
    );

    if (!categoryData) return null;

    return (
        <div className="p-0">
            {categoryData.subCategory.map((sub, idx) => (
                <div key={idx} className="w-full h-auto mb-5">
                    <h3 className="border-red-500 border-l-4 bg-red-50 text-red-500 rounded-xl w-full px-[10px] py-[14px]">
                        {sub.name}
                    </h3>
                    <div className="grid grid-cols-3 gap-5 mt-5 w-full">
                        {sub.subSubCategory.map((subSub, subIdx) =>
                            subSub.courses.map((course, courseIdx) => (
                                <Link
                                    key={courseIdx}
                                    href={`/course/${course
                                        .toLowerCase()
                                        .replace(/[^a-zA-Z0-9]/g, "-")}`}
                                >
                                    <button
                                        onClick={() => setMegaMenuOpen(false)}
                                        className="w-full text-left bg-gray-100 border-l-4 border-red-500 hover:border-transparent hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300 rounded-xl px-4 py-2 text-sm font-medium"
                                    >
                                        {course}
                                    </button>
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
