import navLogo from "../../images/navLogo.svg"
import { Switch } from 'antd';
const Nav = () => {
     const onChange = (checked) => {
          console.log(`switch to ${checked}`);
     };


  return (
    <nav>
          <div className="container">
               <div className="flex justify-between items-center py-[10px]">
                    <img src={navLogo} alt="logo cite" />
                    <a href="#" className="text-[24px] title underline leading-[36px] font-[700]">Latest Updates</a>
                    <Switch onChange={onChange} />
               </div>
          </div>
    </nav>
  )
}

export default Nav