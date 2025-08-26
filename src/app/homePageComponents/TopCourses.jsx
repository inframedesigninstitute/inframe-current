"use client";
import { FaIndianRupeeSign } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/pagination';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function TopCourses() {
  return (
    <div className="w-full ">
      <div className="max-w-[1320px] mx-auto">
        <h3 style={{ background: 'linear-gradient(135deg, rgba(230, 39, 39, 1) 0%, rgba(140, 0, 0, 0.95) 45%, rgba(90, 0, 0, 1) 100%)' }} className="px-6 lg:text-[35px] text-[25px] text-center font-bold uppercase text-white py-5  mb-5">Top Selling courses</h3>
        <OnlineCourses />
        <OfflineCourses />
        <StudyMaterial />
        <TestSeries />
      </div>
    </div>
  );
}

export function OnlineCourses() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  let onlineCourses = [
    {
      title: "Interior Design Course",
      description:
        "Master the art of interior design by learning how to create cohesive room themes, apply color theory, and develop skills to elevate your design perspective.",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "1399",
    },
    {
      title: "Graphic Design Course",
      description:
        "Learn the fundamentals of visual communication, typography, and branding using tools like Adobe Photoshop and Illustrator to create stunning digital designs.",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "1599",
    },
    {
      title: "Digital Marketing Course",
      description:
        "Gain expertise in SEO, social media strategy, content marketing, and analytics to effectively promote brands and drive online engagement more extra features .",
      image:
        "https://blog.ipleaders.in/wp-content/uploads/2021/05/online-course-blog-header.jpg",
      price: "799",
    },
  ];
  return (
    <div className="my-[0px] lg:px-6">
      <h3 className="text-gray-900 lg:text-start text-center font-bold text-[25px] lg:mb-10 my-5 p-3">
        Online <span className="text-red-600"> Best Selling </span> Courses
      </h3>
      <div className="sm:hidden">
        <Slider {...sliderSettings}>
          {onlineCourses.map((item, index) => (
            <div key={index} className="px-2">
              <div className="rounded-[10px] shadow-lg group overflow-hidden hover:shadow-xl">
                <img
                  className="w-full h-[250px] object-cover rounded-t-[10px]"
                  src={item.image}
                  alt=""
                />
                <div className="p-6">
                  <h2 className="text-[23px] font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700">{item.description}</p>
                  <p className="text-[28px] mt-2 font-semibold flex items-center gap-1 text-gray-950">
                    <FaIndianRupeeSign /> {item.price}/-
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <button className="bg-gray-300 hover:bg-gray-600 cursor-pointer transition duration-300 py-[10px] rounded-lg hover:text-white font-medium">
                      Add to Cart
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 transition duration-300 cursor-pointer py-[10px] rounded-lg text-white font-medium">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Large screens: Grid */}
      <div className="hidden sm:grid grid-cols-3 gap-12 my-[40px] ">
        {onlineCourses.map((item, index) => (
          <div key={index} className="rounded-[10px] shadow-lg group overflow-hidden hover:shadow-xl">
            <img
              className="w-full h-[200px] object-cover duration-300  group-hover:scale-[1.1] rounded-t-[10px]"
              src={item.image}
              alt=""
            />
            <div className="p-6">
              <h2 className="text-[23px] font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
              <p className="text-[28px] mt-2 font-semibold flex items-center gap-1 text-gray-950">
                <FaIndianRupeeSign /> {item.price}/-
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <button className="bg-gray-300 hover:bg-gray-600 cursor-pointer transition duration-300 py-[10px] rounded-lg hover:text-white font-medium">
                  Add to Cart
                </button>
                <button className="bg-red-600 hover:bg-red-700 transition duration-300 cursor-pointer py-[10px] rounded-lg text-white font-medium">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function OfflineCourses() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  let OfflineCourse = [
    {
      title: "Interior Design Course",
      description:
        "Master the art of interior design by learning how to create cohesive room themes, apply color theory, and develop skills to elevate your design perspective.",
      image:
        "https://www.shutterstock.com/image-photo/training-courses-business-concept-stack-260nw-549736798.jpg",
      price: "1399",
    },
    {
      title: "Graphic Design Course",
      description:
        "Learn the fundamentals of visual communication, typography, and branding using tools like Adobe Photoshop and Illustrator to create stunning digital designs.",
      image:
        "https://www.shutterstock.com/image-photo/training-courses-business-concept-stack-260nw-549736798.jpg",
      price: "1599",
    },
    {
      title: "Digital Marketing Course",
      description:
        "Gain expertise in SEO, social media strategy, content marketing, and analytics to effectively promote brands and drive online engagement more extra features .",
      image:
        "https://www.shutterstock.com/image-photo/training-courses-business-concept-stack-260nw-549736798.jpg",
      price: "799",
    },
  ];
  return (
    <div className="my-[0px] lg:px-6">
      <h3 className="text-gray-900 lg:text-start text-center font-bold text-[25px] lg:mb-10 my-5">
        Offline <span className="text-red-600"> Best Selling </span> Courses
      </h3>
      <div className="sm:hidden">
        <Slider {...sliderSettings}>
          {OfflineCourse.map((item, index) => (
            <div key={index} className="px-2">
              <div className="rounded-[10px] shadow-lg group overflow-hidden hover:shadow-xl">
                <img
                  className="w-full h-[250px] object-cover rounded-t-[10px]"
                  src={item.image}
                  alt=""
                />
                <div className="p-6">
                  <h2 className="text-[23px] font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700">{item.description}</p>
                  <p className="text-[28px] mt-2 font-semibold flex items-center gap-1 text-gray-950">
                    <FaIndianRupeeSign /> {item.price}/-
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <button className="bg-gray-300 hover:bg-gray-600 cursor-pointer transition duration-300 py-[10px] rounded-lg hover:text-white font-medium">
                      Add to Cart
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 transition duration-300 cursor-pointer py-[10px] rounded-lg text-white font-medium">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Large screens: Grid */}
      <div className="hidden sm:grid grid-cols-3 gap-12 my-[40px]">
        {OfflineCourse.map((item, index) => (
          <div key={index} className="rounded-[10px] shadow-lg group overflow-hidden hover:shadow-xl">
            <img
              className="w-full h-[200px] object-cover duration-300  group-hover:scale-[1.1] rounded-t-[10px]"
              src={item.image}
              alt=""
            />
            <div className="p-6">
              <h2 className="text-[23px] font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
              <p className="text-[28px] mt-2 font-semibold flex items-center gap-1 text-gray-950">
                <FaIndianRupeeSign /> {item.price}/-
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <button className="bg-gray-300 hover:bg-gray-600 cursor-pointer transition duration-300 py-[10px] rounded-lg hover:text-white font-medium">
                  Add to Cart
                </button>
                <button className="bg-red-600 hover:bg-red-700 transition duration-300 cursor-pointer py-[10px] rounded-lg text-white font-medium">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function StudyMaterial() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  let studyMaterialCourses = [
    {
      title: "Interior Design Course",
      description:
        "Master the art of interior design by learning how to create cohesive room themes, apply color theory, and develop skills to elevate your design perspective.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFSxQxzOxDu-OvGxtjEBNKTh5wi7N0VUPsA&s",
      price: "1399",
    },
    {
      title: "Graphic Design Course",
      description:
        "Learn the fundamentals of visual communication, typography, and branding using tools like Adobe Photoshop and Illustrator to create stunning digital designs.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFSxQxzOxDu-OvGxtjEBNKTh5wi7N0VUPsA&s",
      price: "1599",
    },
    {
      title: "Digital Marketing Course",
      description:
        "Gain expertise in SEO, social media strategy, content marketing, and analytics to effectively promote brands and drive online engagement more extra features .",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFSxQxzOxDu-OvGxtjEBNKTh5wi7N0VUPsA&s",
      price: "799",
    },
  ];
  return (
    <div className="my-[0px] lg:px-6">
      <h3 className="text-gray-900 lg:text-start text-center font-bold text-[25px] lg:mb-10 my-5">
        Offline <span className="text-red-600"> Best Selling </span> Courses
      </h3>
      <div className="sm:hidden">
        <Slider {...sliderSettings}>
          {studyMaterialCourses.map((item, index) => (
            <div key={index} className="px-2">
              <div className="rounded-[10px] shadow-lg group overflow-hidden hover:shadow-xl">
                <img
                  className="w-full h-[250px] object-cover rounded-t-[10px]"
                  src={item.image}
                  alt=""
                />
                <div className="p-6">
                  <h2 className="text-[23px] font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700">{item.description}</p>
                  <p className="text-[28px] mt-2 font-semibold flex items-center gap-1 text-gray-950">
                    <FaIndianRupeeSign /> {item.price}/-
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <button className="bg-gray-300 hover:bg-gray-600 cursor-pointer transition duration-300 py-[10px] rounded-lg hover:text-white font-medium">
                      Add to Cart
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 transition duration-300 cursor-pointer py-[10px] rounded-lg text-white font-medium">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Large screens: Grid */}
      <div className="hidden sm:grid grid-cols-3 gap-12 my-[40px]">
        {studyMaterialCourses.map((item, index) => (
          <div key={index} className="rounded-[10px] shadow-lg group overflow-hidden hover:shadow-xl">
            <img
              className="w-full h-[200px] object-cover duration-300  group-hover:scale-[1.1] rounded-t-[10px]"
              src={item.image}
              alt=""
            />
            <div className="p-6">
              <h2 className="text-[23px] font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
              <p className="text-[28px] mt-2 font-semibold flex items-center gap-1 text-gray-950">
                <FaIndianRupeeSign /> {item.price}/-
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <button className="bg-gray-300 hover:bg-gray-600 cursor-pointer transition duration-300 py-[10px] rounded-lg hover:text-white font-medium">
                  Add to Cart
                </button>
                <button className="bg-red-600 hover:bg-red-700 transition duration-300 cursor-pointer py-[10px] rounded-lg text-white font-medium">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function TestSeries() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  let TestSeriesCourses = [
    {
      title: "Interior Design Course",
      description:
        "Master the art of interior design by learning how to create cohesive room themes, apply color theory, and develop skills to elevate your design perspective.",
      image:
        "https://www.questpond.com/img/2.png",
      price: "1399",
    },
    {
      title: "Graphic Design Course",
      description:
        "Learn the fundamentals of visual communication, typography, and branding using tools like Adobe Photoshop and Illustrator to create stunning digital designs.",
      image:
        "https://www.questpond.com/img/2.png",
      price: "1599",
    },
    {
      title: "Digital Marketing Course",
      description:
        "Gain expertise in SEO, social media strategy, content marketing, and analytics to effectively promote brands and drive online engagement more extra features .",
      image:
        "https://www.questpond.com/img/2.png",
      price: "799",
    },
  ];

  return (
    <div className="my-[0px] lg:px-6">
      <h3 className="text-gray-900 lg:text-start text-center font-bold text-[25px] lg:mb-10 my-5">
        Test Series <span className="text-red-600"> Best Selling </span> Courses
      </h3>
      <div className="sm:hidden">
        <Slider {...sliderSettings}>
          {TestSeriesCourses.map((item, index) => (
            <div key={index} className="px-2">
              <div className="rounded-[10px] shadow-lg group overflow-hidden hover:shadow-xl">
                <img
                  className="w-full h-[250px] object-cover rounded-t-[10px]"
                  src={item.image}
                  alt=""
                />
                <div className="p-6">
                  <h2 className="text-[23px] font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-700">{item.description}</p>
                  <p className="text-[28px] mt-2 font-semibold flex items-center gap-1 text-gray-950">
                    <FaIndianRupeeSign /> {item.price}/-
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <button className="bg-gray-300 hover:bg-gray-600 cursor-pointer transition duration-300 py-[10px] rounded-lg hover:text-white font-medium">
                      Add to Cart
                    </button>
                    <button className="bg-red-600 hover:bg-red-700 transition duration-300 cursor-pointer py-[10px] rounded-lg text-white font-medium">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Large screens: Grid */}
      <div className="hidden sm:grid grid-cols-3 gap-12 my-[40px]">
        {TestSeriesCourses.map((item, index) => (
          <div key={index} className="rounded-[10px] shadow-lg group overflow-hidden hover:shadow-xl">
            <img
              className="w-full h-[200px] object-cover duration-300  group-hover:scale-[1.1] rounded-t-[10px]"
              src={item.image}
              alt=""
            />
            <div className="p-6">
              <h2 className="text-[23px] font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
              <p className="text-[28px] mt-2 font-semibold flex items-center gap-1 text-gray-950">
                <FaIndianRupeeSign /> {item.price}/-
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <button className="bg-gray-300 hover:bg-gray-600 cursor-pointer transition duration-300 py-[10px] rounded-lg hover:text-white font-medium">
                  Add to Cart
                </button>
                <button className="bg-red-600 hover:bg-red-700 transition duration-300 cursor-pointer py-[10px] rounded-lg text-white font-medium">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}