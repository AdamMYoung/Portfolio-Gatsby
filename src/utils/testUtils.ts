import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';

import { axiosConfig } from '../api';
import { AppDispatch } from '../store/store';

const middleware = [thunk];

/**
 * Returns a mock redux store using the provided type as the store model.
 */
export function getMockStore<TModel>() {
  return configureMockStore<TModel, AppDispatch>(middleware);
}

/**
 * Returns a mock Axios instance based on the current axios API configuration.
 */
export function getMockAxiosInstance() {
  return new MockAdapter(axiosConfig);
}
