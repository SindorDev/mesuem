/* eslint-disable no-unused-vars */
import { useContext } from "react";
import navLogo from "../../images/navLogo.svg"
import { Switch } from 'antd';
import AppContext from "../../context/store";
const Nav = () => {
     const theme = localStorage.getItem("theme")
     console.log(theme)
    const [ state, dispatch] = useContext(AppContext)
     const onChange = (checked) => {
          dispatch({type: "CHANGE_THEME", theme: checked})
     };


  return (
    <nav>
          <div className="container">
               <div className="flex justify-between items-center py-[10px]">
                    <img src={navLogo} alt="logo cite" />
                    <a href="#" className="text-[24px] title underline leading-[36px] font-[700]">Latest Updates</a>
                    <Switch  onChange={onChange} />
               </div>
          </div>
    </nav>
  )
}

export default Nav