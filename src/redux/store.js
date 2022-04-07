import  { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import { createStateSyncMiddleware, initStateWithPrevTab } from 'redux-state-sync'

import rootReducer from './reducers/RootReducer';

const initialState = {};

const config = {
    blacklist: ['SET_USER', 'GET_USER']
}

const middleware = [createStateSyncMiddleware(config), thunk];

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware)));

initStateWithPrevTab(store);

export default store;