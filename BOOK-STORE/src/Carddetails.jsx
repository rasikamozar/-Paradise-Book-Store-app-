import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Carddetails.css'
import DisplayInfo from './DisplayInfo';
import { useState } from 'react';


export default function Carddetails({Info}){
   const[show , setShow]=useState(false);
  if (!Info) {
    return null; // or return a default UI or message
   
  }
    
  const coverImage = Info.CoverImage || 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const INIT_URL="https://images.unsplash.com/photo-1633279309595-9ff642da31d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  const url="https://openlibrary.org/works/"; 
  const details = `${url}${Info.id}.json`;


  let displayInfo=()=>{
         setShow(true);
  }
  
  return( 
         
        <div className='container'>
          
        <Card sx={{ maxWidth: 250 }} className='card'>
        <CardMedia
          sx={{ height: 150 }}
          image={coverImage}
          title="Book Image"
        />
        <CardContent className='cardcontent'>
          <Typography gutterBottom variant="h5" component={"span"}>
             <b> {Info.Title}</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {Info.Author}
          </Typography>
        </CardContent>
        <CardActions className='readbutton'>
          <Button size="small" variant="outlined" style={{backgroundColor:'#4C0033' , color:'white' , marginLeft:'5rem'}} onClick={displayInfo}>View</Button>
        </CardActions>
      </Card>
      <DisplayInfo show={show} details={details} onClose={()=>setShow(false)} />
      </div>
    )
}