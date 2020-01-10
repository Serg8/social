import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Redirect} from "react-router-dom";

class Dialogs extends React.Component {

    render() {

        let state = this.props.messagesPage;

        let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
        let messagesElements = state.messagesData.map(message => <MessageItem message={message.msg} key={message.id} />);
        let newMessageBody = state.newMessageBody;

        let onSendMessageClick = () => {
            this.props.sendMessageClick();
        }

        let onNewMessageChange = (e) => {
            let body = e.target.value;
            this.props.updateNewMessageBody(body);
        }

        if(!this.props.isAuth) return <Redirect to={'/login'} />

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div><textarea value={newMessageBody}
                                       onChange={onNewMessageChange}
                                       placeholder='Enter your message'></textarea></div>
                        <div><button onClick={onSendMessageClick} >Send</button></div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Dialogs;