import React from 'react';
import { addPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer> 
//             { store => {
//              let state = store.getState();

//              let addPost = () => {
//                 store.dispatch(addPostActionCreator());
//             }
        
//             let onPostChange = (text) => {
//                 let action = updateNewPostTextActionCreator(text);
//                 store.dispatch(action);
//             }
//           return  <MyPosts updateNewPostText={onPostChange}
//                 addPost={addPost}
//                 posts={state.profilePage.posts}
//                 newPostText={state.profilePage.newPostText} /> }
//         }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text)=> {
            dispatch(addPostActionCreator(text))
        }
    }
}
 
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
// С помощью реакт-редакт мы создаем контейнерные компоненты / в первых скобках мы передаем все то что приходит в компоненты в виде пропсов / во вторых скобках мы указываем саму компоненту в которую приходят пропсы
export default MyPostsContainer;   