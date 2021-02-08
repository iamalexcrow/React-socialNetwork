const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = { 
    posts: [
        {id:1, message: "how are you asshole?", likesCount: 19},
        {id:2, message: "where do you live?", likesCount: 11}, 
        {id:3, message: "I am really trying to be popular", likesCount: 65}, 
        {id:4, message: "Mexico or China", likesCount: 5}, 
        {id:5, message: "how to learn react fast", likesCount: 22}, 
        {id:6, message: "purum pum pum", likesCount: 32}  
      ],
      newPostText: "React today!"
    }

const profileReducer = (state  = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 7,
                message: state.newPostText, 
                likesCount: 0 
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
            
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
});

export default profileReducer;