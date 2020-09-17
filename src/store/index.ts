import { combineReducers } from 'redux';

import weatherReducer, { initialState as weatherState } from './weather/reducers';

export const rootReducer = combineReducers({
    weather: weatherReducer
});

const State = {
    weather: weatherState
};

export type RootState = typeof State;
