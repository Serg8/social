import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    },
}

export default store;
window.store = store;
//store - OOP