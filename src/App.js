import { useEffect, useState } from "react";
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
    img6a: false,
    img7: false,
    img8: false,
  });
  const [scrollDirection, setScrollDirection] = useState("arrowDown");
  const [screenSize, setScreenSize] = useState();

  useEffect(() => {
    // Check if the screen size is smaller than 767px
    console.log(`${window.matchMedia("(max-width: 767px)").matches}`);
    window.matchMedia("(max-width: 767px)").matches
      ? setScreenSize(true)
      : setScreenSize(false);
  }, [screenSize]);

  //If the screen size is smaller than 400px, only render the Sidebar component
  if (screenSize) {
    return (
      <div className="App">
        <Sidebar
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
          screenSize={screenSize}
          scrollDirection={scrollDirection}
          setScrollDirection={setScrollDirection}
        />
      </div>
    );
  } else
    return (
      <div className="App">
        <Sidebar
          imgStatus={imgStatus}
          setImgStatus={setImgStatus}
          scrollDirection={scrollDirection}
          setScrollDirection={setScrollDirection}
          screenSize={screenSize}
        />
        <Content imgStatus={imgStatus} />
      </div>
    );
}

export default App;
