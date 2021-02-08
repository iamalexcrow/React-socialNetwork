import React from 'react';
import s from'./Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://cdn.vox-cdn.com/thumbor/C0DOUyAnF2HPhAewJPlskx-n_2M=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15986930/texas_rangers_rwb_dog.jpg" />
          {props.message}
      <div>
        <span> {props.likes} Likes</span>
      </div>
    </div>
  )
}
export default Post;