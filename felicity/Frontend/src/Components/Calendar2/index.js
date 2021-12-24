import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';

export const Calen = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value}/>
    </div>
  );
}
export default Calen

