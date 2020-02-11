import React from 'react';
import s from './Myposts.module.scss';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

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

const maxLength10 = maxLengthCreator(10);

const AddPostBody = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name="newPostBody"
                   placeholder={"post message"}
                   validate={[ required, maxLength10 ]} />
            <button>Add post</button>
        </form>
    );
}

const AddPostBodyRedux = reduxForm({form: "profileAddPostBody"})(AddPostBody);

export default Myposts;