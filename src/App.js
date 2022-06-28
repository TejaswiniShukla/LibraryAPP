import React,{useState,useContext} from 'react'
import {showData} from './Context/Context'
import "./App.css"

const App = () => {
 
  const {book,setbook} = useContext(showData)
  const [bookss,setbookss] = useState(book.splice(0,5))

  const bookdata=bookss.map((e,i)=>{

         return  <div key={i} className='card'>
         <div className='img'>  
           <div className='img1'>
               <img src={`${e.thumbnailUrl}`} alt=""/>
           </div>         
         </div>
         <div className="des">
             <div className='title'>
             <h5>{e.title}</h5>
             </div>
            <div className='likhna'>
            <p>{e.shortDescription && e.shortDescription.substring(0,60) || e.longDescription && e.longDescription.substring(0,80) }</p>
            <button>PG-{e.pageCount}</button>
            </div>
         </div>
        
    </div>
  })
  
  const loadmore=()=>{
    const copybook=[...book]
    const moredata=copybook.slice(bookss.length,bookss.length+5)
    const totaldata=bookss.concat(moredata)
    setbookss(totaldata)
  }
  return  <div className='main'>
   
       <h1>Reead Books....</h1>
       <hr/>
       <div className='cards'>
          
             <div className='cardsinner'>
                {bookdata}      
            </div>
       
             <hr/>
             <button onClick={loadmore} className='bt'>LoadMore....</button>      
       </div>
       
       
    </div>
}

export default App