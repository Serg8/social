import React, {Component} from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Myposts from "./Myposts";

class MypostsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let state = this.props.store.getState();

        let addPost = () => {
            this.props.store.dispatch(addPostActionCreator());
        };

        let postChange = (text) => {
            this.props.store.dispatch(updateNewPostTextActionCreator(text));
        };

        return (
            <Myposts updateNewPostText={postChange}
                     addPost={addPost}
                     postsData={state.profilePage.postsData}
                     newPostText={state.profilePage.newPostText}
            />
        );
    }

}

export default MypostsContainer;