import { useState } from "react";
import "./App.css";
import ImageContainer from "./components/ImageContainer";
import Sidebar from "./components/Sidebar";

function App() {
  const [imgStatus, setImgStatus] = useState({
    img1: false,
    img2: false,
  });

  return (
    <div className="App">
      <Sidebar imgStatus={imgStatus} setImgStatus={setImgStatus} />
      <ImageContainer imgClass={``} />
    </div>
  );
}

export default App;
