import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';

export const Calen = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} locale='en-EN'/>
    </div>
  );
}
export default Calen

