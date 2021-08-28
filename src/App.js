import { ToastContainer } from 'react-toastify';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Suspense, lazy } from 'react';
import Container from './components/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations, authSelectors } from './redux/auth';
import Header from './components/Header/Header';
import FooterAppBar from './components/Footer/FooterAppBar';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { css } from '@emotion/react';
import PulseLoader from 'react-spinners/PulseLoader';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#464451',
    },
    secondary: {
      main: `#00A86B`,
    },
  },
});

const override = css`
  position: absolute;
  top: 35%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -35%);

  border-color: red;
`;

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  console.log(isFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <PulseLoader css={override} color={'#D1E123'} size={20} />
      ) : (
        <ThemeProvider theme={theme}>
          <Header />
          <Switch>
            <Suspense
              fallback={
                <PulseLoader css={override} color={'#D1E123'} size={20} />
              }
            >
              <PublicRoute exact path="/" component={HomeView} />
              <PublicRoute
                path="/register"
                component={RegisterView}
                redirectTo="/"
                restricted
              />
              <PublicRoute
                path="/login"
                component={LoginView}
                redirectTo="/"
                restricted
              />
              <PrivateRoute
                path="/contacts"
                component={ContactsView}
                redirectTo="/login"
              />
            </Suspense>
          </Switch>
          <FooterAppBar />
        </ThemeProvider>
      )}
      <ToastContainer autoClose={3000} />
    </Container>
  );
}
