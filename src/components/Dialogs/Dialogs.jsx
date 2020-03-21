import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

class Dialogs extends React.Component {

    render() {

        let state = this.props.messagesPage;

        let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
        let messagesElements = state.messagesData.map(message => <MessageItem message={message.msg} key={message.id} />);
        let newMessageBody = state.newMessageBody;


        let addNewMessage = (values) => {
            this.props.sendMessageClick(values.newMessageBody);
        }

       // if(!this.props.isAuth) return <Redirect to={'/login'} />

        return (
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>

                </div>
                <AddMessageForm onSubmit={addNewMessage} />
            </div>
        );
    }

}


export default Dialogs;