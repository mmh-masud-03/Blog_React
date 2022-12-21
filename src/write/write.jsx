import React from 'react';
import './write.css';
/**
* @author
* @function Write
**/

export const Write = (props) => {
  return(
    <div className='write'>
        <form className="writeForm">
            <div className="writeFormGroup">
            <input className='write-title' type="text" placeholder='Title' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea className='write-description' placeholder='Tell your story....'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
   )
  }
