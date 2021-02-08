const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
      }

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body; //хер понятно, но вызывается ререндеринг страницы с новым элементом
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({
                id: 6,
                message: body
            });
            return state;
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: text
});

export default dialogsReducer;