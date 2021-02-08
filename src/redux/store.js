import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

//добавляем переменные выше, чтобы было проще потом

let store = {
    
    _state: {
      profilePage: {
          posts: [
              {id:1, message: "how are you asshole?", likesCount: 19},
              {id:2, message: "where do you live?", likesCount: 11}, 
              {id:3, message: "I am really trying to be popular", likesCount: 65}, 
              {id:4, message: "Mexico or China", likesCount: 5}, 
              {id:5, message: "how to learn react fast", likesCount: 22}, 
              {id:6, message: "purum pum pum", likesCount: 32}  
            ],
            newPostText: "React today!"
      },
      
      dialogsPage: {
          messages: [
              {id:1, message: "Kiss my abs"},
              {id:2, message: "How do you do your ribs?"}, 
              {id:3, message: "React or Angular"}, 
              {id:4, message: "10 000 steps a day"}, 
              {id:5, message: "work eat sleep"}, 
              {id:6, message: "watch Netflix"}  
            ],
              
            dialogs: [
                {id:1, name: "Dimych"}, 
                {id:2, name: "Huilych"}, 
                {id:3, name: "Andryha"}, 
                {id:4, name: "Chuvachelo"}, 
                {id:5, name: "Krasauchik"}, 
                {id:6, name: "Valeronchik"}  
              ],
            newMessageBody: ""
        },
        sidebar: {}
  },
_callSubscriber() {
    console.log('state is changed');
  },


 
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer; // наблюдатель pattern observer  // publisher - subscriber 
  },

  dispatch(action) { // {type: 'ADD-POST'}

  this._state.profilePage = profileReducer(this._state.profilePage, action);
  this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
  this._state.sidebar = sidebarReducer(this._state.sidebar, action);

  this._callSubscriber(this._state);

    // if (action.type === ADD_POST) {
    //   let newPost = { 
    //     id: 7,
    //     message: this._state.profilePage.newPostText,
    //     likesCount: 0
    //   };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     this._state.profilePage.newPostText = action.newText;
    //     this._callSubscriber(this._state);
    // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //     this._state.dialogsPage.newMessageBody = action.body;
    //     this._callSubscriber(this._state); //хер понятно, но вызывается ререндеринг страницы с новым элементом
    // } else if (action.type === SEND_MESSAGE) {
    //     let body = this._state.dialogsPage.newMessageBody;
    //     this._state.dialogsPage.newMessageBody = '';
    //     this._state.dialogsPage.messages.push({id:6, message: body})
    //     this._callSubscriber(this._state); //хер понятно, но вызывается ререндеринг страницы с новым элементом
    // }
  }
}


// export const addPostActionCreator = () => {
//   return {
//     type: ADD_POST
//   }
// }







export default store;
window.store = store;