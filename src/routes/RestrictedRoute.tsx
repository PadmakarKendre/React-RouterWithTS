import { Navigate, useLocation } from 'react-router-dom';

const RestrictedRoute = ({ children }: any) => {
  const location = useLocation();

  const authToken = true;
  if (!authToken) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default RestrictedRoute;
