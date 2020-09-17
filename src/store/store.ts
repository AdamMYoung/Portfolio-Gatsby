import { createStore, applyMiddleware, Action } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { ThunkAction } from 'redux-thunk';

import { rootReducer, RootState } from './index';
import * as api from '../api';

/**
 * Exports a dev-tools wrapped version of the application if in development, otherwise bundles any
 * required middleware into the application and returns a built Redux store.
 *
 * @param {string} apiUrl URL of the API to query.
 */
export default function configureStore() {
  return process.env.NODE_ENV === 'development'
    ? createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))))
    : createStore(rootReducer, applyMiddleware(thunk.withExtraArgument(api)));
}

/**
 * Return type used by thunks when performing async operations.
 */
export type AppThunk<ReturnType = void> = ThunkAction<Promise<ReturnType>, RootState, typeof api, Action<string>>;
export type AppDispatch = ThunkDispatch<RootState, typeof api, Action<string>>;
