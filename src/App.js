import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

function App() {
  const [imgStatus, setImgStatus] = useState({
    img1: false,
    img2: false,
    img3: false,
    img3a: false,
    img4: false,
    img5: false,
    img6: false,
    img7: false,
    img8: false,
  });
  const [scrollDirection, setScrollDirection] = useState("arrowDown");

  return (
    <div className="App">
      <Sidebar
        imgStatus={imgStatus}
        setImgStatus={setImgStatus}
        scrollDirection={scrollDirection}
        setScrollDirection={setScrollDirection}
      />
      <Content imgStatus={imgStatus} />
    </div>
  );
}

export default App;
