import React, { useState } from "react";
import Calendar from "react-calendar/dist/umd/Calendar";
import "react-calendar/dist/Calendar.css";

import member from "./components/Member";

function App() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default App;
