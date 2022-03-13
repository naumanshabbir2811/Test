
import './App.css';
import React ,{useState,useEffect} from "react";
import { Calendar , dateFnsLocalizer} from 'react-big-calendar';
import parse from 'date-fns/parse'
import format from 'date-fns/format'
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDate';
import "react-big-calendar/lib/css/react-big-calendar.css"
import enUS from 'date-fns/locale/en-US'
import moment from 'react-big-calendar/lib/localizers/moment';
import Holidays from './components/Holidays';
import axios from 'axios';

const locales = {
  'en-US': enUS,
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})
const events =[
  {
    title: "Exam",
    allDay : true,
    start : new Date(2022,1,21),
    end : new Date (2022,1,22)
  }
]



function App() {
  const {id}=`Us`;
  const {year}=`2022`;
  const [holidays, setHolidays] = useState([])

    const getHolidays = async()=>{
      const responce = await axios.get(`https://calendarific.com/api/v2/holidays?&api_key=8b3ec351e7a4bea5ab34323761dd950c3a6797dd&country=${id}&year=${year}`);
      // console.log(responce.data);

    }
    useEffect(()=>{
      getHolidays()
    },[])
 return (
    <div className="App">
      <h1>Calendar</h1>
     <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{height: 500, margin: "50px"}}></Calendar>
     <Holidays/>
    </div>
  );
}

export default App;
