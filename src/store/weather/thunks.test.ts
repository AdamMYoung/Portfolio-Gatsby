import * as thunks from './thunks';
import { getMockAxiosInstance, getMockStore } from '../../utils/testUtils';
import { initialState } from './reducers';

const mockAxios = getMockAxiosInstance();
const mockStore = getMockStore<typeof initialState>();

describe('weather thunks', () => {
  test('create SET_WEATHER when the weather has been fetched ', () => {
    mockAxios.onGet('/weather').reply(200, {
      temperature: 16,
      measurement: 'Degrees'
    });

    const expectedState = { temperature: 16, measurement: 'Degrees' };
    const store = mockStore({ temperature: 1, measurement: 'Degrees' });

    store.dispatch(thunks.thunkGetWeather()).then(() => {
      expect(store.getState()).toEqual(expectedState);
    });
  });
});
