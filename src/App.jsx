/* eslint-disable no-unused-vars */
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { useContext } from 'react';
import Main from "./routes/home/index"
import AppContext from './context/store';
function App() {
  const [state, dispatch] = useContext(AppContext);
  
  return (
    <div data-current-theme={state.theme}>
     <Routes>
        <Route path='/' element={<Main />}/>
     </Routes>
    </div>
  )
}

export default App
