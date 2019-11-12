import React, {Component} from 'react';
import s from './Profile.module.scss';
import MypostsContainer from './Myposts/MypostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.profile}>
                <ProfileInfo />
                <MypostsContainer store={this.props.store} />
            </div>
        );
    }

}

export default Profile;