import React, {Component} from 'react';
import s from './ProfileInfo.module.scss';

class ProfileInfo extends React.Component {
    render() {
        return (
            <div>
                <div className={s.avatar}>foto</div>
                <h2>Name profile</h2>
                <p>text for profile</p>
            </div>
        );
    }
}

export default ProfileInfo;