
import React from "react";
// import { UserButton } from "@clerk/nextjs";
import { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import logo from "../images/Logo.png"
// import { useRouter } from "navigation";
// import router from "next/router";
import { useNavigate } from "react-router-dom";
import useSmoothScroll from "./useSmoothScroll";
import { UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => {
    setIsOpen(!isOpen)
  }

  // const router = useRouter();
  const navigate = useNavigate();

  const scrollToHelpSection = useSmoothScroll('helpSection')
  const scrollToContactSection = useSmoothScroll('contactSection')
  const scrollToFeedbackSection = useSmoothScroll('feedbackSection')
  const scrollToAboutSection = useSmoothScroll('aboutSection')



  return (
    <div>
      <div className="nav w-full flex items-center bg-gray-200 shadow-sm">


        <div className="nav w-full flex items-center justify-between bg-gray-200">
          <div className="p-2 ">
            <img
              src={logo}
              alt="logo"
              width={80}
              height={80}
              className="rounded-lg"
              // onClick={() => router.push("/")}
              onClick={() => navigate("/")}
            />
          </div>

          <div className="hidden md:block">
            <ul className="flex justify-center items-center ">
              <li onClick={scrollToHelpSection} className="p-1 m-4 hover:bg-black hover:text-white hover:rounded-lg cursor-pointer font-semibold">
                Help
              </li>
              <li onClick={scrollToAboutSection} className="p-1 m-4 hover:bg-black hover:text-white hover:rounded-lg cursor-pointer font-semibold">
                About
              </li>
              <li onClick={scrollToContactSection} className="p-1 m-4 hover:bg-black hover:text-white hover:rounded-lg cursor-pointer font-semibold">
                Contact
              </li>
              <li onClick={scrollToFeedbackSection} className="p-1 m-4 hover:bg-black hover:text-white hover:rounded-lg cursor-pointer font-semibold">
                Feedback
              </li>
            </ul>
          </div>

          <div className="flex justify-between items-center hover:cursor-pointer p-2">
            <div className="hidden md:block ">
              <Link to={"/CartItems"} ><ShoppingCartIcon /></Link>
            </div>

            <div className="p-4 hidden md:block">
              <UserButton />
            </div>
          </div>
        </div>
        <div className="space-y-2 m-3 block md:hidden " onClick={openMenu}>
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
        </div>
      </div>
      {isOpen && (<div className="bg-gray-200 md:hidden">
        <ul className='flex flex-col font-bold p-2'>
          <li className='p-2' onClick={scrollToHelpSection}>Help</li>
          <li className='p-2' onClick={scrollToAboutSection}>About Us</li>
          <li className='p-2' onClick={scrollToContactSection}>Contact Us</li>
          <li className='p-2' onClick={scrollToFeedbackSection}>Feedback</li>
        </ul>
      </div>
      )}
    </div>
  );
};

export default Navbar;
