export default function Achievement() {
    return (
       <div>
            <div className="main w-[1280px] max-sm:w-[428px] max-sm:h-auto h-auto  pt-[112px]
            pb-[112px] gap-[80px]  mb-[50px]">
                
                <div className="w-[1152px] h-[160px] gap-[16px] max-sm:w-[380px] max-sm:h-auto ml-[55px] ">
                    <h2 className="font-Roboto font-bold leading-[57.6px] max-sm:text-[32px] text-center text-4xl mb-[40px]">
                        Our Achivements</h2>
                        <p className="text-medium  font-normal font-Roboto leading-[27px]  max-sm:text-[18px] text-center">
                        Lorem ipsum dolor sit amet
                         consectetur adipiscing elit
                         Suspendisse varius enim in eros
                          elementum tristique Duis cursus mi quis viverra ornare eros dolor interdum nulla
                         ut commodo diam libero vitae erat.
                        </p>
                        <div className="w-[1256px] max-sm:w-[380px] h-auto mt-8 gap-[20px] 
                         mr-[20px]">
                            <ul className="list-none gap-[80px] mt-[10px] max-sm:w-[428px] flex max-sm:grid grid-cols-2 font-bold leading-[48px]
                             font-Roboto text-4xl ml-[15px]">
                                <li className="w-[300px] h-[80px] gap-[15px] max-sm:w-[182px] max-sm:text-[20px]  max-sm:gap-[8px]">+200
                                <p className="font-Roboto font-normal text-sm leading-[24px] ml-[20px] pb-[15px]">
                                    Courses</p></li>
                                <li className="w-[300px] h-[80px] gap-[15px] max-sm:w-[182px] max-sm:text-[20px] max-sm:gap-[8px]">50K
                                <p className="font-Roboto font-normal text-sm leading-[24px] ml-[6px] pb-[15px]">
                                Mentors</p>
                                </li>
                                <li className="w-[300px] h-[80px] gap-[15px] max-sm:w-[182px] max-sm:text-[20px] max-sm:gap-[8px]">370K
                                <p className="font-Roboto font-normal text-sm leading-[24px] ml-[20px] pb-[15px]">
                                Students</p>
                                </li>
                                <li className="w-[300px] h-[80px] gap-[15px] max-sm:w-[182px] max-sm:text-[20px] max-sm:gap-[8px]">100+
                                <p className="font-Roboto font-normal text-sm leading-[24px] ml-[10px] pb-[15px]">
                                Recognition</p>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>

     </div>
    );
}
