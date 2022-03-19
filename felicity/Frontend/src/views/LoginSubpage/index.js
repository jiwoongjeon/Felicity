import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { SocketContext } from "../../API/video"

function UserRedirect() {
  const jwt = JSON.parse(sessionStorage.getItem("jwt"))
  const role = JSON.parse(sessionStorage.getItem("role"))
  return (
    <Route>
      { !jwt ? <Redirect to="/" /> : role ? <Redirect to ="/Patient/Home"/> : <Redirect to ="/Doctor/Home"/> }
    </Route>
  );
}

export default UserRedirect;
