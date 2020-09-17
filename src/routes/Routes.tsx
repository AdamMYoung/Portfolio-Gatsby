import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Weather from './Weather';
import AuthenticatedRoute from './custom/AuthenticatedRoute';
import Home from './Home';
import NotFound from './NotFound';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />

            <Route path="/notfound" component={NotFound} />

            {/* General route, not authenticated at all */}
            <Route path="/weather" component={Weather} />

            {/* Custom authenticated route, which provides a fallback if the user is not authenticated.*/}
            <AuthenticatedRoute path="/user" fallback="/notfound" component={Weather} />

            {/* The provided fallback can also be a function to execute.*/}
            <AuthenticatedRoute path="/user2" fallback={() => alert('Not Authorized!')} component={Weather} />

            {/* If left blank, the user will be returned to the root of the site (/).*/}
            <AuthenticatedRoute path="/user3" component={Weather} />
        </Switch>
    );
};

export default Routes;
