import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import Axios from "axios";

const moment= require('moment') 



export const Calen = (props) => {

  var result = []

  for(var i in props.data){
    result.push(props.data[i].reserved_date);
  }

  const [value, onChange] = useState(new Date());
  const mark = [props.data]
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        tileClassName={({ date, view }) => {
        if(result.find(x=>x===moment(date).format("YYYY-MM-DD"))){
          return 'highlight'
        }
        }}
        locale='en-EN'>
      </Calendar>
    </div>
  );
}
export default Calen

