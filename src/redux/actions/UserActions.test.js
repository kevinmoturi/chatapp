import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getUser, setUser } from './UserActions';
import { GET_USER, SET_USER } from './../types/Index';

// Create a mock store
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('user actions', () => {
    it('action type should be GET_USER and snapshot taken', () => {
        store.dispatch(getUser());
        expect(store.getActions()).toMatchSnapshot();
        expect(store.getActions()[0].type).toEqual(GET_USER);
    });
    it('action type should be SET_USER and should pass name in the payload and snapshot taken', () => {
        let name = 'Kevin';
        store.dispatch(setUser(name));
        expect(store.getActions()).toMatchSnapshot();
        expect(store.getActions()[1].type).toEqual(SET_USER);
        expect(store.getActions()[1].payload).toEqual(name);
    });
});