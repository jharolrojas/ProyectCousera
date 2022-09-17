import { useState } from "react";
import "./App.css";
import { NavBar, PlayerSection} from "./page";
// import logo from "../public/assets/logo.png";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <div className="buttomMain " onClick={() => setShow(!show)}>
        <buttom>
          {/* <img src={logo} alt="" /> */}
        </buttom>
      </div>
      <NavBar show={show} />
      <PlayerSection />
    </div>
  );
}

export default App;
