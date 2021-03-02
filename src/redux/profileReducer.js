import {usersAPI, profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = { 
    posts: [
        {id:1, message: "how are you asshole?", likesCount: 19},
        {id:2, message: "where do you live?", likesCount: 11}, 
        {id:3, message: "I am really trying to be popular", likesCount: 65}, 
        {id:4, message: "Mexico or China", likesCount: 5}, 
        {id:5, message: "how to learn react fast", likesCount: 22}, 
        {id:6, message: "purum pum pum", likesCount: 32}  
      ],
      profile: null,
      status: ""
    }

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 7,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }


        case SET_USER_PROFILE: {

            return{
                ...state,
                profile: action.profile
            };
        }


        case SET_STATUS: {

            return{
                ...state,
                status: action.status
            };
        } 

        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfileAC = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(data => {
            dispatch(setUserProfileAC(data));
    });
}
  
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
            dispatch(setStatus(data));
    });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(data => {
           if(data.resultCode === 0) {
                dispatch(setStatus(status));
           }
            
    });
}

export default profileReducer;
 