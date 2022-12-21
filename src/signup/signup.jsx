import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

/**
* @author
* @function SignUp
**/

export const SignUp = (props) => {
  return(
    <div className="signup-body">
        <form className="signup-form">
        <h1 className="signup-heading">Sign Up</h1>
        <a><Link to='/signin'>Have an account?</Link> </a>
        <div className='name'>
        <label className='user-name1'>Username:</label> <br />
        <input type="text" className='user-name' placeholder='Enter username...'/>
        </div>
        <div className='email'>
        <label className='user-name1'>Email:</label> <br />
        <input type="email" className='user-name' placeholder='Enter email...'/>
        </div>
        <div className='pass'>
        <label className='user-name1'>Password:</label> <br />
        <input type="password" className='user-name' placeholder='Enter password...'/>
        </div>
        <button className='signup-button' type='submit'>Sign up</button>
        </form>
    </div>
   )
  }
