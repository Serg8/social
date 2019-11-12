import React, {Component} from 'react';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

class DialogsContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let state = this.props.store.getState().messagesPage;

        let sendMessageClick = () => {
            this.props.store.dispatch(sendMessageCreator());
        }

        let newMessageChange = (body) => {
            this.props.store.dispatch(updateNewMessageBodyCreator(body));
        }

        return (
            <Dialogs sendMessageClick={sendMessageClick}
                     messagesPage={state}
                     updateNewMessageBody={newMessageChange} />
        );
    }

}

export default DialogsContainer;