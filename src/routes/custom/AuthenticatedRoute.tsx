import React, { useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { AuthenticationContext } from '../../providers/AuthenticationProvider';

type Props = RouteProps & {
    fallback?: string | Function;
};

const AuthenticatedRoute: React.FC<Props> = props => {
    const { isAuthenticated } = useContext(AuthenticationContext);
    const fallback = props.fallback || '/';

    // User is authenticated, return the standard route.
    if (isAuthenticated) return <Route {...props} />;

    // User is not authenticated, if the fallback provided is a function then execute it, otherwise navigate to the provided route.
    if (typeof fallback == 'function') {
        fallback();
        return <div />;
    } else {
        return <Redirect to={fallback} />;
    }
};

export default AuthenticatedRoute;
