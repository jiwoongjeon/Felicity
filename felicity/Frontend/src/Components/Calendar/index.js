import React, { useState, useCallback } from 'react';
import { Calendar } from '@natscale/react-calendar';


export const Calendars = () => {
    const [value, setValue] = useState();
    const onChange = useCallback(
        (value) => {
          setValue(value);
        },
        [setValue],
      );

    return (
        <div>
            <Calendar value={value} onChange={onChange} />
        </div>
    )
}

export default Calendars





