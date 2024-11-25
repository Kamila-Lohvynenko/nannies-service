import { Navigate } from 'react-router-dom';
import { selectLogin } from '../redux/auth/selectors';
import { useAppSelector } from '../redux/store/hooks';
import { ReactNode } from 'react';

interface PrivateRouteProps {
  component: ReactNode;
  redirectTo: string;
}

const PrivateRoute = ({
  component: Component,
  redirectTo = '/nannies',
}: PrivateRouteProps) => {
  const isLoggedIn = useAppSelector(selectLogin);
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
