import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

function UserRedirect() {
  console.log('userredirect')
  const jwt = sessionStorage.getItem("jwt")
  const role = sessionStorage.getItem("role")
  console.log(jwt)
  console.log(role)
  return (
    <Route>
      { !jwt && <Redirect to="/" />}
    </Route>
  );
}

export default UserRedirect;
