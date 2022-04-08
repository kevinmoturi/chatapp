import { GET_USER, SET_USER } from './../types/Index';

export const initialState = null;

export default function UserReducer(state = initialState, action) {

    switch (action.type) {

        case GET_USER: 

            return state;

        case SET_USER:

            state = action.payload

            return state;

        default:

            return state;

    }

};