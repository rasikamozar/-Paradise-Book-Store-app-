import { TextField } from '@mui/material';
import myImage from './images/Book.jpg';
import seImage from './Images/bg2.png'
import './Search.css'
import SearchIcon from '@mui/icons-material/Search';
import { useState,useEffect } from 'react';

export default function Search({updateInfo}){
    const img_url="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let[Title,setTitle]=useState("");
    let[error,setError]=useState(false);
    const API_URL="https://openlibrary.org/search.json?title=";
   

    let getbookInfo=async() =>{
      try{
        let response=await fetch(
          `${API_URL}${Title}`
        );
       
        let jsonResponse=await response.json();
        let {docs}=jsonResponse;
       
        console.log("API Response:", jsonResponse);

        if(docs && docs.length > 0){
             const bookPromises= docs.slice(0,15).map((bookSingle)=>
             {
              let result={
                id: (bookSingle.key).replace("/works/",""),
                Author: bookSingle.author_name,
                Title: bookSingle.title,
                CoverImage: bookSingle.cover_i
                ? `https://covers.openlibrary.org/b/id/${bookSingle.cover_i}-L.jpg`
                : `${img_url}`,
              }
              console.log(result);
              return result;
             
             });
             const newBooks = await Promise.all(bookPromises);
             updateInfo(newBooks);
        }else {
          setError(true);
          console.log('No search results.');
          updateInfo([]);
        }
      }catch{
        throw err;
      }
    };
    
    useEffect(() => {
      // Load default books when component mounts
      getbookInfo('');
    }, []); 

    let handleChange=(event)=>{
      setTitle(event.target.value);
    };

    let handleSubmit=async(event)=>{
      try{
        event.preventDefault();
        setTitle("");
        let newInfo=await getbookInfo();
        updateInfo(newInfo);
      }catch(err){
        setError(true);
        console.error("Error fetching book information:", err);
      }
    };
       return (
            <div className="searchBox" >
              <h1>A room without Books is like a body without Soul...</h1>
              <div className="head" style={{ display: 'flex' }}>
              
             <img src={myImage} className='main-image' height={500} width={750} alt='Image'/> 
             
             <div className="two" style={{ textAlign: 'center' }}>
             <form onSubmit={handleSubmit}>
              <TextField id="Book" label="Book Name" value={Title} variant="standard" onChange={handleChange} className='input' />
              <button type='submit'><SearchIcon/></button>
              {error && <p>No such Book in our API</p>}
             </form > 
             <img src={seImage} className='second-image' height={400} width={400} alt='image'/></div></div>
           
           </div>
       )
}