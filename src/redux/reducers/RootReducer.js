import  { combineReducers } from 'redux';

// Listing Reducers
import UserReducer from './UserReducer';

export default combineReducers({

    user: UserReducer

});