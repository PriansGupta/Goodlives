import { React, useRef, useEffect } from "react";
import "./details.css";
import Lottie from "lottie-web";
import addiction from "../../../Animations/yoga.json"
// import Tilt from "react-parallax-tilt";

const Details = () => {
    const details_1 = useRef(null);
    useEffect(() => {
      Lottie.loadAnimation({
        container: details_1.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: addiction,
      });
    }, []);
  return (
    <div className="details">
      <h1>
        Tools To Help Your Self, Understand Your Moods And Manage Emotions
        Better
      </h1>
      <div className="one">
        <div>
          <h1>Feeling Anxious?</h1>
          <br></br>
          <p>Practise our guided meditation exercises to calm your mind</p>
        </div>
        <div ref={details_1}></div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Details;
