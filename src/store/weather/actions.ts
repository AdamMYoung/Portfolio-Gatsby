import { SET_WEATHER, CLEAR_WEATHER, WeatherActionTypes, WeatherState } from './types';

/**
 * Sets the current weather.
 */
export function setWeather(weather: WeatherState): WeatherActionTypes {
  return {
    type: SET_WEATHER,
    payload: weather
  };
}

/**
 * Deletes the current weather.
 */
export function clearWeather(): WeatherActionTypes {
  return {
    type: CLEAR_WEATHER,
    meta: {
      timestamp: Date.now()
    }
  };
}
