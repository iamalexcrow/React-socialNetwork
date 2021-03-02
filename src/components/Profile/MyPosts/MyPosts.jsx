import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import { reduxForm, Field } from 'redux-form';
import {required, maxLengthCreator} from '../../../Utils/Validators/validator';
import {Textarea} from '../../common/FormsControls/FormsControls';

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let postOnClick =(value) => {
    props.addPost(value.myPost);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>

      <MyPostsReduxForm onSubmit={postOnClick}/>


      <div className={s.posts}>
        {postsElements}
        {/* <Post message={postsData[0].message} likes={postsData[0].likesCount}/>
       <Post message={postsData[1].message} likes={postsData[1].likesCount}/> */}
      </div>
    </div>
  )
}

const maxLength10 = maxLengthCreator(10);

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
      <Field type="text" name="myPost" placeholder="what do you wanna say?" component={Textarea} 
      validate={[required, maxLength10]}/>
      </div>
        <div>
          <button>Add post </button>
        </div>
    </form>
  )
}


const MyPostsReduxForm = reduxForm({form:'myPostsFormInput'})(MyPostsForm)

export default MyPosts; 