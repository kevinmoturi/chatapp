import reducer, {initialState} from './UserReducer';
import { GET_USER, SET_USER } from './../types/Index';

describe('User Reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(null, {})).toMatchSnapshot();
    });
    it('should handle GET_USER', () => {
        expect(
            reducer(initialState,
            {
                type: GET_USER
            })
        ).toMatchSnapshot();
    });
    it('should handle SET_USER', () => {
        expect(
            reducer(initialState,
            {
                type: SET_USER
            })
        ).toMatchSnapshot();
    });
});