import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { Block, Button } from "./styles.js"

function UserRedirect({isRole}) {
  const jwt = JSON.parse(sessionStorage.getItem("jwt"))
  const role = JSON.parse(sessionStorage.getItem("role"))
  console.log('userredirect')
  console.log(jwt)
  console.log(role)
  return (
    <Route>
      { !jwt && <Redirect to="/" />}
      { isRole & !role && <Redirect to="/Doctor/Home" />}
      { !isRole & role && <Redirect to="/Patient/Home" />}
    </Route>
  );
}

export default UserRedirect;
