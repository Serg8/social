import React, {Component} from 'react';
import s from './Friends.module.scss';

class Friends extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let friends = this.props.state.map(friend => <div className={s.friend}>{friend.name}</div>);
        return (
            <div>
                <h3>Friends</h3>
                {friends}
            </div>
        );
    }
}

export default Friends;