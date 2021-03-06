import { React, useRef, useEffect } from "react";
import Lottie from "lottie-web";
import "./home.css";
import think from "../../../Animations/thinking-2.json";
// import think2 from "../../../Animations/thinking-1.json";

const Home = () => {
  const lottieBox = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: lottieBox.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: think,
    });
  }, []);

  return (
    <div className="home">
      <div>
        <h1>
          How Do We <br></br>Help You<br></br>Lead A Good <br></br>Life.....?
        </h1>
      </div>
      <div className="landing" ref={lottieBox}></div>
    </div>
  );
};

export default Home;
