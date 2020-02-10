import React from 'react';
import s from './Myposts.module.scss';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

class Myposts extends React.Component {

    render() {

        let postsElements = this.props.postsData.map(post => <Post message={post.msg} key={post.id} like={post.likesCount} />);

       // let newPostElement = React.createRef();

        let onAddPost = (values) => {
            this.props.addPost(values.newPostBody);
        }

        return (
            <div>
                <h3>Posts</h3>
                <AddPostBodyRedux onSubmit={onAddPost} />

                <div className={s.posts}>
                    {postsElements}


                </div>
            </div>
        );
    }

}

const AddPostBody = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newPostBody"  />
            <button>Add post</button>
        </form>
    );
}

const AddPostBodyRedux = reduxForm({form: "profileAddPostBody"})(AddPostBody);

export default Myposts;