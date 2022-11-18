import { useState } from "react";
import { discObj } from "./server/server";

import './style.css'

function App() {

  const [disciplinas, setDisciplinas] = useState(discObj);

  return (
    <div className="App">

    </div>
  );
}

export default App;
