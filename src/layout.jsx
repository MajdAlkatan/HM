// AuthenticatedLayout.jsx
import Header from './sections/Header/Header';
import NavBar from './sections/NavBar/NavBar';
import Footer from './sections/Footer/Footer';
import  PropTypes  from 'prop-types';

const AuthenticatedLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
AuthenticatedLayout.prototype={
    children:PropTypes.func.isRequired
}

export default AuthenticatedLayout;

// UnauthenticatedLayout.jsx

const UnauthenticatedLayout = ({ children }) => {
  return <>{children}</>;
};

export { UnauthenticatedLayout};
