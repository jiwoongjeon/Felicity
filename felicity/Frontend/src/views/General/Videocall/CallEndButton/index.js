import React from "react";
import { Button } from "./styles";
import {NavLink} from "react-router-dom"

const CallEndButton = ({context}) => {
    const { leaveCall } = context;

    return (
        <Button onClick={() => {leaveCall();}}>
            <NavLink to="./rating"> 
            End Call
            </NavLink>
        </Button>
    );
};

export default CallEndButton;