import { Outlet , Navigate } from 'react-router-dom';

const PrivateRouter = () => {
  const firstLogin = localStorage.getItem('firstLogin'); // determine if authorized
  return firstLogin ? <Outlet /> : <Navigate to="/" />;  // If authorized, return an outlet that will render child elements .If not, return element that will navigate to login page
}

export default PrivateRouter