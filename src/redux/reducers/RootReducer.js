import  { combineReducers } from 'redux';

// Listing Reducers
import UserReducer from './UserReducer';
import ChatReducer from './ChatReducer';

export default combineReducers({
    user: UserReducer,
    chats: ChatReducer
});