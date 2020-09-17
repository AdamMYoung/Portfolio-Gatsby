import React from 'react';
import { render } from '@testing-library/react';

import WeatherIndicator from './WeatherIndicator';

test('renders weather indicator', () => {
  const { getByText } = render(<WeatherIndicator temperature={0} measurement={'Celsius'} />);
  const linkElement = getByText(/0 Celsius/i);

  expect(linkElement).toBeInTheDocument();
});
