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
    ]
};

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, msg: body}]
            };
        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody }); // short return

export default dialogsReducer;