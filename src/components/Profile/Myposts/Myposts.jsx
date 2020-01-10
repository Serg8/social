import React from 'react';
import s from './Myposts.module.scss';
import Post from './Post/Post';

class Myposts extends React.Component {

    render() {

        let postsElements = this.props.postsData.map(post => <Post message={post.msg} key={post.id} like={post.likesCount} />);

        let newPostElement = React.createRef();

        let onAddPost = () => {
            this.props.addPost();
        };

        let onPostChange = () => {
            let text = newPostElement.current.value;
            this.props.updateNewPostText(text);
        };

        return (
            <div>
                <h3>Posts</h3>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={this.props.newPostText} />
                </div>
                <button onClick={onAddPost}>Add post</button>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        );
    }

}

export default Myposts;