import { GET_USER, SET_USER } from './../types/Index';

export const getUser = () => async dispatch => {

    dispatch({ type: GET_USER });

    return null;

};


export const setUser = (name) => async dispatch => {

    dispatch({ type: SET_USER, payload: name });

    return null;

};