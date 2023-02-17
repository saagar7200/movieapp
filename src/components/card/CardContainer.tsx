import React, { FC, useRef, useState } from "react";
import "./cardcontainer.css";
import CardSlider from "./CardSlider";

// import CardSlider from './CardSlider';

type Props = {};

const CardContainer: FC<Props> = () => {
  const [movie, setMovie] = useState<boolean>(true);
  const streamRef = useRef<any>();
  const onTvRef = useRef<any>();

  const toggleClass = (ele: any, tab: string) => {
    if (tab === "stream") {
      setMovie(() => true);

      onTvRef.current.classList.remove("active");

      streamRef.current.classList.add("active");
    }
    if (tab === "ontv") {
      setMovie((prev) => false);

      streamRef.current.classList.remove("active");

      onTvRef.current.classList.add("active");
    }
  };

  return (
    <>
      <div className="CardContainer">
        <div className="heading">
          <h1> What's Popular</h1>

          <div className="button-container">
            <p
              ref={streamRef}
              onClick={(e) => {
                toggleClass(e.target, "stream");
              }}
              className="content active"
            >
              Streaming
            </p>
            <p
              ref={onTvRef}
              onClick={(e) => {
                toggleClass(e.target, "ontv");
              }}
              className="content"
            >
              {" "}
              On TV
            </p>
          </div>
        </div>

        <CardSlider movie={movie} />
      </div>
    </>
  );
};

export default CardContainer;
