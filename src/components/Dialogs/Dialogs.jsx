import react from 'react';
import s from './Dialogs.module.css';
// import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogsReducer';

const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = state.messages.map((m)=> <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody; 

 
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    } 

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>


            {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
            <DialogItem name={dialogsData[1].name} id="2"/>
            <DialogItem name={dialogsData[2].name} id="3"/>
            <DialogItem name={dialogsData[3].name} id="4"/> */}
           { dialogsElements }

           
                {/* <div className={s.dialog + '' + s.active}>
                    <NavLink to="/dialogs/1">Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Andryuha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Bombila</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Krasauela</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Pontik </NavLink>
                </div> */}
            </div>

            <div className={s.messages}>
                {/* <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/> */}
               <div>{messageElements}</div> 
               <div>
                   <div> <textarea 
                   onChange={onNewMessageChange}
                   value={newMessageBody} placeholder="Enter your message"></textarea> </div>
                   <div> <button onClick={onSendMessageClick}>Send</button></div>
               </div> 
            </div>
        </div>
    )
}

export default Dialogs;