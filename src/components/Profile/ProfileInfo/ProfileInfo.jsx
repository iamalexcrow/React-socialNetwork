import React from 'react';
import s from './ProfileInfo.module.css';   
// import MyPosts from './MyPosts/MyPosts';


const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://www.gannett-cdn.com/-mm-/c8dac0cd22f6b4730ca34d62cb389b1cca7e953b/c=0-14-2284-1299/local/-/media/2020/02/28/USATODAY/usatsports/gettyimages-1154896831.jpg?auto=webp&format=pjpg&width=1200" />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
 
export default ProfileInfo;