import { axiosConfig as axios } from './index';
import { Weather } from './types';

const exampleData = { temperature: 16, measurement: 'Degrees' };

/**
 * Returns the current weather.
 */
export const getWeather = (): Promise<Weather> => {
  //return axios.get('/weather');
  return Promise.resolve(exampleData);
};
