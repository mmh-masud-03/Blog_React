import React from 'react';
import { Post } from '../post/post';
import './posts.css';

/**
* @author
* @function Posts
**/

export const Posts = (props) => {
  return(
    <> 
     <div className="posts" id="global-feed">
    Global Feed
    </div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        </>
    
   )
  }
