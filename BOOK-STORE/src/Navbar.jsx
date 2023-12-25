import './Navbar.css';
import logo from "./Images/logo.png"
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function Navbar(){
    
    return(
        <div className='Nav-bar'>
         <img src={logo} height={80} width={150} className='logo-img'/>
         <a href="" className='options first'>Home</a>
         <a href="" className='options'>Login</a>
         <a href="" className='options'>Register</a>
        <span className='icons'><FavoriteIcon  className="Icon" style={{ fontSize: '2rem' ,marginRight: '10px'}}/>
         <NotificationsIcon className="Icon" style={{ fontSize: '2rem',marginRight: '10px' }}/>
         <ShoppingCartIcon className="Icon" style={{ fontSize: '2rem' }}/></span>
          
    </div>
    );
}