import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signIn.css'
/**
* @author
* @function 

**/

export const SignIn= (props) => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const history=useNavigate();
  useEffect(() => { 
    if(localStorage.getItem('user-info')){
      history.push('add');
    }
  },[]
  )
  function login(){
    
  }
  return(
    <div className="signup-body">
        <form className="signup-form">
        <h1 className="signup-heading">Sign in</h1>
        <a><Link to='/signup'> Need an account?</Link> </a>
        <div className='name'>
        <label className='user-name1'>Username:</label> <br />
        <input type="text" className='user-name'onChange={(e)=>setUsername(e.targer.value)} placeholder='Enter username...'/>
        </div>
        <div className='pass'>
        <label className='user-name1'>Password:</label> <br />
        <input type="password" className='user-name'onChange={(e)=>setPassword(e.targer.value)} placeholder='Enter password...'/>
        </div>
        <button onClick={login} className='signin-button' type='submit'>Sign in</button>
        </form>
    </div>
    
   )
  }
