import axios from 'axios';

import * as weatherApi from './weatherApi';

export const axiosConfig = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export { weatherApi };
