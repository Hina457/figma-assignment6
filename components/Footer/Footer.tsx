
import Image from "next/image"
import logo from "@/public/logo.svg"
import { FaFacebook ,FaInstagram, FaTwitter,FaLinkedin }  from "react-icons/fa";
export default function Footer(){
    return(
        <div>
            <div className="w-[1280px] h-[684px] p-[80px] gap-[80px] ">
            
                
                <div className="w-[1120px] h-[82px] justify-between  flex ">
                    <div className="w-[500px] h-[51px]">

                    <h2 className="font-Roboto font-semibold leading-[27px] ">Subscribe to our newsletter</h2>
                    <p className="font-Roboto font-medium leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                      <div className="w-[400px] h-[82px] gap-[20px] ">
                    <input className="border border-black w-[265px] h-[48px] rounded-[5px] p-[12px] gap-8px" type="email" placeholder="Enter your Email"></input>
                    <button className="w-[119px] h-[48px] rounded-[5px] border pt-[12px] pr-[24px] pb-[12px] pl-[24px] ml-[10px] gap-[8px] border-black" type="button">Subscribe</button>
                     <p className="font-Roboto font-normal leading-[18px] decoration-underline mt-[20px] ">By subscribing you agree to with our Privacy Policy</p> 
                </div>
                </div>

           
            <div className="W-[1120PX] h-[225px] gap-[40px] flex  mt-[20px] ">
                <div className="w-[250px] h-[225px] gap-[16px] ">
                    <Image src={logo} alt="" width={130} height={40}/>
                </div>
                <div className="w-[250px] h-[225px] gap-[16px] ">
                    <h2 className="font-semibold text-Regular leading-[24px]">Courses</h2>
                    <ul>
                     <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Business</li>
                     
                     <li className="w-[250px] h-[37px] pt-[8px] pb-[8px]">Development</li>
                     
                     <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Technology</li>
                     
                     <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Design</li>
                     
                     <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Programming</li>
                     </ul>
                </div>
                <div className="w-[250px] h-[225px] gap-[16px]">
                <h2 className="font-semibold text-Regular leading-[24px]">Resources</h2>
                    <ul>
                     <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Career</li>
                     
                     <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Resume</li>
                     
                     <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Learning</li>
                     
                     <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Interview Preparation</li>
                     
                     <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Jobs</li>
                     </ul>
                </div>
                <div className="w-[250px] h-[225px] gap-[16px] ">
                <h2 className="font-semibold text-Regular leading-[24px]">About Us</h2>
                    <ul>
                     <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Contact</li>
                     
                     <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Help/Support</li>
                     
                     <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">FAQ</li>
                     
                     <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Terms and Conditions</li>
                     
                     <li className="w-[250px] h-[37px] pt-[8px] pb-[8px] ">Partners</li>
                     </ul>
                </div>
            </div>
            <div className="w-[1120px] h-[1px] bg-black mt-[70px]"></div>
            <div className="w-[1120px] h-[57px] gap-[32px] "></div>

                <div className="w-[1120px] h-[24px] justify-between  flex">
                    <div className="w-[900px] h-[21px] gap-24px  flex">
              <h1 className="font-Roboto font-normal leading-[21px] mr-4 ">2023 Ddsgnr All right reserved.</h1>

                <div className="W-[345px] h-[21px] gap-[24px]   font-normal">
                    <ul className="flex gap-[20px] font-Roboto leading-[21px] font-sm">
                        <li className="underline">Privacy Policy</li>
                        <li className="underline ">Terms of Service</li>
                        <li className="underline">Cookies Settings</li>
                    </ul>
                    </div>
</div>
                    <div className="icons w-[132px] h-[24px] gap-[20px]  flex ml-[100px]">
                <FaFacebook/>
                <FaInstagram/>
                <FaTwitter/>
                <FaLinkedin/>
                        
                    </div>
                
            </div>
           </div>
        </div>
    )
}