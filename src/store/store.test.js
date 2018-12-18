import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initalState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', function() {
    it('should handle creating courses', function() {
        const store = createStore(rootReducer, initalState);
        const course = { title: 'Clean Code' };

        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);

        const actual = store.getState().courses[0];
        const expected = { title: 'Clean Code'};

        expect(actual).toEqual(expected);
    });
});