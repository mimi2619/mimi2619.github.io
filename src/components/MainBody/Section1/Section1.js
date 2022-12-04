import React from "react";
import "./Section1.css";

export default function Section1() {
  return (
    <div className="section2">
      <h2 className="heading-2">Informatii</h2>
      <div className="informatii">
        <img src="teamwork2.svg" alt="prezentare" className="poza" />

        <p className="informatii-generale">
          Echipa 7DAYS vine cu o noua modalitate originală și interactivă de a
          crea amintiri frumoase între aderenți și membrii oficiali EESTEC, și
          anume evenimentul ONLINE IN OFFLINE.
          <br /> Scopul evenimentului nostru este de a ne detașa total câteva
          ore de telefoane și mediul online, ca oamenii sa interacționeze cât
          mai mult, să petreacă timp de calitate, dar de asemenea, să plece
          acasă cu zâmbetul pe buze.
        </p>
      </div>
      <div className="container grid grid-3">
        <div className="box">
          <div className="test">
            <img src="data.svg" alt="data" className="data" />
            <p className="text1">
              Cand?
              <br />
              Joi, 5 decembrie, ora 20:00
            </p>
          </div>
        </div>
        <div className="box">
          <img src="locatie.svg" alt="locatie" className="locatie" />
          <p className="text1">
            Unde?
            <br />
            In cadrul Politehnicii
          </p>
        </div>
        <div className="box">
          <img src="echipa.svg" alt="echipa" className="echipa" />
          <p className="text1">
            Cum?
            <br />
            Doua jocuri pe echipe, doua jocuri pe cont propriu
          </p>
        </div>

        <div className="box">
          <img src="premiu.svg" alt="premiu" className="premiu" />
          <p className="text1">
            De ce?
            <br />
            Castigatorii vor castiga un premiu
          </p>
        </div>
        <div className="box">
          <img src="masa.svg" alt="masa" className="masa" />
          <p className="text1">
            Altceva?
            <br />
            Avem si gustari!
          </p>
        </div>
      </div>
      <div className="waves3">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <defs>
            <linearGradient id="gradient" x1="47%" y1="0%" x2="53%" y2="100%">
              <stop offset="5%" stop-color="#3fcac1"></stop>
              <stop offset="95%" stop-color="#1d8a99"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,133 0,133 C 103.86666666666667,104.86666666666667 207.73333333333335,76.73333333333335 393,89 C 578.2666666666667,101.26666666666665 844.9333333333334,153.9333333333333 1033,168 C 1221.0666666666666,182.0666666666667 1330.5333333333333,157.53333333333336 1440,133 C 1440,133 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="0.53"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
          <defs>
            <linearGradient id="gradient" x1="47%" y1="0%" x2="53%" y2="100%">
              <stop offset="5%" stop-color="#3fcac1"></stop>
              <stop offset="95%" stop-color="#1d8a99"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,266 0,266 C 165.06666666666666,252.8 330.1333333333333,239.6 508,236 C 685.8666666666667,232.4 876.5333333333333,238.39999999999998 1034,245 C 1191.4666666666667,251.60000000000002 1315.7333333333333,258.8 1440,266 C 1440,266 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-1"
          ></path>
        </svg>
      </div>
    </div>
  );
}
