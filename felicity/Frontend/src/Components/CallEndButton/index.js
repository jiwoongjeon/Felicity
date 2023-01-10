import React from "react";
import { Button } from "./styles";

const CallEndButton = ({context}) => {
    const { leaveCall } = context;

    return (
        <Button onClick={() => {leaveCall();}} to="/Home"> 
            End Call
        </Button>
    );
};

export default CallEndButton;