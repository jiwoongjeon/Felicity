import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
import Axios from "axios";

const moment= require('moment') 



export const Calen = () => {
  
  const [scheduleData, setScheduleData] = useState([])

  var result = []

  useEffect(() => {
      Axios.post("http://localhost:3001/doctor_schedule", {"doctor_id":1})
      .then((response) => {
          setScheduleData(response.data)
          console.log(response.data)
      })
  }, [])

  for(var i in scheduleData){
    result.push(scheduleData[i].reserved_date);
  }



  const [value, onChange] = useState(new Date());
  const mark = [scheduleData]
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        tileClassName={({ date, view }) => {
        if(result.find(x=>x===moment(date).format("MM-DD-YYYY"))){
          return  'highlight'
        }
        }}
        locale='en-EN'>
      </Calendar>
    </div>
  );
}
export default Calen

