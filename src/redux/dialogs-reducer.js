const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 4, msg: body});
            return state;
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE }); // short return
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
});

export default dialogsReducer;