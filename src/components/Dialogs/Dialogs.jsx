import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

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
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        );
    }

}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div><button>Send</button></div>
        </form>
    );
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;