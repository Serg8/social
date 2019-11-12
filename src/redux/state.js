const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, msg: 'My first post', likesCount: '3'},
                {id: 2, msg: 'second message', likesCount: '8'},
                {id: 3, msg: 'third mess', likesCount: '78'},
            ],
            newPostText: 'default text',
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Valery"},
                {id: 3, name: "Sveta"}
            ],
            messagesData: [
                {id: 1, msg: 'hi'},
                {id: 2, msg: 'hi2'},
                {id: 3, msg: 'hi3'},
            ],
            newMessageBody: '',
        },
        sidebar: {
            friendsData: [
                {id: 1, name: 'Vasay'},
                {id: 2, name: 'Alena'},
                {id: 3, name: 'Denis'}
            ]
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // pattern observer
    },

    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: 4,
                msg: this._state.profilePage.newPostText,
                likesCount: 12,
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if(action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if(action.type === SEND_MESSAGE) {
            let body = this._state.messagesPage.newMessageBody;
            this._state.messagesPage.newMessageBody = '';
            this._state.messagesPage.messagesData.push({id: 4, msg: body});
            this._callSubscriber(this._state);
        }
    },
}

export const addPostActionCreator = () => ({ type: ADD_POST }); // short return
export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
});
export const sendMessageCreator = () => ({ type: SEND_MESSAGE }); // short return
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
});

export default store;
window.store = store;
//store - OOP