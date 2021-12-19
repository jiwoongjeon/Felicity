import React from "react";
import { Route, Switch } from "react-router-dom";

import Doctor from "./views/Doctor";
import Videocall from "./views/Videocall";
import Login from "./views/Login";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <Login /> },
  { path: "/videocall", key: "video", component: () => <Videocall /> },
  { path: "/Doctor", key: "video", component: () => <Doctor /> },
];

export default ROUTES;

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}