const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState  = {
    postsData: [
        {id: 1, msg: 'My first post', likesCount: '3'},
        {id: 2, msg: 'second message', likesCount: '8'},
        {id: 3, msg: 'third mess', likesCount: '78'},
    ],
    newPostText: 'default text',
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                msg: state.newPostText,
                likesCount: 12,
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST }); // short return
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;