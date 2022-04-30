import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

function MHTRedirect() {
  console.log('MHTRedirect')
  return (
    <Route>
        <Redirect to="/MHT1" />
    </Route>
    
  );
}

export default MHTRedirect;