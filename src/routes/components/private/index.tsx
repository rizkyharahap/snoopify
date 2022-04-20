import type { ReactNode } from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...props }: RouteProps) => {
  const isAuthenticated = false;

  if (!Component) {
    // thorw error when component not found
    throw Error('component is undefined');
  }

  const render = (props: RouteComponentProps<any>): ReactNode => {
    if (isAuthenticated) {
      return <Component {...props} />;
    }
    return <Redirect to={{ pathname: '/login' }} />;
  };

  return <Route {...props} render={render} />;
};

export default PrivateRoute;
