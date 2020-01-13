import React from 'react';
import s from './ProfileInfo.module.scss';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

        if (!props.profile) {
            return <Preloader />
        }


        return (
            <div>
                {/*<div className={s.avatar}>*/}
                {/*    <img src={props.profile.photos.large} alt="" />*/}
                {/*</div>*/}
                <h2>{props.profile.fullName}</h2>
                    <ProfileStatus status={"test"} />
                <p>Обо мне: {props.profile.aboutMe}</p>
                <p>Ищу работу: {props.profile.lookingForAJob ? 'да' : 'нет'}</p>
                <p>Описание к поиску работы: {props.profile.lookingForAJobDescription}</p>
                <p>Контакты: вк - {props.profile.contacts.vk}</p>
            </div>
        )

}

export default ProfileInfo;