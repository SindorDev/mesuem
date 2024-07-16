import { AiOutlineArrowUp } from "react-icons/ai"; 
import avatar from "../../images/avatar.png"
import mona from "../../images/mona.png"
import Nav from "../../components/nav/Nav"
import Footer from "../../components/footer/Footer"

const Single = () => {
  return (
    <>
      <Nav/>
        <section className="mt-[37px] mb-[45px]">
          <div className="container">
       <div className="flex items-center justify-center">
       <div className="flex relative justify-center w-[100%] max-w-[560px] flex-col items-center">

              <h1 className="text-[48px] font-[700] title leading-[72px] mb-[20px]">Blog Title</h1>
              <div className="flex mb-[24px] items-center gap-2">

                <img className="rounded-[50%]" src={avatar} alt="avatar" />
                <div>
                  <b className="text-[12px] font-[400] leading-[18px] text-[#ee5b2c] title">Husni Ramdani</b> 
                  <p className="text-[10px] font-[400] title leading-[12px]">30 November 2021</p> 
                </div>  
              </div>
              <div className="flex gap-[10px] mb-[30px] items-center">
          
              <div className="w-[5px] h-[5px] rounded-[50%] bg-black"> </div> 
              <div className="w-[5px] h-[5px] rounded-[50%] bg-black"> </div> 
              <div className="w-[5px] h-[5px] rounded-[50%] bg-black"> </div> 

              </div>
              <img className="w-[100%] mb-[37px]" src={mona} alt="mona" />
              <span className="text-[18px] leading-[27px] font-[400] tracking-[2px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat pretium, mi sed id dui sed orci, tempor. Pellentesque egestas odio enim, accumsan, cursus. Fermentum in bibendum aliquet est viverra eu vitae in nibh. Leo, feugiat amet neque, quis. Amet, eget vulputate cursus in eu sit pulvinar et.
              Nibh at sem viverra pellentesque hac odio duis a. Urna vitae, at ac et rhoncus. Mauris sit accumsan vitae, nibh netus. In elementum pharetra in lacinia nibh. Non est eget egestas eu et purus amet. Vitae aliquam sit tincidunt pellentesque netus suspendisse vulputate. Dui justo, ac maecenas pharetra. </span>
            </div>
       </div>
        <button className="p-[10px] btn flex items-center absolute right-[200px] bottom-[-250px] gap-[8px] rounded-[8px] border-[3px] border-[#EE5626]">
        Back to top <AiOutlineArrowUp />
        </button>
          </div>
        </section>
      <Footer/>
    </>
  )
}

export default Single