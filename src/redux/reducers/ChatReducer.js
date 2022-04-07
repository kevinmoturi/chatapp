import { GET_CHATS, NEW_CHAT } from './../types/Index';

const initialState = [];

export default function ChatReducer(state = initialState, action) {

    switch (action.type) {

        case GET_CHATS: 

            return state;

        case NEW_CHAT:

            state = [...state, action.payload]

            return state;

        default:

            return state;

    }

};