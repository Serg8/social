import React from 'react';
import s from './Sidebar.module.scss';
import Navbar from "./Navbar/Navbar";
import FriendsContainer from "./FriendsContainer";


class Sidebar extends React.Component {

    render() {
        return (
            <div className={s.bg}>
                <Navbar />
                <FriendsContainer />
            </div>
        );
    }
}

export default Sidebar;