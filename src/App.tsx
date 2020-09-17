import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Layout from './views/Layout';
import configureStore from './store/store';
import AuthenticationProvider from './providers/AuthenticationProvider';

const store = configureStore();
const history = createBrowserHistory();

const App = () => {
    return (
        <ReduxProvider store={store}>
            <AuthenticationProvider>
                <Router history={history}>
                    <Layout />
                </Router>
            </AuthenticationProvider>
        </ReduxProvider>
    );
};

export default App;
