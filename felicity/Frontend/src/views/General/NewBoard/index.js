import React, { useContext } from "react"
import Header from '../../../Components/Header/Header';
import {Mostouter, Directory, User, Cat, Title ,Video} from '../../../Components/mostouter';
import Path from '../../../Components/Path';
import Login from '../../../Components/Login';
import { BoardNew } from "../../Patients/BoardNew";
import UserRedirect from "../../UserRedirect";
import MHTRedirect from "../../UserRedirect/MHT";

import { SocketContext } from "../../../API/video";

function NewBoard(props) {

  const jwt = JSON.parse(sessionStorage.getItem("jwt"))
  const written = JSON.parse(sessionStorage.getItem('level'));

  const { sendPost, posted } = useContext(SocketContext);

  return (

    <Mostouter>
      {!jwt && <UserRedirect isRole={true}/>}
      {!written && <MHTRedirect />}

    <Cat>
        <Header isDoctor={props.isDoctor}/>
    </Cat>

    <Directory>
        <Path directory="Board"/>
    </Directory>

    <User>
        <Login />
    </User>


    <Video>
        <BoardNew sendPost={sendPost} />
    </Video>



    </Mostouter>


  );
}

export default NewBoard;