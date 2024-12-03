"use client"
import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [Shadow, setShadow] = useState(true);
    const [activeSection,setActiveSection] = useState("home")
  
    useEffect(() => {
      // Scroll Navbar shadow effect
        const handleScroll = () => {
            if (window.scrollY > 0) {
              setShadow(false);
            } else {
              setShadow(true);
            }
        }
        window.addEventListener("scroll", handleScroll);
    }, []);

    const routePage = (currentSection)=>{
      // Routing page
      setActiveSection(currentSection)
      document.getElementById(currentSection).scrollIntoView({behavior:"smooth"});
    }
    
  return (  
    <>
    <nav className={"flex justify-between px-[5rem] py-5 font-inter sticky top-0 bg-[#e6e7ee] z-[1000] shadow-md"+`${Shadow?"shadow-md":""}`}>
      <ul className="text-2xl font-semibold font-poppins">
        Creators{" "}
        <span className="font-semibold text-gradient">
          Earn
        </span>
      </ul>
      <ul className="flex gap-8 font-semibold">
        {["Home","About","Explore","Become a Creator"].map((section,id)=>{
          return <li key={id} className={`gradient-underline ${activeSection===section.toLowerCase()?"active":""}`} onClick={()=>routePage(section.toLowerCase())}>{section}</li>
        })}
      </ul>
    </nav>
    </>
  );
}
export default Navbar;
