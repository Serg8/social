import React from 'react';
import s from './Friends.module.scss';

class Friends extends React.Component {

    render() {

        let state = this.props.sidebar;

        let friends = state.friendsData.map(friend => <div className={s.friend} key={friend.id}>{friend.name}</div>);
        return (
            <div>
                <h3>Friends</h3>
                {friends}
            </div>
        );
    }
}

export default Friends;