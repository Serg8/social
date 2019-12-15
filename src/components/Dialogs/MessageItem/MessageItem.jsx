import React, {Component} from 'react';
import s from './MessageItem.module.scss';

class MessageItem extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className={s.message}>{this.props.message}</div>
        );
    }
}

export default MessageItem;