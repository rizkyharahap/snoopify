import { useEffect } from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...props }: RouteProps) => {
  const isAuthenticated = false;

  if (!Component) {
    // thorw error when component not found
    throw Error('component is undefined');
  }

  const { push, location } = useHistory<{
    from?: string;
  }>();

  useEffect(() => {
    if (isAuthenticated) {
      push(location.state.from || '/');
    }
  }, [isAuthenticated, location.state.from, push]);

  return <Route {...props} render={props => <Component {...props} />} />;
};

export default PublicRoute;
