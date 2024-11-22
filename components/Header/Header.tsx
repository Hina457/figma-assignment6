
import Image from "next/image"
import React from "react"
import logo from "@/public/logo.svg";
import { FaFacebookF ,FaInstagram, FaTwitter,FaLinkedin } from "react-icons/fa"
import line3 from "@/public/Line 3.svg";

import {Roboto} from 'next/font/google'

const roboto =Roboto({
    subsets : ["latin"],
    weight : ["400","700"],
});
                        
export default function Header(){
  return(
      <div>
          <header className={roboto.className}>
          <div className="w-[1280px] h-[54px]  pl-[62px] pr-[64] bg-slate-  pt-[10px] border border-[#676767]  flex gap-[25px] ">
        
          <div className="w-[395px] h-[30px] gap-[8px] flex">

              <div className="left w-[260px] h-[21px] font-normal bg-red- mt-[5px]">
                  <p className="size-5px leading-[21px] ">Phone Number:956742455678</p>
              </div>
             <Image src={line3} alt="pic"/>
              <div className="right w-[155px] h-[21px]  leading-[21px] bg-red- mt-[5px]">
                  <p className="font-roboto font-normal size-[12px] leading-[21px]">Email:info@ddsgnr.com</p>

              </div>
          
          <div className="rightbox w-[736] h-[24px] gap-[16px] bg-white pl-4"></div>
          </div>
              
          <div className="rightbox w-[736px] h-[24px] gap-[16px] bg-white mt-[3px]"> 
              <div className="icons w-[140px] h-[24px] gap-[14px] mt-[5px] ml-[82%] flex">
                  
                <FaFacebookF/>
                <FaInstagram/>
                <FaTwitter/>
                <FaLinkedin/>
              </div>
          </div>
          </div>
          <div className="navbar2 w-[1280px] h-[72px]  mt-[15px] border border-[#676767] bottom-[1px] pr-[64px] pl-[64px] bg-[#F7F7F7]">
              <div className="w-[1152px] h-[44px] justify-between bg-white mt-[10px] flex " >
                  <div className="logo bg-[#F7F7F7] w-[270px] h-[44px]  " >
                     
                          <Image  className="w-[190px] "src={logo} alt="logo"/>
                      
                      </div>
                  
                  <div className="navright flex">
                      <ul className="flex gap-[20px] mt-[10px] text-black mr-[230px] ml-[20px] ">
                          <li>Home</li>
                          <li>Courses</li>
                          <li>Services</li>
                          <li>Achievement</li>
                          <li>AboutUs</li>
                          <li>Testimonial</li>
                      </ul>

                      <div className="buttons w-[185px] h-[44px] gap-[16px]  flex ">

                          <div className="login">
                              <button className="w-[80px] h-[40px]  rounded-[5px] pt-[8px] pb-[8px] pl-[20px] pr-[20px] gap-[8px] border border-black">Login</button>
                          </div>
                          <div className="sign">
                              <button className=" w-[95px] h-[40px] rounded-[5px] pt-[8px] pb-[8px] pl-[20px] pr-[20px] gap-[8px] bg-black border border-black">
                                  <h1 className="text-white">Sign up</h1>
                              </button>
                          </div>
                      </div>
                      
               </div>
                       </div>
                 
                  
              </div>
              </header>
           </div>
  
  )
}