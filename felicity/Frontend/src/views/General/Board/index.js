import React from "react"
import Header from '../../../Components/Header/Header';
import {Mostouter, Directory, User, Cat, Title ,Video} from '../../../Components/mostouter';
import Path from '../../../Components/Path';
import Login from '../../../Components/Login';
import { BoardDetail } from "../../../Components/BoardDetail";
import UserRedirect from "../../UserRedirect";
import { BOARD_DATA, USER_DATA } from "./tempData";


function Board(props) {

  const jwt = JSON.parse(sessionStorage.getItem("jwt"))

  function sy(array) {
      var array1 = []
      if (array[0] === 1) {
          array1.push("Cough")
      }
      if (array[1] === 1) {
          array1.push("Vomit")
      }
      if (array[2] === 1) {
          array1.push("Fever")
      }
      if (array[3] === 1) {
          array1.push("Sore Throat")
      }
      if (array[4] === 1) {
          array1.push("Phlegm")
      }
      if (array[5] === 1) {
          array1.push("Runny Nose")
      }
      if (array[6] === 1) {
          array1.push("Nauseous")
      }
      if (array[7] === 1) {
          array1.push("Out of Breath")
      }
      if (array[8] === 1) {
          array1.push("Stomachache")
      }
      if (array[9] === 1) {
          array1.push("Chills")
      }
      if (array[10] === 1) {
          array1.push("Muscle Sickness")
      }
      if (array[11] != null) {
          array1.push(array[11])
      }
      return array1
  };

  return (

    <Mostouter>
      {!jwt && <UserRedirect isRole={!props.isDoctor}/>}

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
      <BoardDetail isDoctor={props.isDoctor} boardData={BOARD_DATA} userData={USER_DATA} symptoms={sy}/>
    </Video>

    </Mostouter>


  );
}

export default Board;

