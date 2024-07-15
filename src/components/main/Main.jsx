import { Fragment } from "react";
import { base } from "../../data/db";

const Main = () => {
  return (
    <main>
      <div className="container">
        <div className="grid grid-cols-4 gap-[15px]">
          {base.map((item) => {
            return (
              <Fragment key={item.id}>
                <div>
                    {
                         item.image ? <img src={item.image} alt="image museum" /> : ''
                    }
                  <h2 className="text-[30px] font-[700] text-black leading-[45px]">{item.title}</h2>
                  <p className="title text-[10px] my-[13px] w-[100% ] font-[400] leading-[15px]">{item.text}</p>
                  <div>
                    {
                         item.avatar ? <img src={item.avatar} alt="avatar user" /> : ''
                    }
                    <div>
                         <b>{item.by}</b>
                         {
                              item.watch ? <p>{item.watch}</p> : ''
                         }
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;
