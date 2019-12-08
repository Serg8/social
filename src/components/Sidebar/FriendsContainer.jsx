import React, {Component} from 'react';
import Friends from "./Friends/Friends";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}

const mapDispatchToProps = () => {
    return {}
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;