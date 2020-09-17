import { setWeather } from './actions';
import { AppThunk } from '../store';
import { WeatherActionTypes } from './types';

/**
 * Returns the current weather from the API.
 */
export function thunkGetWeather(): AppThunk<WeatherActionTypes> {
  return async (dispatch, getState, api) => {
    //Access API via the passed variable.
    const weather = await api.weatherApi.getWeather();

    //Access the current state via the passed function.
    const currentTemperature = getState().weather.temperature;

    //Perform action methods like so.
    return dispatch(setWeather(weather));
  };
}
