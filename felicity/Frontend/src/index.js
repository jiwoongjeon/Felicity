import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@natscale/react-calendar/dist/main.css';
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

import { BrowserRouter as Router } from "react-router-dom";

import { ContextProvider } from './API/video';

<DatePickerCalendar locale={enGB} />

ReactDOM.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById("root")
);

reportWebVitals();
