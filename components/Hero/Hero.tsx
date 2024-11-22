

import Image from "next/image"
import webpic from "@/public/webpic.svg"


export default function Hero() {
    return (
      <div>
        <div className="main w-full sm:w-[1280px] flex flex-wrap">
          {/* Left Section */}
          <div className="left w-full sm:w-[640px] h-auto sm:h-[915px] px-4 sm:px-0">
            <div className="content h-auto sm:h-[250px] w-full sm:w-[630px] pr-0 sm:pr-[60px] mt-[100px] sm:mt-[300px] gap-[24px]">
              <div className="w-full sm:w-[580px] h-auto sm:h-[270px] gap-[4px] ml-0 sm:ml-[25px]">
                <h1 className="text-3xl sm:text-6xl font-bold leading-[40px] sm:leading-[70.2px] text-black font-Roboto">
                  Learn new skills online with ease
                </h1>
                <p className="w-full sm:w-[580px] text-normal text-base sm:text-[20px] leading-[22px] sm:leading-[27px] text-black mt-[15px]">
                  Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                </p>
  
                <div className="buttons w-full sm:w-[200px] h-auto sm:h-[50px] gap-[16px] flex mt-4">
                  <div className="start-learn">
                    <button className="w-[140px] sm:w-[170px] h-[40px] sm:h-[48px] font-Roboto text-sm rounded-[5px] pt-[5px] pb-[12px] pl-[15px] pr-[24px] gap-[8px] border border-black font-bold">
                      Start Learning Now
                    </button>
                  </div>
                  <div className="sign">
                    <button className="w-[140px] sm:w-[150px] h-[40px] sm:h-[48px] font-Roboto rounded-[5px] pt-[8px] pb-[8px] pl-[20px] pr-[20px] gap-[8px] bg-black border border-black text-sm">
                      <h1 className="text-white">Explore Courses</h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="right w-full sm:w-[640px] h-auto sm:h-[500px] mt-8 sm:mt-0">
            <Image className="w-full" src={webpic} alt="pic" />
          </div>
        </div>
      </div>
    );
  }