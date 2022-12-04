import React from "react";
import "./Navbar.css";

export default function Hero() {
  return (
    <div className="background">
      <img
        src={process.env.PUBLIC_URL + "/simple.svg"}
        alt="fundal"
        className="fundal"
      />
      {/* <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 700"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <defs>
            <linearGradient id="gradient" x1="83%" y1="88%" x2="17%" y2="12%">
              <stop offset="5%" stop-color="#0693e3"></stop>
              <stop offset="95%" stop-color="#00d084"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,700 C 0,700 0,233 0,233 C 123.27272727272728,219.44019138755982 246.54545454545456,205.8803827751196 325,195 C 403.45454545454544,184.1196172248804 437.0909090909091,175.9186602870813 535,204 C 632.9090909090909,232.0813397129187 795.090909090909,296.44497607655506 916,291 C 1036.909090909091,285.55502392344494 1116.5454545454547,210.30143540669854 1197,189 C 1277.4545454545453,167.69856459330146 1358.7272727272725,200.34928229665073 1440,233 C 1440,233 1440,700 1440,700 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="0.53"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 350)"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="83%" y1="88%" x2="17%" y2="12%">
              <stop offset="5%" stop-color="#0693e3"></stop>
              <stop offset="95%" stop-color="#00d084"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,700 C 0,700 0,466 0,466 C 117.02392344497608,428.57416267942585 234.04784688995215,391.1483253588517 326,393 C 417.95215311004785,394.8516746411483 484.83253588516754,435.9808612440191 578,460 C 671.1674641148325,484.0191387559809 790.622009569378,490.92822966507185 896,470 C 1001.377990430622,449.07177033492815 1092.6794258373207,400.3062200956938 1181,395 C 1269.3205741626793,389.6937799043062 1354.6602870813397,427.8468899521531 1440,466 C 1440,466 1440,700 1440,700 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-1"
            transform="rotate(-180 720 350)"
          ></path>
        </svg> */}
      <h1 className="title">
        <div></div> Online
        <br /> in <br /> offline
      </h1>
      <div className="images">
        <img
          src={process.env.PUBLIC_URL + "/online.svg"}
          alt="online gaming session"
          className="online-img"
        />
        <img
          src={process.env.PUBLIC_URL + "/offline.svg"}
          alt="online gaming session"
          className="offline-img"
        />
      </div>
    </div>
  );
}
