export const initialState = {
     theme: localStorage.getItem("theme") || "light"
 }
 
 const reducer = (state, action) => {
     switch(action.type){
         case "CHANGE_THEME":
             localStorage.setItem("theme", action.theme)
             return {
                 theme: action.theme
             }
         default: 
             return state
     }
 }
 
 
 export default reducer