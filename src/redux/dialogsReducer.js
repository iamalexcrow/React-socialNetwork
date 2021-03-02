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
            ]
      }

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE: {
            let body = action.newMessageBody;
           return {
                ...state,
                messages: [...state.messages, { id: 7, message: body }] 
            };
        }

        default:
            return state;
    }
}


export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;