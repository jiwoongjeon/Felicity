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
import MHT7 from "./views/MHT/index7";

import StatusDoctor from "./views/Status/doctor";
import StatusPatient from "./views/Status/patient";
import Checklist from "./views/Checklist/Checklist";
import Profile from "./views/Profile";
import Chatting from "./views/Chatting";
import Board from "./views/Board";
import NewBoard from "./views/NewBoard";
import Appointment from "./views/Appointment";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <Login /> },
  { path: "/Doctor/videocall", key: "video", component: () => <Videocall isDoctor={true}/> },
  { path: "/Patient/videocall", key: "video", component: () => <Videocall isDoctor={false}/> },
  { path: "/Doctor/Home", key: "video", component: () => <Doctor /> },
  { path: "/Patient/Home", key: "video", component: () => <Patient /> },

  { path: "/MHT1", key: "video", component: () => <MHT1 /> },
  { path: "/MHT2", key: "video", component: () => <MHT2 /> },
  { path: "/MHT3", key: "video", component: () => <MHT3 /> },
  { path: "/MHT4", key: "video", component: () => <MHT4 /> },
  { path: "/MHT5", key: "video", component: () => <MHT5 /> },
  { path: "/MHT6", key: "video", component: () => <MHT6 /> },
  { path: "/MHT7", key: "video", component: () => <MHT7 /> },

  { path: "/Doctor/Status", key: "video", component: () => <StatusDoctor isDoctor={true}/> },
  { path: "/Patient/Status", key: "PS", component: () => <StatusPatient /> },
  { path: "/Doctor/Checklist", key: "video", component: () => <Checklist isDoctor={true}/> },
  { path: "/Patient/Checklist", key: "video", component: () => <Checklist isDoctor={false}/> },
  { path: "/Doctor/Profile", key: "video", component: () => <Profile isDoctor={true}/> },
  { path: "/Patient/Profile", key: "video", component: () => <Profile isDoctor={false}/> },

  { path: "/Doctor/Chatting", key: "video", component: () => <Chatting isDoctor={false}/> },
  { path: "/Patient/Chatting", key: "video", component: () => <Chatting isDoctor={false}/> },

  { path: "/Doctor/Board", key: "video", component: () => <Board isDoctor={true}/> },
  { path: "/Patient/Board", key: "video", component: () => <Board isDoctor={false}/> },
  { path: "/Doctor/NewPost", key: "video", component: () => <NewBoard isDoctor={true}/> },
  { path: "/Patient/NewPost", key: "video", component: () => <NewBoard isDoctor={false}/> },

  { path: "/Patient/Appointment", key: "video", component: () => <Appointment/> },
  { path: "/Patient/RecentPost", key: "PS", component: () => <StatusDoctor isDoctor={false}/> },
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