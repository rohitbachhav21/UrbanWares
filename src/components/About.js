import React from "react";
import useSmoothScroll from "./useSmoothScroll";

const About = () => {

  // const scrollToAboutSection = useSmoothScroll('')

  return (
    <div id="aboutSection" className="bg-black text-white p-5 md:p-10">

    <div className=" text-white">
      <h1 className="font-bold ">Our Mission</h1>
      <div className="text-5xl md:text-8xl font-extrabold" >
        <div><span>BRING</span></div>
        <div><span>INSPIRATION</span></div>
        <div><span>AND</span></div>
        <div><span>INNOVATION</span></div>
        <div><span>TO</span></div>
        <div><span>EVERY</span></div>
        <div><span>ATHLETE*</span></div>
        <div><span>IN THE</span></div>
        <div><span>WORLD</span></div>
      </div>
      <p className="font-thin m-3">*If you have a body, you are an athlete</p>
    </div>
    <div className="md:pl-96  sm:pl-28 text-3xl md:text-4xl  text-right">We champion continual progress for athletes and sport by taking action to help athletes reach their potential. Every job at UrbanWares, Inc. is grounded in a team-first mindset, cultivating a culture of innovation and a shared purpose to leave an enduring impact.</div>

    </div>
  );
};

export default About;
