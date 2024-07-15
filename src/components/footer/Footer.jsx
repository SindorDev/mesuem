import { FaFigma } from "react-icons/fa"; 
import { SlSocialGithub } from "react-icons/sl"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
const Footer = () => {
  return (
    <footer className="pb-[30px]">
          <div className="container">
               <div className="flex justify-between items-center">
                    <h3 className="text-[16px] font-[600] title leading-[18px]">Thanks for <span className="text-[#ee5b2c]">coming!</span></h3>
                    <a className="text-[16px] font-[600] leading-[18px] title underline" href="mailto:gblog@gmail.com">gblog@gmail.com</a>
                    <div className="flex items-center gap-[14px]">
                         <a href="#" className="w-[37px] h-[37px] p-[12px] rounded-[50%] border-[2px] flex justify-center items-center ">
                              <AiOutlineTwitter className="text-[24px] stroke-2" />
                         </a>
                         
                         <a href="#" className="w-[37px] h-[37px] p-[12px] rounded-[50%] border-[2px] flex justify-center items-center">
                              <SlSocialGithub />
                         </a>
                         <a href="#" className="w-[37px] h-[37px] p-[12px] rounded-[50%] border-[2px] flex justify-center items-center">
                              <FaFigma />
                         </a>
                    </div>
               </div>
          </div>
    </footer>
  )
}

export default Footer