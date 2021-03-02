import React from 'react';
import { sendMessageCreator  } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthReddirect} from '../../hoc/WithAuthReddirect'
import { compose } from 'redux';
// const DialogsContainer = () => {

//     return <StoreContext.Consumer>
//         {store => {
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator());
//             }
//             let onNewMessageChange = (body) => {
//                 store.dispatch(updateNewMessageBodyCreator(body));
//             }

//             return <Dialogs updateNewMessageBody={onNewMessageChange}
//                 sendMessage={onSendMessageClick}
//                 dialogsPage={store.getState().dialogsPage} />
//         }
//         }
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
 return {
    dialogsPage: state.dialogsPage
 }
}

let mapDispatchToProps = (dispatch)=> {
 return {
    sendMessage: (newMessageBody)=> {
        dispatch(sendMessageCreator(newMessageBody));
        
    }
  }
}


// let AuthRedirectComponent = withAuthReddirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthReddirect
  )(Dialogs);
  