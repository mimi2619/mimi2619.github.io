import React from "react";
import "./Section3.css";

export default function Section3() {
  return (
    <div className="section3">
      <div className="scrollTo-echipa" id="echipa"></div>
      <div className="waves4">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <defs>
            <linearGradient id="gradient" x1="98%" y1="65%" x2="2%" y2="35%">
              <stop offset="5%" stop-color="#3fcac1"></stop>
              <stop offset="95%" stop-color="#1d8a99"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,133 0,133 C 197.46666666666664,134.46666666666667 394.9333333333333,135.93333333333334 562,125 C 729.0666666666667,114.06666666666668 865.7333333333333,90.73333333333333 1007,90 C 1148.2666666666667,89.26666666666667 1294.1333333333332,111.13333333333333 1440,133 C 1440,133 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="0.53"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 200)"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="98%" y1="65%" x2="2%" y2="35%">
              <stop offset="5%" stop-color="#3fcac1"></stop>
              <stop offset="95%" stop-color="#1d8a99"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,266 0,266 C 141.59999999999997,251.86666666666667 283.19999999999993,237.73333333333332 452,235 C 620.8000000000001,232.26666666666668 816.8,240.93333333333334 986,248 C 1155.2,255.06666666666666 1297.6,260.5333333333333 1440,266 C 1440,266 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-1"
            transform="rotate(-180 720 200)"
          ></path>
        </svg>
      </div>
      <h2 className="noi">Cine suntem noi?</h2>
      <div className="echipa-container">
        <div className="grupa">
          <div className="persoana pers1">
            <h3>Alexia</h3>
          </div>
          <div className="persoana pers2">
            <h3>Catalina</h3>
          </div>
          <div className="persoana pers3">
            <h3>Cezar</h3>
          </div>
        </div>
        <div className="grupa">
          <div className="persoana pers4">
            <h3>Cristina</h3>
          </div>
          <div className="persoana pers5">
            <h3>Cristina</h3>
          </div>
          <div className="persoana pers6">
            <h3>Cristi</h3>
          </div>
        </div>
        <div className="grupa">
          <div className="persoana pers7">
            <h3>Iulia</h3>
          </div>
          <div className="persoana pers8">
            <h3>Luchi</h3>
          </div>
          <div className="persoana pers9">
            <h3>Mimi</h3>
          </div>
        </div>
        <div className="images-echipa">
          <img
            src={process.env.PUBLIC_URL + "/img-echipa1.svg"}
            alt="poza echipa"
            className="img-echipa1"
          />
          <img
            src={process.env.PUBLIC_URL + "/img-echipa2.svg"}
            alt="poza echipa"
            className="img-echipa2"
          />
        </div>
      </div>
    </div>
  );
}
