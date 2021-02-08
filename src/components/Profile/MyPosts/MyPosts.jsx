import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import s from'./MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {
  debugger;

let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
 
  let newPostElement = React.createRef();

  let onAddPost = () => {
     props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    console.log(text);
    props.updateNewPostText(text);
    
  }

    return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
        <div>
          <div>
            <textarea onChange={onPostChange}ref={newPostElement} value={props.newPostText}/>
          </div> 
          <div>
            <button onClick={ onAddPost }>Add post </button>
          </div>
        </div>
      
      <div className ={s.posts}>
        {postsElements}
       {/* <Post message={postsData[0].message} likes={postsData[0].likesCount}/>
       <Post message={postsData[1].message} likes={postsData[1].likesCount}/> */}
      </div>
    </div>
    )
}

export default MyPosts; 