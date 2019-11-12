import React, {Component} from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

class Dialogs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let state = this.props.store.getState().messagesPage;

        let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
        let messagesElements = state.messagesData.map(message => <MessageItem message={message.msg} />);
        let newMessageBody = state.newMessageBody;

        let onSendMessageClick = () => {
            this.props.store.dispatch(sendMessageCreator());
        }

        let onNewMessageChange = (e) => {
            let body = e.target.value;
            this.props.store.dispatch(updateNewMessageBodyCreator(body));
        }

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