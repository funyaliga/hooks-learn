import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const routers = [
  {
    name: 'home',
    path: '/',
    component: 'Home',
  },
  {
    name: 'accordion',
    path: '/accordion',
    component: 'Accordion',
  },
];

const Routers = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Switch>
        {routers.map(({
          component, path, routes,
        }) => {
          const Component = lazy(() => import(/* webpackChunkName: '[request]' */ `../pages/${component}`));
          return (
            <Route
              exact
              path={path}
              key={path}
              render={(props) => <Component {...props} routes={routes} />}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default Routers;
