import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Holidays() {
    const [holiday, setHoliday] = useState({
        date:"",
        name:"",
        description:"",
        country:""
    });
    useEffect(() => {
      loadHolidays();
    
    }, [])
    const {id}=`Us`;
    const {year}=`2022`;

    const loadHolidays = async ()=>{
        const res = await axios.get(`https://calendarific.com/api/v2/holidays?&api_key=8b3ec351e7a4bea5ab34323761dd950c3a6797dd&country=${id}&year=${year}`);
        // setHoliday(res.data);
        console.log(res.data)

    } 
    
  return (
    <table className="table">
  <thead>
    <tr>
      {/* <th scope="col">Date:{holiday.name}</th> */}
      <th scope="col">name</th>
      <th scope="col">description:</th>
      <th scope="col">country:</th>
    </tr>
  </thead>
  <tbody>
      {/* {
        setHoliday. .map((response,index)=>(
            <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{response.date}</td>
            <td>{response.name}</td>
            <td>{response.description}</td>
            <td>{response.country}</td>
          </tr>
        ))
      }
     */}
  </tbody>
</table>
  )
}
