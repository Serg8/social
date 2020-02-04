import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState  = {
    postsData: [
        {id: 1, msg: 'My first post', likesCount: '3'},
        {id: 2, msg: 'second message', likesCount: '8'},
        {id: 3, msg: 'third mess', likesCount: '78'},
    ],
    newPostText: 'default text',
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                msg: state.newPostText,
                likesCount: 12,
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
         case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST }); // short return
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}


export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;