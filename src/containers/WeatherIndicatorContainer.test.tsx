import React from 'react';
import { render } from '@testing-library/react';

import { WeatherIndicatorContainer } from './WeatherIndicatorContainer';

describe('weather indicator container', () => {
  test('renders correctly and executes thunk', () => {
    const mockCallback = jest.fn();
    const mockState = { temperature: 7, measurement: 'Degrees' };

    const { getByTestId } = render(
      <div data-testid='weather-indicator'>
        <WeatherIndicatorContainer weather={mockState} getWeatherThunk={mockCallback} />
      </div>
    );

    const weatherIndicator = getByTestId('weather-indicator');

    expect(weatherIndicator).toBeInTheDocument();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
