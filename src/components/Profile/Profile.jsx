import React from 'react';
import s from './Profile.module.scss';
import MypostsContainer from './Myposts/MypostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

        return (
            <div className={s.profile}>
                <ProfileInfo profile={props.profile}
                             status={props.status}
                             updateStatus={props.updateStatus} />
                <MypostsContainer />
            </div>
        );

}

export default Profile;