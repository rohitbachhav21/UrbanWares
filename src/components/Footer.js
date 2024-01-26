import React from 'react'
import logo from "../images/Logo.png"
import useSmoothScroll from "./useSmoothScroll";

const Footer = () => {

    const scrollToHelpSection = useSmoothScroll('helpSection')
    const scrollToContactSection = useSmoothScroll('contactSection')
    const scrollToFeedbackSection = useSmoothScroll('feedbackSection')
    const scrollToAboutSection = useSmoothScroll('aboutSection')

    return (
        <div>

            <footer className="bg-white rounded-lg shadow dark:bg-gray-200 m-4 ">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                            <img src={logo} className="h-11 mr-3 rounded-sm" alt=" Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">UrbanWare</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 ">
                            <li>
                                <div onClick={scrollToAboutSection} className="mr-4 hover:underline md:mr-6 cursor-pointer ">About</div>
                            </li>
                            <li>
                                <div onClick={scrollToContactSection} className="mr-4 hover:underline md:mr-6 cursor-pointer">Contact</div>
                            </li>
                            <li>
                                <div onClick={scrollToFeedbackSection} className="mr-4 hover:underline md:mr-6 cursor-pointer ">Feedback</div>
                            </li>
                            <li>
                                <div onClick={scrollToHelpSection} className="hover:underline cursor-pointer">Help</div>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm  sm:text-center text-black">© 2023 <a href="" className="hover:underline">UrbanWare™</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </div>
    )
}

export default Footer
