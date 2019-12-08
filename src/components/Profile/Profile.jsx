import React, {Component} from 'react';
import s from './Profile.module.scss';
import MypostsContainer from './Myposts/MypostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class Profile extends React.Component {

    render() {
        return (
            <div className={s.profile}>
                <ProfileInfo />
                <MypostsContainer />
            </div>
        );
    }

}

export default Profile;