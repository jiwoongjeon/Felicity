import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

function LoginRedirect({isRole}) {
  console.log('loginredirect')
  return (
    <Route>
        { !isRole  && <Redirect to="/Doctor/Home" />}
        { isRole  && <Redirect to="/Patient/Home" />}
    </Route>
    
  );
}

export default LoginRedirect;