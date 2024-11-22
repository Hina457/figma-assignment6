

import Image from "next/image"
import stephen from "@/public/stephen.svg"
import erick from "@/public/erick.svg"
import james from "@/public/james.svg"
import Dots from "@/public/Dots.svg"
import arrow from "@/public/arrow.svg"

import {FaStar} from "react-icons/fa6"
export default function Customer(){
    return(
        <div>
       <div className="w-[1280px] h-[830.89px] pt-[112px] pr-[64px] pb-[112px] pl-[64px]
        gap-[80px] bg-[#F7F7F7]">

            <div className="w-[560px] h-[109px] gap-[24px] ">
                <h2 className="font-Roboto font-bold leading-[57.6px] text-3xl">Customer testimonials</h2>
                <p className="text-normal font-normal leading-[27px]">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
            </div>
            <div className="w-[1152px] h-[417.89px] gap-48px  flex gap-[28px]">
                <div className="w-[362.67px] h-[321.89px] border p-[32px] gap-[24px] border-black">
                      <div className="w-[116px] h-[18.89px] gap-[4px] flex">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    </div>
                    <div className="w-[298.67px] h-[215px] gap-[24px] ">
                        <p className="w-[298.67] h-[135px] font-Roboto font-normal leading-[27px]">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
                        </p>
                        <div className="w-[254px] h-[56px] gap-[20px] flex ">
                        <Image src={james} alt="james" width={56} height={56}/>
                        <div className="w-[178px] h-[48px]  mt-[10px]">
                            <h1 className="font-Roboto font-semibold leading-[24px]">James Nduku</h1>
                            <p className="font-Robboto font-normal leading-[24px]">Software Developer</p>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className="w-[362.67px] h-[321.89px] border p-[32px] gap-[24px] border-black">
                <div className="w-[116px] h-[18.89px] gap-[4px] flex">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    </div>
                    <div className="w-[298.67px] h-[215px] gap-[24px] ">
                    <p className="w-[298.67] h-[135px] font-Roboto font-normal leading-[27px]">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Suspendisse varius enim in eros elementum tristique Duis cursus mi quis viverra ornare.
                        </p>
                    
                        <div className="w-[254px] h-[56px] gap-[20px]  flex ">
                        <Image src={erick} alt="james" width={56} height={56}/>
                        <div className="w-[178px] h-[48px]  mt-[10px]">
                            <h1 className="font-Roboto font-semibold leading-[24px]">Erick Kipkemboi</h1>
                            <p className="font-Robboto font-normal leading-[24px]">Scrum Master</p>
                        </div>
                        </div>
                        

                    </div>
                </div>
                <div className="w-[362.67px] h-[321.89px] border p-[32px] gap-[24px] border-black">
                <div className="w-[116px] h-[18.89px] gap-[4px] flex">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    </div>
                    <div className="w-[298.67px] h-[215px] gap-[24px] ">
                    <p className="w-[298.67] h-[135px] font-Roboto font-normal leading-[27px]">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Suspendisse varius enim in eros elementum tristique  Duis cursus mi quis viverra ornare.
                        </p>
                        <div className="w-[254px] h-[56px] gap-[20px]  flex ">
                        <Image src={stephen} alt="stephen" width={56} height={56}/>
                        <div className="w-[178px] h-[48px]  mt-[10px]">
                            <h1 className="font-Roboto font-semibold leading-[24px]">Stephen Kerubo</h1>
                            <p className="font-Robboto font-normal leading-[24px]">UI/UX Designer</p>
                        </div>
                        
                        </div></div>
                       
                    
                </div>
            </div>
            <div className="w-[1152px] h-[48px] justify-between flex">
                <Image src={Dots} alt="Dots" width={72} height={8}/>
                <Image src={arrow} alt="Arrow" width={111} height={48}/>
            </div>
        </div>
        </div>
    )
}