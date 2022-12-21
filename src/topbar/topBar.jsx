import { Link } from 'react-router-dom';
import './topbar.css';

/**
* @author
* @function TopBar
**/

export const TopBar = (props) => {
  const user=true;
  return(
    <div className="nav">
        <div class="blog">
            Blog
        </div>
   
    <div className="topnav">
      <ul className="top-list">
        <li><Link to="/" className='list-items'> Home</Link></li>
        <li><Link to="/signin" className='list-items'> Sign In</Link></li>
        <li><Link to="/signup" className='list-items'> Sign Up</Link></li>
        <li><Link to="/write" className='list-items'> New Post</Link></li>
        <li><Link to="/" className='list-items'> User Name</Link></li>
      </ul>
        {/* <a class="active"><Link to="/"> Home</Link> </a>
        <a href="#news">Sign in</a>
        <a href="#contact">Sign up</a> */}
        
      </div> 
    </div>
   )
  }
