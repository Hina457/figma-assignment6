

import Image from "next/image"
import webpic from "@/public/webpic.svg"

export default function Hero(){
  return(
      <div>
          <div className="main w-[1280px] flex">
              <div className="left sm:w-[640px] h-[915px]">
                 
              <div className="content h-[250px] w-[630px] pr-[60px] mt-[300px] gap-[24px] ">
                  <div className="sm:w-[580px] h-[270px] gap-[4px] ml-[25px] ">
                      <h1 className="h-[134px] w-[580px] font-bold text-6xl leading-[70.2px] text-black font-Roboto">
                      Learn new skills online with ease
                      </h1>
                      <p className="w-[580px] h-[81px] text-normal text-[20px] leading-[27px text-black] mt-[15px]">
                      Discover a wide range of courses covering a variety of subjects, taught by expert instructors. 
                      </p>

                      
                      <div className="buttons w-[200px] h-[50px] gap-[16px]  flex ">

                          <div className="Start Learn">
                              <button className="w-[170px] h-[48px] font-Roboto text-sm rounded-[5px] pt-[5px] pb-[12px] pl-[15px] pr-[24px] gap-[8px] border border-black font-bold  ">
                                  start Learning now</button>
                          </div>
                          <div className="sign">
                              <button className=" w-[150px] h-[48px] font-Roboto rounded-[5px] pt-[8px] pb-[8px] pl-[20px] pr-[20px] gap-[8px] bg-black border border-black text-sm">
                                  <h1 className="text-white">Explore Courses</h1>
                              </button>
                          </div></div>
                     
                     </div></div></div>
              <div className="right w-[640px] h-[500px]">

                  <Image  className="w-full"src={webpic} alt="pic"/>
              </div>
          </div>
      </div>
  )
}