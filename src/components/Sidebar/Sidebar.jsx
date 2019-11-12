import React, {Component} from 'react';
import s from './Sidebar.module.scss';
import Navbar from "./Navbar/Navbar";
import Friends from "./Friends/Friends";


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar />
                <Friends state={this.props.state.friendsData} />
            </div>
        );
    }
}

export default Sidebar;