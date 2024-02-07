import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Routers from "./routers/Routers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Routers />
      </div>
    </>
  );
}

export default App;
