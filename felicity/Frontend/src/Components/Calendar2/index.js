import React, { useState } from 'react'
import { format } from 'date-fns'
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

export const Calen = () => {
const [date, setDate] = useState()
  return (
    <div>
      <p>
        Selected date: {date ? format(date, 'dd MMM yyyy', { locale: enGB }) : 'none'}.
      </p>
      <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
    </div>
  )
}

export default Calen
