import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { RootState } from '../store';
import { WeatherState } from '../store/weather/types';
import { thunkGetWeather } from '../store/weather/thunks';
import { AppDispatch } from '../store/store';
import WeatherIndicator from '../views/weather-indicator/WeatherIndicator';

type Props = {
  weather: WeatherState;
  getWeatherThunk: () => void;
};

export const WeatherIndicatorContainer: React.FC<Props> = props => {
  const { getWeatherThunk } = props;

  useEffect(() => {
    getWeatherThunk();
  }, [getWeatherThunk]);

  return <WeatherIndicator {...props.weather} />;
};

/**
 * Function to define the shape of data to return to the container.
 * @param {object} state Global Redux store state.
 */
const mapStateToProps = (state: RootState) => {
  return { weather: state.weather };
};

/**
 * Assigns Redux actions to be passed back as props, wrapped by the Redux dispatcher.
 * @param {function} dispatch Redux dispatcher for actions to interact with the store.
 */
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getWeatherThunk: () => dispatch(thunkGetWeather())
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherIndicatorContainer);
