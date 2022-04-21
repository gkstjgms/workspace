import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

import "./App.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;