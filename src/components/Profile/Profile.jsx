import React, {Component} from 'react';
import s from './Profile.module.scss';
import Myposts from './Myposts/Myposts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={s.profile}>
                <ProfileInfo />
                <Myposts postsData={this.props.profilePage.postsData} dispatch={this.props.dispatch}
                         newPostText={this.props.profilePage.newPostText} />
            </div>
        );
    }

}

export default Profile;