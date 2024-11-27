import Image from "next/image";
import icon1 from "@/public/icon1.svg";
import icon2 from "@/public/icon2.svg";
import icon3 from "@/public/icon 3.svg";
import icon4 from "@/public/icon4.svg";
import icon5 from "@/public/icon5.svg";
import icon6 from "@/public/icon6.svg";
import icon7 from "@/public/icon7.svg";
import icon8 from "@/public/icon8.svg";
import icon9 from "@/public/icon9.svg";

export default function Courses() {
    return (
       <div>
           {/* main div */}
           <div className="main w-[1280px] h-auto max-sm:w-[428px] max-sm:py-[24px] max-sm:px-[24px] max-sm:h-auto pt-[112px] pb-[112px] pr-[64px] gap-[80px]"> 

           

                {/* heading div */}
            <div className="w-[768px] h-[109px] max-sm:w-[249px] max-sm:h-auto max-sm:text-center gap-[24px]  mx-auto">
                <h2 className="font-Roboto font-bold text-3xl  max-sm:text-[32px] leading-[57.6px] text-black text-center">
                Explore Courses By Category
                </h2>
                <p className="font-Roboto font-extralight leading-[20px]  max-sm:text-[18px] max-sm:text-center max-sm:leading-[27px] text-center mt-4">
                Discover a wide range of courses covering a variety of subjects taught by expert instructors.
                </p>
            </div>

                       {/* box div */}
            <div className="mainbox w-[1280px] h-[636px] max-sm:w-[380px] 
            grid grid-cols-3 max-sm:h-auto max-sm:grid-cols-1 gap-4 p-4">

                <div className="box1 w-[410.67px] h-[132px] rounded-[5px] p-[16px] max-sm:mt-[20px] gap-[32px] bg-[#F7F7F7] flex ">
                    <Image src={icon1} alt="icon1"/>
                    <div className="w-[246.67px] h-[57px] gap-[24px] mt-[20px] mr-[20px]">
                        <h1 className="font-Roboto leading-[30px] font-semibold text-large text-black">
                        Design & Development
                        </h1>
                        <p className="text-sm">50+ Courses Available</p>
                    </div>   
    
                </div>
                <div className="box2 w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex">
                <Image src={icon2} alt="icon2"/>
                <div className="w-[246.67px] h-[57px] gap-[24px] mt-[20px] mr-[20px]">
                        <h1 className="font-Roboto leading-[30px] font-semibold text-large text-black">
                        Marketing
                        </h1>
                        <p className="text-sm">50+ Courses Available</p>
                    </div>
                </div>
                <div className="box3 w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex">
                <Image src={icon3} alt="icon3"/>
                <div className="w-[246.67px] h-[57px] gap-[24px] mt-[20px] mr-[20px]">
                        <h1 className="font-Roboto leading-[30px] font-semibold text-large text-black">
                        Development
                        </h1>
                        <p className="text-sm">50+ Courses Available</p>
                    </div>
                </div>  
                
                <div className="box4 w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex">
                <Image src={icon4} alt="icon4"/>
                <div className="w-[246.67px] h-[57px] gap-[24px] mt-[20px] mr-[20px]">
                        <h1 className="font-Roboto leading-[30px] font-semibold text-large text-black">
                        Communication
                        </h1>
                        <p className="text-sm">50+ Courses Available</p>
                    </div>
                </div>
                <div className="box5 w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex">
                <Image src={icon5} alt="icon5"/>
                <div className="w-[246.67px] h-[57px] gap-[24px] mt-[20px] mr-[20px]">
                        <h1 className="font-Roboto leading-[30px] font-semibold text-large text-black">
                        Digital Marketing
                        </h1>
                        <p className="text-sm">50+ Courses Available</p>
                    </div>
                </div>
                <div className="box6 w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex">
                <Image src={icon6} alt="icon6"/>
                <div className="w-[246.67px] h-[57px] gap-[24px] mt-[20px] mr-[20px]">
                        <h1 className="font-Roboto leading-[30px] font-semibold text-large text-black">
                        Self Development
                        </h1>
                        <p className="text-sm">50+ Courses Available</p>
                    </div></div>  

                <div className="box7 w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex">
                <Image src={icon7} alt="icon7"/>
                <div className="w-[246.67px] h-[57px] gap-[24px] mt-[20px] mr-[20px]">
                        <h1 className="font-Roboto leading-[30px] font-semibold text-large text-black">
                        Business
                        </h1>
                        <p className="text-sm">50+ Courses Available</p>
                    </div>
                </div>
                <div className="box8 w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex">
                <Image src={icon8} alt="icon8"/>
                <div className="w-[246.67px] h-[57px] gap-[24px] mt-[20px] mr-[20px]">
                        <h1 className="font-Roboto leading-[30px] font-semibold text-large text-black">
                        Finance
                        </h1>
                        <p className="text-sm">50+ Courses Available</p>
                    </div>
                </div>
                <div className="box9 w-[410.67px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex">
                <Image src={icon9} alt="icon9"/>
                <div className="w-[246.67px] h-[57px] gap-[24px] mt-[20px] mr-[20px]">
                        <h1 className="font-Roboto leading-[30px] font-semibold text-large text-black">
                        Consulting
                        </h1>
                        <p className="text-sm">50+ Courses Available</p>
                    </div>
                </div>
               
            </div>

            <div className="flex justify-center items-center ">
                    <button className="font-Roboto size-[16px] leading-[24px] pt-[12px] pb-[12px] pl-[24px] pr-[24px] w-[170px] h-[48px]  rounded-[5px] border  border-black ">View All Courses</button>
                </div>
           
            </div>
        </div>
    );
}
