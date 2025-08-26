'use client'
import Image from 'next/image'
export default function About() {
    return (
        <div className="w-full bg-white">
            <div className="lg:py-[30px] py-[30px]">
                <h3
                    style={{ background: 'linear-gradient(135deg, rgba(230, 39, 39, 1) 0%, rgba(140, 0, 0, 0.95) 45%, rgba(90, 0, 0, 1) 100%)' }}
                    className="px-6 lg:text-[35px] text-[25px] font-bold uppercase text-white py-5  mb-5">A Platform That Upskills Students</h3>
                <div className="max-w-[1320] mx-auto lg:px-6 px-3  ">
                    <div className="grid grid-cols-2 gap-12">
                        <div>
                            <Image alt='' className="w-[100%] my-[30px] h-[300px] object-cover rounded-2xl" src="/mockTest.JPG" />
                            <div className="grid grid-cols-2 my-[25px] gap-5">
                                <Image alt='' className="object-cover rounded-xl" src="/mockTest.JPG" />
                                <Image alt='' className="object-cover rounded-xl" src="/mockTest.JPG" />
                            </div>
                            <div className="grid grid-cols-2 my-[25px] gap-5">
                                <Image alt='' className="object-cover rounded-xl" src="/mockTest.JPG" />
                                <Image alt='' className="object-cover rounded-xl" src="/mockTest.JPG" />
                            </div>
                        </div>
                        <div>

                            <div className="grid grid-cols-2 my-[25px] gap-5">
                                <Image alt='' className="object-cover rounded-xl" src="/mockTest.JPG" />
                                <Image alt='' className="object-cover rounded-xl" src="/mockTest.JPG" />
                            </div>
                            <div className="grid grid-cols-2 my-[25px] gap-5">
                                <Image alt='' className="object-cover rounded-xl" src="/mockTest.JPG" />
                                <Image alt='' className="object-cover rounded-xl" src="/mockTest.JPG" />
                            </div>
                            <Image alt='' className="w-[100%] my-[35px] h-[300px] object-cover rounded-2xl" src="/mockTest.JPG" />
                        </div>


                    </div>
                </div>
            </div>
            <div className="">
                <h3
                    style={{ background: 'linear-gradient(135deg, rgba(230, 39, 39, 1) 0%, rgba(140, 0, 0, 0.95) 45%, rgba(90, 0, 0, 1) 100%)' }}
                    className="px-6 lg:text-[35px] text-[25px] font-bold uppercase text-white py-5  mb-5">What We Provide</h3>
            </div>
        </div>
    )
}