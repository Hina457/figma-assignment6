
import Image from "next/image"
import logo1 from "@/public/logo1.svg"
import logo2 from "@/public/logo2.svg"
import logo3 from "@/public/logo3.svg"
import logo4 from "@/public/logo4.svg"
import logo5 from "@/public/logo5.svg"
import logo6 from "@/public/logo6.svg"


export default function Company(){
    return(
        <div>
           <div className="bg-[#F7F7F7] w-[1280px] h-[228px] pt-[80px]
           pl-[64px] pr-[64px] pb-[80px] gap-[64px] border">
             <div className="flex gap-[5%]">
            <div className="w-[320px] h-[68px] ">
                <h5 className="font-Roboto font-bold text-2xl leading-[33.6px] text-black">
                Trusted by 2000+ companies worldwide.
                </h5>
            </div>

            <div className="w-[880px] h-[56px] pt-[8.74px] pb-[8.74px] gap-[19.12px] flex">
                <Image src={logo1} alt="log1"/>
                <Image src={logo2} alt="logo2"/>
                <Image src={logo3} alt="logo3"/>
                <Image src={logo4} alt="logo4"/>
                <Image src={logo5} alt="logo5"/>
                <Image src={logo6} alt="logo6"/>
            </div>
           </div>
           </div>
        </div>
    )
}