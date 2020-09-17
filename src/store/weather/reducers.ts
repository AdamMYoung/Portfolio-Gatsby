import { WeatherState, SET_WEATHER, CLEAR_WEATHER, WeatherActionTypes } from './types';

export const initialState: WeatherState = {
  temperature: -7,
  measurement: 'Degrees'
};

const weatherReducer = (state = initialState, action: WeatherActionTypes) => {
  switch (action.type) {
    case SET_WEATHER:
      return { ...action.payload };
    case CLEAR_WEATHER:
      return {};
    default:
      return state;
  }
};

export default weatherReducer;
