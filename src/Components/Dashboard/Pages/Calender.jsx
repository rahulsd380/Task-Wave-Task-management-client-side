import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Header from "./Header";


const Calender = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="max-w-7xl mx-auto py-10">
      <Header></Header>
      <div className="flex justify-center">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
};

export default Calender;
