import * as actions from './actions';
import * as types from './types';

describe('weather actions', () => {
  test('creates an action to get the weather', () => {
    const weather = { temperature: 33, measurement: 'Celsius' };

    const expectedAction = {
      type: types.SET_WEATHER,
      payload: weather
    };

    expect(actions.setWeather(weather)).toEqual(expectedAction);
  });

  test('creates an action to clear the weather', () => {
    const expectedAction = {
      type: types.CLEAR_WEATHER,
      meta: { timestamp: Date.now() }
    };

    expect(actions.clearWeather()).toEqual(expectedAction);
  });
});
