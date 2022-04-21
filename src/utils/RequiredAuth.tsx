import type { PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from 'services/hooks/useAppSelector';
import ExpiredToken from './ExpiredToken';

const RequireAuth = ({ children }: PropsWithChildren<{}>) => {
  const auth = useAppSelector(state => state.auth);
  const location = useLocation();

  if (!auth.token || ExpiredToken.isExpired(auth.expired_at)) {
    // Redirect them to the /login page, but save the current location they were
    return <Navigate to='/auth' state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
