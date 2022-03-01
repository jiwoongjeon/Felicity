import React from "react"
import Header from '../../Components/Header/Header';
import {Mostouter, Directory, User, Cat, Title ,Video} from '../../Components/mostouter';
import Path from '../../Components/Path';
import Login from '../../Components/Login';
import { BoardDetail } from "../../Components/BoardDetail";


function Board(props) {
  return (

    <Mostouter>

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
      <BoardDetail isDoctor={props.isDoctor}/>
    </Video>



    </Mostouter>


  );
}

export default Board;

