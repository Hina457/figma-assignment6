
import Image from "next/image"
import team1 from "@/public/team1.svg"
import team2 from "@/public/team2.svg"
import team3 from "@/public/team3.svg"
import team4 from "@/public/team4.svg"
import team5 from "@/public/team5.svg"
import team6 from "@/public/team6.svg"
import {FaLinkedin,  FaTwitter,FaDribbble}  from "react-icons/fa"

export default function Team(){
return(
    <div>
        <div className="w-[1280px] h-[895px] pt-[112px] pr-[64px] pb-[112px] pl-[64px] gap-[80px] bg-[#F7F7F7]">
  <div className="w-[768px] h-[109px] gap-[24px]  mx-auto">
    <h2 className="font-Roboto font-bold text-4xl leading-[57.6px] text-center">Our team</h2>
    <p className="font-Roboto font-normal leading-[27px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>


  <div className="w-[1280px] h-[610px] gap-[16px] mt-20 ">
    <div className="w-[1280px] h-[273] [px] gap-12 flex">

    <div className="w-[394.67px] h-[273px] flex flex-col items-center">
       
        <Image src={team1} alt="pic" width={80} height={80}/>
        
        <p className=" text-[20px] font-Roboto font-semibold leading-[30px]">
        James Nduku
        </p>
        <p className="text-[18px] font-Roboto leading-[27px] ">Marketing Coordinator</p>
        <div className="icons gap-[14px] mt-[16px]  flex">        
        <FaLinkedin/>
        <FaTwitter/>
        <FaDribbble />
            
     </div>
     </div>
   







    <div className="w-[394.67px] h-[273px] flex flex-col items-center">
       
        <Image src={team2} alt="pic" width={80} height={80}/>
        
        <p className=" text-[20px] font-Roboto font-semibold leading-[30px]">
        Joseph Munyambu
        </p>
        <p className="text-[18px] font-Roboto leading-[27px] ">Nursing Assistant</p>
        <div className="icons  gap-[14px] mt-[16px] flex">        
        <FaLinkedin/>
        <FaTwitter/>
        <FaDribbble/>
            
     </div>
     </div>
   







     

     <div className="w-[394.67px] h-[273px] flex flex-col items-center">
       
        <Image src={team3} alt="pic" width={80} height={80}/>
        
        <p className=" text-[20px] font-Roboto font-semibold leading-[30px]">
        Joseph Ngumbau
        </p>
        <p className="text-[18px] font-Roboto leading-[27px] ">Medical Assistant</p>
        <div className="icons  gap-[14px] mt-[16px]  flex">        
        <FaLinkedin/>
        <FaTwitter/>
        <FaDribbble/>
            
     </div>
     </div>
   

    </div>

    {/* second row */}
    

  <div className="w-[1280px] h-[273] flex gap-[48px] mt-20 ">

  <div className="w-[394px] h-[273px]  flex flex-col items-center">
    <Image src={team4} alt="pic" width={80} height={80}/>
    <p className="font-Roboto text-large font-semibold leading-[30px] text-center pt-[10px]">
    Erick Kipkemboi
        </p>
        <p className="font-normal font-Roboto leading-[27px] text-center">Web Designer</p>
        
        <div className="icons  gap-[14px]  flex mt-9 ">        
        <FaLinkedin/>
        <FaTwitter/>
        <FaDribbble/>
               </div> 
     
    </div>

    <div className="w-[394.67px] h-[273px]  flex flex-col items-center">
    <Image src={team5} alt="pic" width={80} height={80}/>
    <h2 className="font-Roboto text-large font-semibold leading-[30px] text-center">
    Stephen Kerubo
        </h2>
        <p className="font-normal font-Roboto leading-[27px] text-center">President of Sales</p>
        <div className="icons  gap-[14px] mt-9 flex">        
        <FaLinkedin/>
        <FaTwitter/>
        <FaDribbble/>
                
     </div>
    </div>
    
  <div className="w-[394.67px] h-[273px]  flex flex-col items-center">
    <Image src={team6} alt="pic" width={80} height={80}/>
    <h2 className="font-Roboto text-large font-semibold leading-[30px] text-center">
    John Leboo
        </h2>
        <p className="font-normal font-Roboto leading-[27px] text-center">Dog Trainer</p>
        <div className="icons gap-[14px] mt-9 flex">        
        <FaLinkedin/>
        <FaTwitter/>
        <FaDribbble/>
               
     </div>
    </div>
</div>

  
  </div>
        </div>
    </div>
)
}