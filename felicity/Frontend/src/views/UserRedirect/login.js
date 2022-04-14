import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

function LoginRedirect({isRole}) {
  console.log('loginredirect')
  return (
    <html lang="en">
        <body>
        <div id="root"></div>
        <Route>
            { !isRole  && <Redirect to="/Doctor/Home" />}
            { isRole  && <Redirect to="/Patient/Home" />}
        </Route>
        </body>
    </html>
    
  );
}

export default LoginRedirect;