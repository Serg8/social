import React, {Component} from 'react';
import s from './Myposts.module.scss';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

class Myposts extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let postsElements = this.props.postsData.map(post => <Post message={post.msg} like={post.likesCount} />);

        let newPostElement = React.createRef();

        let addPost = () => {
            this.props.dispatch(addPostActionCreator());
        };

        let onPostChange = () => {
            let text = newPostElement.current.value;
            this.props.dispatch(updateNewPostTextActionCreator(text));
        };

        return (
            <div>
                <h3>Posts</h3>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                           value={this.props.newPostText} />
                </div>
                <button onClick={addPost}>Add post</button>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        );
    }

}

export default Myposts;