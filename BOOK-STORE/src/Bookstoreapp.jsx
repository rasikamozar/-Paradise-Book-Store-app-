import { useState } from 'react'
import Carddetails from './Carddetails'
import Search from './Search'
import Navbar from './Navbar'
import Footer from './Footer'
import './Bookstoreapp.css'


export default function Bookstoreapp(){
    const defaultBooks = [
        { id:'1',Author:"Ronold Byre" , Title:"The Secre"}
        
    ];

    const[bookInfo , setbookInfo]=useState([defaultBooks]);
let updateInfo=(result)=>{
    console.log("Updating bookInfo:", result);
    if (Array.isArray(result)) {
        setbookInfo(result);
      } else {
        console.error("Invalid data format received:", result);
      }
}
    return(
         <>
            <Navbar/>
        <Search updateInfo={updateInfo}/>
        <h1>Your Search Result</h1>
        <div className='mul-card'>
        {bookInfo && bookInfo.length > 0 && bookInfo.map((book) => (
          <Carddetails Info={book} key={book.id} />
        ))}
       </div>
        <Footer/>
        </>
        
       
    )
}