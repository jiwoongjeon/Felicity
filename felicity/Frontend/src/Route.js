import React from "react";
import { Route, Switch } from "react-router-dom";

import Doctor from "./views/Doctor";
import Patient from "./views/Patient";
import Videocall from "./views/Videocall";
import Login from "./views/Login";
import MHT1 from "./views/MHT/index1";
import MHT2 from "./views/MHT/index2";
import MHT3 from "./views/MHT/index3";
import MHT4 from "./views/MHT/index4";
import MHT5 from "./views/MHT/index5";
import MHT6 from "./views/MHT/index6";
import StatusPatient from "./views/Status/patient";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <Login /> },
  { path: "/videocall", key: "video", component: () => <Videocall /> },
  { path: "/Doctor", key: "video", component: () => <Doctor /> },
  { path: "/Patient", key: "video", component: () => <Patient /> },
  { path: "/MHT1", key: "video", component: () => <MHT1 /> },
  { path: "/MHT2", key: "video", component: () => <MHT2 /> },
  { path: "/MHT3", key: "video", component: () => <MHT3 /> },
  { path: "/MHT4", key: "video", component: () => <MHT4 /> },
  { path: "/MHT5", key: "video", component: () => <MHT5 /> },
  { path: "/MHT6", key: "video", component: () => <MHT6 /> },
  { path: "/StatusPatient", key: "PS", component: () => <StatusPatient /> }
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