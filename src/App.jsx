import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getCookie } from './libs/cookies.js';

const Sobre = lazy(() => import('./pages/Sobre'));
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Cadastro = lazy(() => import('./pages/Cadastro'));
const Compras = lazy(() => import('./pages/Compras'));
const Compra = lazy(() => import('./pages/Compra'));
const Cashback = lazy(() => import('./pages/Cashback'));

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getCookie('token') ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
    }
  />
);

class App extends Component {
  render() {
    return (
      <Suspense fallback={<div></div>}>
        <Switch>
          <PrivateRoute exact path='/' component={Home}/>
          <Route exact path='/sobre' component={Sobre}/>
          <Route exact path='/login' component={Login}/>
          <PrivateRoute exact path='/cadastro' component={Cadastro}/>
          <PrivateRoute exact path='/compras' component={Compras}/>
          <PrivateRoute exact path='/compra' component={Compra}/>
          <PrivateRoute exact path='/cashback' component={Cashback}/>
        </Switch>
      </Suspense>
    );
  }
}

export default App;
