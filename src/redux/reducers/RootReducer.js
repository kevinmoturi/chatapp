import  { combineReducers } from 'redux';
import { withReduxStateSync } from 'redux-state-sync';

// Listing Reducers
import UserReducer from './UserReducer';
import ChatReducer from './ChatReducer';

const rootReducer = combineReducers({
    user: UserReducer,
    chats: ChatReducer
});

export default withReduxStateSync(rootReducer);