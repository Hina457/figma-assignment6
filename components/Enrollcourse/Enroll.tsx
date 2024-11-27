import Image from "next/image";
import design from "@/public/design.svg";
import start1 from "@/public/Star 1.svg";
import business from "@/public/business.svg";
import law from "@/public/law.svg";
import art from "@/public/art.svg";
import programming from "@/public/programming.svg";
import tech from "@/public/tech.svg";

export default function EnrollCourse() {
    return (
      <div>
          <div className="w-[1280px] h-[1742px] pt-[112px] max-sm:w-[428px] max-sm:h-auto pb-[112px] gap-[60px] ">
                <div className="w-[768px] max-sm:w-[249px] max-sm:h-[93px] h-[118px] gap-[6px]  mx-auto ">
                    <h1 className="font-Roboto font-bold max-sm:text-[32px] text-[56px] leading-[67.2px] text-center">Courses</h1>
                    <p className="text-[18px] font-Roboto  leading-[27px] mt-[5] text-center">
                        Your Ultimate Guide to learning</p>
                </div>
                <div className="[1152px] max-sm:w-[380px] max-sm:h-auto h-[1340px] gap-[64px] mt-10 bg-[#FFFFFF]">
           
                    <ul className="w-[336px] h-[40px] max-sm:w-[336px] flex mx-auto">
                        <li className="w-[87px] border-b border-[#676767] pt-2 pb-2 pr-4 pl-4">popular</li>
                        <li className="w-[140px] pt-2 pb-2 pr-4 pl-4">Recommended</li>
                        <li className="w-[109] pt-2 pb-2 pr-4 pl-4">Best  Price</li>
                    </ul>

                    <div className="w-[1312px] max-sm:w-[380px] max-sm:h-auto max-sm:grid grid-cols-1 h-[534px] gap-8 flex mt-11 ">
                        <div className="w-[416px] h-[534px] max-sm:w-[380px] max-sm:h-[558px] rounded-[5px] gap-6 bg-white">
                            <Image src={design} alt="design" width={416} height={300}/>
                            <div className="flex mt-5">
                                <p className="font-[600px] text-[14px] w-[326px] h-[21px] ml-2">Design</p>
                                <Image src={start1} alt="star" width={24} height={24}/>
                                <p className="w-5 h-6 font-semibold text-[14px] ml-2">5.0</p>
                            </div>
                            <h5 className="font-bold text-2xl leading-[33.6px] font-Roboto ml-2">UX/UI Design 201</h5>
                            <p className="leading-6 font-Roboto ml-2">Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                         <div className="w-[382px] h-[40px] gap-4 flex mt-5 ml-2">
                            <button type="button" className="w-[117px] h-10 rounded-[5px] border border-black ptr-2 pb-2 pr-3 pl-3 gap-2 ">Enroll now</button>
                            <p className="w-[77px] h-[40px] rounded-[5px] pt-2 pb-2 pr-5 pl-5">$400</p>
                         </div>
                        </div>



                        <div className="w-[416px] h-[534px] rounded-[5px] max-sm:w-[380px] max-sm:h-[558px]  gap-6 bg-white">
                            <Image src={programming} alt="" width={416} height={300}/>
                            <div className="flex mt-5">
                                <p className="font-[600px] text-[14px] w-[326px] h-[21px] ml-2">Programmimg</p>
                                <Image src={start1} alt="star" width={24} height={24}/>
                                <p className="w-5 h-6 font-semibold text-[14px] ml-2">5.0</p>
                            </div>
                            <h5 className="font-bold text-2xl leading-[33.6px] font-Roboto ml-2">Introduction to Python</h5>
                            <p className="leading-6 font-Roboto ml-2">Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                         <div className="w-[382px] h-[40px] gap-4 flex mt-5">
                            <button type="button" className="w-[117px] ml-2 h-10 rounded-[5px] border border-black ptr-2 pb-2 pr-3 pl-3 gap-2">Enroll now</button>
                            <p className="w-[77px] h-[40px] rounded-[5px] pt-2 pb-2 pr-5 pl-5">$400</p>
                         </div>
                        </div>




                        <div className="w-[416px] h-[534px] max-sm:w-[380px] max-sm:h-[558px]  rounded-[5px] gap-6 bg-white">
                            <Image src={business} alt="" width={416} height={300}/>
                            <div className="flex mt-5">
                                <p className="font-[600px] text-[14px] w-[326px] h-[21px] ml-2">Business</p>
                                <Image src={start1} alt="star" width={24} height={24}/>
                                <p className="w-5 h-6 font-semibold text-[14px] ml-2">5.0</p>
                            </div>
                            <h5 className="font-bold text-2xl leading-[33.6px] font-Roboto ml-2">Data Analysis for Beginners</h5>
                            <p className="leading-6 font-Roboto ml-2">Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                         <div className="w-[382px] h-[40px] gap-4 flex mt-5">
                            <button type="button" className="w-[117px] h-10 ml-2  rounded-[5px] border border-black ptr-2 pb-2 pr-3 pl-3 gap-2">Enroll now</button>
                            <p className="w-[77px] h-[40px] rounded-[5px] pt-2 pb-2 pr-5 pl-5">$400</p>
                         </div>
                        </div>




                        


                  
                    </div>
  {/* seocnd */}


                    
  <div className="w-[1312px] h-[534px] max-sm:w-[380px] max-sm:h-auto max-sm:grid grid-cols-1 gap-8 flex mt-11 ">
                        <div className="w-[416px] h-[534px] max-sm:w-[380px] max-sm:h-[558px] rounded-[5px] gap-6 bg-white">
                            <Image src={art} alt="" width={416} height={300}/>
                            <div className="flex mt-5">
                                <p className="font-[600px] text-[14px] w-[326px] h-[21px] ml-2">law</p>
                                <Image src={start1} alt="star" width={24} height={24}/>
                                <p className="w-5 h-6 font-semibold text-[14px] ml-2">5.0</p>
                            </div>
                            <h5 className="font-bold text-2xl leading-[33.6px] font-Roboto ml-2">Art Specialization</h5>
                            <p className="leading-6 font-Roboto ml-2">Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                         <div className="w-[382px] h-[40px] gap-4 flex mt-5">
                            <button type="button" className="w-[117px] h-10 ml-2 rounded-[5px] border border-black ptr-2 pb-2 pr-3 pl-3 gap-2">Enroll now</button>
                            <p className="w-[77px] h-[40px] rounded-[5px] pt-2 pb-2 pr-5 pl-5">$400</p>
                         </div>
                        </div>



                        <div className="w-[416px] h-[534px] max-sm:w-[380px] max-sm:h-[558px] rounded-[5px] gap-6 bg-white">
                            <Image src={law} alt="" width={416} height={300}/>
                            <div className="flex mt-5">
                                <p className="font-[600px] text-[14px] w-[326px] h-[21px] ml-2">Art</p>
                                <Image src={start1} alt="star" width={24} height={24}/>
                                <p className="w-5 h-6 font-semibold text-[14px] ml-2">5.0</p>
                            </div>
                            <h5 className="font-bold text-2xl leading-[33.6px] font-Roboto ml-2">Rule of Law</h5>
                            <p className="leading-6 font-Roboto ml-2">Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                         <div className="w-[382px] h-[40px] gap-4 flex mt-5">
                            <button type="button" className="w-[117px] ml-2 h-10 rounded-[5px] border border-black ptr-2 pb-2 pr-3 pl-3 gap-2">Enroll now</button>
                            <p className="w-[77px] h-[40px] rounded-[5px] pt-2 pb-2 pr-5 pl-5">$400</p>
                         </div>
                        </div>




                        <div className="w-[416px] h-[534px] max-sm:w-[380px] max-sm:h-[558px] rounded-[5px] gap-6 bg-white">
                            <Image src={tech} alt="" width={416} height={300}/>
                            <div className="flex mt-5">
                                <p className="font-[600px] text-[14px] w-[326px] h-[21px] ml-2">Tech</p>
                                <Image src={start1} alt="star" width={24} height={24}/>
                                <p className="w-5 h-6 font-semibold text-[14px] ml-2">5.0</p>
                            </div>
                            <h5 className="font-bold text-2xl leading-[33.6px] font-Roboto ml-2">Introduction to webflow</h5>
                            <p className="leading-6 font-Roboto ml-2">Lorem ipsum dolor sit amet consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                         <div className="w-[382px] h-[40px] gap-4 flex mt-5">
                            <button type="button" className="w-[117px] ml-2 h-10 rounded-[5px] border border-black ptr-2 pb-2 pr-3 pl-3 gap-2">Enroll now</button>
                            <p className="w-[77px] h-[40px] rounded-[5px] pt-2 pb-2 pr-5 pl-5">$400</p>
                         </div>
                        

                       </div>


                       

</div>
                           <div className=" flex justify-center items-center mt-24">
                            <button className="w-[170px]  max-sm:w-[152px] max-sm:h-[40px] max-sm:text-[14px] h-10 border border-black rounded-[5px] pt-2 pb-2 pr-5 pl-4"> View All Courses</button>
                        </div>

</div>

                  
                    </div>
        </div>
    );
}
