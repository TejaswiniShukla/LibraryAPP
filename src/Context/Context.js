import React,{createContext,useState} from 'react'
import App from '../App'
import Bookjsondata from '../Bookjson.json';



export const showData=createContext(null)

const Context = () => {
  // console.log(Bookjsondata);
  const [book, setbook] = useState(Bookjsondata)
  return (
     <showData.Provider value={{book,setbook}}  >
         <App/>

     </showData.Provider>
   
  )
}

export default Context