import reducer from './reducers';
import * as types from './types';

describe('weather reducers', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      temperature: -7,
      measurement: 'Degrees'
    });
  });

  test('should handle SET_WEATHER', () => {
    const expectedPayload = {
      temperature: 99,
      measurement: 'Fahrenheit'
    };

    expect(
      reducer(undefined, {
        type: types.SET_WEATHER,
        payload: expectedPayload
      })
    ).toEqual(expectedPayload);
  });

  test('should handle CLEAR_WEATHER', () => {
    expect(
      reducer(undefined, {
        type: types.CLEAR_WEATHER,
        meta: { timestamp: Date.now() }
      })
    ).toEqual({});
  });
});
