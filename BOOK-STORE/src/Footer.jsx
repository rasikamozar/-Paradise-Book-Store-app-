import './Footer.css'
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer(){
    return(
        <div className='Footer'>
            
            <div className="row1">पुस्तक Paradise <CopyrightIcon className='icons' style={{fontSize:"1rem"}}/> Private Limited</div>
              <br></br><br></br>
              <div className="row2">
                <span className='Icons'><FacebookIcon  className='icons' style={{ fontSize: '2rem' ,marginRight: '10px'}}/>
                           <InstagramIcon  className='icons' style={{ fontSize: '2rem' ,marginRight: '10px'}}/>
                           <TwitterIcon className='icons' style={{ fontSize: '2rem' ,marginRight: '10px'}}/></span>
              </div>
              <br></br><br></br>
              <div className="row3">
                <a href="">Terms</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="">Services</a></div>             
        
        </div>
    )
}