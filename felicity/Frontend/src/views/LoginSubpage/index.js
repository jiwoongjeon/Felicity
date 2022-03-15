import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { SocketContext } from "../../API/video"

function LoginSubpage() {
  const { id, role } = useContext(SocketContext);
  return (
    <Route>
      { !id ? <Redirect to="/" /> : role ? <Redirect to ="/Patient/Home"/> : <Redirect to ="/Doctor/Home"/> }
    </Route>
  );
}

export default LoginSubpage;
