import React from "react";
import { Route, Switch, HashRouter as Router } from "react-router-dom";

import Doctor from "./views/Doctor";
import Patient from "./views/Patients/Home";
import Videocall from "./views/General/Videocall";
import Login from "./views/General/Login";
import MHT1 from "./views/Patients/MHT/index1";
import MHT2 from "./views/Patients/MHT/index2";
import MHT3 from "./views/Patients/MHT/index3";
import MHT4 from "./views/Patients/MHT/index4";
import MHT5 from "./views/Patients/MHT/index5";
import MHT6 from "./views/Patients/MHT/index6";
import MHT7 from "./views/Patients/MHT/index7";

import StatusDoctor from "./views/General/Status/doctor";
import StatusPatient from "./views/General/Status/patient";
import Checklist from "./views/General/Checklist/Checklist";
import Profile from "./views/General/Profile";
import Chatting from "./views/General/Chatting";
import Board from "./views/General/Board";
import NewBoard from "./views/General/NewBoard";
import Appointment from "./views/General/Appointment";
import Registration from "./views/General/Registration"
import Meeting from "./views/General/Meeting";
import PatientChat from "./views/Patients/PatientChat";
import DoctorChat from "./views/DoctorChat";
import MultiLogin from "./views/UserRedirect/multilogin";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <Login /> },
  { path: "/registeration", key: "ROOT", component: () => <Registration /> },

  { path: "/Doctor/Board", key: "video", component: () => <Board isDoctor={true}/> },
  { path: "/Doctor/Chatting", key: "video", component: () => <Chatting isDoctor={false}/> },
  { path: "/Doctor/Checklist", key: "video", component: () => <Doctor past={true}/> },
  { path: "/Doctor/Doctor-Conversation", key: "video", component: () => <DoctorChat isDoctor={true}/> },
  { path: "/Doctor/Home", key: "video", component: () => <Doctor past={false}/> },
  { path: "/Doctor/NewPost", key: "video", component: () => <NewBoard isDoctor={true}/> },
  { path: "/Doctor/Meeting", key: "PS", component: () => <Meeting isDoctor={true}/> },
  { path: "/Doctor/Patient-Conversation", key: "video", component: () => <PatientChat isDoctor={true}/> },
  { path: "/Doctor/Profile", key: "video", component: () => <Profile isDoctor={true}/> },
  { path: "/Doctor/Status", key: "video", component: () => <StatusDoctor isDoctor={true}/> },
  { path: "/Doctor/videocall", key: "video", component: () => <Videocall isDoctor={true}/> },
  
  { path: "/Patient/Appointment", key: "video", component: () => <Appointment/> },
  { path: "/Patient/Board", key: "video", component: () => <Board isDoctor={false}/> },
  { path: "/Patient/Chatting", key: "video", component: () => <Chatting isDoctor={false}/> },
  { path: "/Patient/Checklist", key: "video", component: () => <Checklist isDoctor={false}/> },
  { path: "/Patient/Home", key: "video", component: () => <Patient /> },
  { path: "/Patient/NewPost", key: "video", component: () => <NewBoard isDoctor={false}/> },
  { path: "/Patient/Profile", key: "video", component: () => <Profile isDoctor={false}/> },
  { path: "/Patient/RecentPost", key: "PS", component: () => <StatusDoctor isDoctor={false}/> },
  { path: "/Patient/Status", key: "PS", component: () => <StatusPatient /> },
  { path: "/Patient/videocall", key: "video", component: () => <Videocall isDoctor={false}/> },

  { path: "/MHT1", key: "video", component: () => <MHT1 /> },
  { path: "/MHT2", key: "video", component: () => <MHT2 /> },
  { path: "/MHT3", key: "video", component: () => <MHT3 /> },
  { path: "/MHT4", key: "video", component: () => <MHT4 /> },
  { path: "/MHT5", key: "video", component: () => <MHT5 /> },
  { path: "/MHT6", key: "video", component: () => <MHT6 /> },
  { path: "/MHT7", key: "video", component: () => <MHT7 /> },

  { path: "/MultiLogin", key: "video", component: () => <MultiLogin /> },


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
    <Router>
      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
        <Route component={() => <Login/>} />
      
      </Switch>
    </Router>
  );
}