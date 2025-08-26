'use client'
import Link from "next/link";
import Image from 'next/image'

export default function Contact() {
    const socialApps = [
        {
            link: "https://www.youtube.com/channel/UCK_0MkRS4bmfyr3KLxi9-VA",
            name: "Youtube",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png",
        },
        {
            link: "https://www.instagram.com/inframejodhpur/?hl=en",
            name: "Instagram",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png",
        },
        {
            link: "https://www.linkedin.com/company/inframe-school-of-art-design-business/?viewAsMember=true",
            name: "LinkedIn",
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/960px-LinkedIn_logo_initials.png",
        },
        {
            link: "https://www.facebook.com/Inframecollege/",
            name: "Facebook",
            src: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png",
        },
    ];
    return (
        <div className="w-full bg-gray-100 ">
            <div className="max-w-[1320]  lg:py-[60px] py-[30px] mx-auto lg:px-6 px-3 ">
                <div className="grid grid-cols-[67%_auto] gap-7">
                    <iframe
                        className="rounded-[20px] border-[4] border-black/20"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.737609116669!2d72.98366907635425!3d26.27017807703602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x67b93f41c21a1b33%3A0x75c39459005a6414!2sInframe%20School%20of%20Art%2C%20Design%20%26%20Business!5e0!3m2!1sen!2sin!4v1756102660087!5m2!1sen!2sin"
                        width="100%"
                        height="550"
                    ></iframe>

                    <div className="w-[100%] bg-gradient-to-r from-black/80 via-black/60 to-black/95  text-white p-6 rounded-[25px] ">
                        <div className="text-center mx-auto">
                            <h3 className="text-[30px] font-semibold uppercase">
                                Scan To Access Location
                            </h3>
                            <p className="text-center mt-3 leading-[30px] text-[18px]">
                                Scan the QR code below to get directions on Google Maps:
                            </p>
                        </div>
                        <Image
                            className="w-[220px] mt-6 h-[220px] object-contain mx-auto"
                            src="https://www.inframeschool.com/_next/image?url=%2Fqrcode_164435803_146bf5935e9cfa0ac7b362dd16065180.png&w=256&q=75"
                            alt="QR Code"
                        />
                    </div>
                </div>
            </div>
            <h3
                style={{
                    background:
                        "linear-gradient(160deg,rgba(196, 41, 41, 1) 0%, rgba(140, 0, 0, 1) 50%, rgba(230, 39, 39, 1) 100%)",
                }}
                className="px-6 lg:text-[50px] text-5xl text-center font-bold uppercase text-white py-7 "
            >
                Get in Touch
            </h3>
            <div className="max-w-[1320] bg-white mx-auto lg:grid grid-cols-3 gap-10 lg:px-6 px-3 py-[30px]">
                <div
                    style={{
                        background:
                            "linear-gradient(90deg,rgba(176, 14, 14, 1) 0%, rgba(168, 44, 44, 1) 50%, rgba(79, 0, 0, 1) 100%)",
                    }}
                    className="w-full rounded-[8] text-white p-7"
                >
                    <h3 className="text-[35px] mb-2  font-semibold">Visit Us</h3>
                    <p className="mb-3 text-[25px]">We are located at :</p>
                    <p className="leading-[30px] bg-white/5  duration-500 text-[18px]  text-white p-3 rounded">
                        Address: 09, Pal Link Rd, Marudhar Nagar, Kamla Nehru Nagar, Shyam
                        Nagar, Jodhpur, Rajasthan 342008
                    </p>
                    <ul className="mt-5">
                        <li className="text-[18px] flex items-center gap-2 mb-2 tracking-wide font-extralight">
                            Admissions : <span>+91 9649 9649 37</span>
                        </li>
                        <li className="text-[18px] flex items-center gap-2 mb-2 tracking-wide font-extralight">
                            Admin : <span>+91 9649 9649 70</span>
                        </li>
                        <li className="text-[18px] flex items-center gap-2 mb-2 tracking-wide font-extralight">
                            Email : <span>info@inframeschool.com</span>
                        </li>
                        <li className="text-[18px] flex items-center gap-2 mb-2 tracking-wide font-extralight">
                            Careers : <span>hr@inframeschool.com</span>
                        </li>
                    </ul>
                </div>

                <div
                    className="w-full rounded-lg text-white p-8"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(176,14,14,1) 0%, rgba(168,44,44,1) 50%, rgba(79,0,0,1) 100%)",
                    }}
                >
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-[45px]">
                        Connect Us on Social Media
                    </h3>
                    {/* //Stay updated with the latest news, product updates, and community stories. Follow us across platforms and become part of our growing digital family. We share valuable tips, live sessions, behind-the-scenes, and much more! */}
                    <ul className="">
                        {socialApps.map((item, index) => {
                            return (
                                <Link key={index} target="_" href={item.link}><li  className="flex items-center gap-3 text-lg md:text-xl font-medium uppercase my-4 cursor-pointer hover:underline transition duration-200">
                                    <Image
                                        src={item.src}
                                        alt="YouTube logo"
                                        className="w-7 h-7 object-contain"
                                    />
                                    {item.name}
                                </li></Link>
                            )
                        })}
                    </ul>
                    <p className="mt-6 leading-[30px]">
                        Stay updated with the latest news, product updates, and community
                        stories. Follow us across platforms and become part of our growing
                        digital family.
                    </p>
                </div>

                <form
                    style={{
                        background:
                            "linear-gradient(90deg,rgba(176, 14, 14, 1) 0%, rgba(168, 44, 44, 1) 50%, rgba(79, 0, 0, 1) 100%)",
                    }}
                    className="w-[100%] bg-white text-white shadow-2xl  p-7 rounded-[10px]"
                >
                    <h3 className="text-[35px] mb-2  font-semibold">Contact Us</h3>
                    <div className="mb-[10px]">
                        <p>Name*</p>
                        <input
                            placeholder="@John Doe"
                            className="w-full py-[10px] ps-2  focus:outline-none focus:ring-1 focus:ring-white border-[1px] rounded-[5]"
                        />
                    </div>
                    <div className="mb-[10px]">
                        <p>Email*</p>
                        <input
                            placeholder="you@example.com"
                            className="w-full py-[10px] ps-2  focus:outline-none focus:ring-1 focus:ring-white border-[1px] rounded-[5]"
                        />
                    </div>
                    <div className="mb-[10px]">
                        <p>Message*</p>
                        <textarea
                            placeholder="Write your message here..."
                            className="w-full ps-2 focus:outline-none focus:ring-1 focus:ring-white min-h-[100] py-[10px] border-[1px] rounded-[5]"
                        />
                    </div>
                    <button className="w-full py-[10px]  font-semibold focus:outline-none focus:ring-1 focus:ring-white bg-black/60 hover:bg-white  mt-2 rounded-[5px] text-white  uppercase cursor-pointer text-[17px]  hover:text-black duration-300 ">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
