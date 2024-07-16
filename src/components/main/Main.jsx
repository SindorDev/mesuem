import avatar from "../../images/avatar.png"
import mona from "../../images/mona.png"
import girl from "../../images/girl.png"
import watch from "../../images/watch.png"

const Main = () => {
  return (
    <main className="mt-[62px] mb-[26px]">
      <div className="container">
        <div className="grid grid-cols-4 min-h-[490px] border-collapse gap-[15px]">
            <div className="h-[100%] border-b-[2px]">
              

              <h2 className="title text-[30px] tracking-[2px] font-[700] leading-[45px]">Lorem ipsum dolor sit amet, consectetur...</h2>
              <p className="text-[14px] font-[400] tracking-[2px] title leading-[15px] my-[25px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus...</p>
              <div className="flex mb-[24px] items-center gap-2">
                <img src={avatar} alt="avatar" />
                <div>
                  <b className="text-[12px] font-[400] leading-[18px] title">Husni Ramdani</b> 
                  <p className="text-[10px] font-[400] title leading-[12px]">30 November 2021</p> 
                </div>  
              </div>  
            </div>
            <div className="row-span-2 border-b-[2px] w-[300px] p-[14px] border-x-[2px]">


              <img src={mona} className="w-[100%]" alt="mona" />
              <h2 className="text-[30px] font-[700] leading-[45px]">Lorem ipsum dolor sit amet, consectetur...</h2>
              <p className="text-[14px] font-[400] title leading-[20px] my-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus. Tortor lorem augue elit leo nibh. Laoreet risus iaculis quisque adipisc...</p>
              <div className="flex items-center gap-2">
                <img src={avatar} alt="avatar" />
                <div>
                  <b className="text-[12px] font-[400] leading-[18px] title">Husni Ramdani</b> 
                  <p className="text-[10px] font-[400] title leading-[12px]">30 November 2021</p> 
                </div>  
              </div>  
            </div>      
            <div  className="border-b-[2px] w-[100%]">
              <img src={girl} alt="girl museum" className="w-[100%]" />
              <h2 className=" text-[24px] font-[700] leading-[45px]">Lorem ipsum dolor sit amet, consectetur...</h2>
          <b className="text-[12px] font-[400] title">By <span className="text-[#EE5B2C]">Husni Ramdani</span></b>   
              </div>  
            <div className="border-b-[2px] border-x-[2px] pl-[12px] w-[100%]">

              <h2 className="title text-[30px] font-[700] leading-[45px]">Lorem ipsum dolor sit amet, consectetur...</h2>
              <p className="text-[10px] font-[400] title leading-[15px] my-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus...</p>
              <div className="flex items-center gap-2">
                <img src={avatar} alt="avatar" />
                <div>
                  <b className="text-[12px] font-[400] leading-[18px] title">Husni Ramdani</b> 
                  <p className="text-[10px] font-[400] title leading-[12px]">30 November 2021</p> 
                </div>  
              </div>  
            </div>
            <div className="border-b-[2px]">

              <h2 className="title text-[30px] font-[700] leading-[45px]">Lorem ipsum dolor sit amet, consectetur...</h2>
              <p className="text-[14px] font-[400] title tracking-[2px] leading-[17px] my-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus...</p>
            </div>
            <div className="border-b-[2px]  w-[100%]">
              <img src={watch} className="w-[100%] h-[110px]" alt="watch" />
              <h2 className=" text-[17px] font-[700] leading-[25px]">Lorem ipsum dolor sit amet, consectetur...</h2>
              <p className="text-[10px] font-[400] title leading-[15px] my-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus...</p>   
                  <b className="text-[12px] font-[400] title">By <span className="text-[#ee5b2c]">Husni Ramdani</span></b>
                </div>  
            <div className="border-b-[2px] border-x-[2px] pl-[12px] w-[100%]">
              <h2 className="title text-[30px] font-[700] leading-[45px]">Lorem ipsum dolor sit amet, consectetur...</h2>
              <p className="text-[10px] font-[400] title leading-[15px] my-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor nunc maecenas cras ipsum, lorem massa lacus...</p>
              <div className="flex items-center gap-2">
                <img src={avatar} alt="avatar" />
                <div>
                  <b className="text-[12px] font-[400] leading-[18px] title">Husni Ramdani</b> 
                  <p className="text-[10px] font-[400] title leading-[12px]">30 November 2021</p> 
                </div>  
              </div>  
            </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
