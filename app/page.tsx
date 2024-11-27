




import Header from "@/components/Header/Header"
import Hero from "@/components/Hero/Hero"
import Company from "@/components/company/Company"
import Courses from "@/components/Courses/Courses"
import Achivement from "@/components/Achivements/Achivement"
import Enrollcourse from "@/components/Enrollcourse/Enroll"
import Team from "@/components/Team/Team"
import Customer from "@/components/Customer/Customer"
import Footer from "@/components/Footer/Footer"
export default function main(){
  return(
    <div className="overflow-x-hidden">
      <Header/>
      <Hero/>
      <Company/>
      <Courses/>
      <Achivement/>
      <Enrollcourse/>
      <Team/>
      <Customer/>
      <Footer/>
    </div>
  )
}