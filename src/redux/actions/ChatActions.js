import { GET_CHATS, NEW_CHAT } from './../types/Index';

export const getChats = () => async dispatch => {

    dispatch({ type: GET_CHATS });

    return null;

};


export const sendMessage = (obj) => async dispatch => {

    dispatch({ type: NEW_CHAT, payload: obj });

    return null;

};