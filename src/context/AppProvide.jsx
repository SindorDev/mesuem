import {useReducer} from 'react'
import AppContext from './store'
import reducer, { initialState } from './reducer'

const StateProvider = ({children}) => {
  return (
   <AppContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </AppContext.Provider>
  )
}

export default StateProvider