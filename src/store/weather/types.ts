export const SET_WEATHER = 'SET_WEATHER_001';
export const CLEAR_WEATHER = 'CLEAR_WEATHER_002';

export type WeatherState = {
  temperature: number;
  measurement: string;
};

type SetWeatherAction = {
  type: typeof SET_WEATHER;
  payload: WeatherState;
};

type ClearWeatherAction = {
  type: typeof CLEAR_WEATHER;
  meta: {
    timestamp: number;
  };
};

export type WeatherActionTypes = SetWeatherAction | ClearWeatherAction;
