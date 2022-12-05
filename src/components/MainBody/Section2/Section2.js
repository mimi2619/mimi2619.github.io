import React from "react";
import "./Section2.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Section2() {
  return (
    <div>
      <h2 className="heading-jocuri">Ce jocuri avem?</h2>
      <div className="scrollTo-jocuri" id="jocuri"></div>
      <AnimationOnScroll
        animatePreScroll={true}
        animateIn="fadeInLeft"
        animateOnce={true}
        duration={1}
      >
        <div className="odd-game grid grid-2">
          <div className="text-box">
            <p className="number">01</p>

            <ul className="reguli">
              <li>Participantii vor fi așezați într-un cerc spate în spate</li>
              <li>
                Unul dintre aceștia va desena ceva, următorul va scrie ce a
                desenat primul si tot asa
              </li>
              <li>Prima runda va dura 15 minute</li>
            </ul>
          </div>
          <div className="img-box">
            <img
              src={process.env.PUBLIC_URL + "/gartic.svg"}
              alt="gartic phone logo"
              className="gartic-img"
            />
          </div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        animatePreScroll={true}
        animateIn="fadeInRight"
        animateOnce={true}
        duration={1}
      >
        <div className="even-game  grid grid-2">
          <div className="img-box">
            <img
              src={process.env.PUBLIC_URL + "/skribbl.svg"}
              alt="skirbbl phone logo"
              className="skribbl-img"
            />
          </div>
          <div className="text-box">
            <p className="number">02</p>

            <ul className="reguli">
              <li>
                Un participant va extrage un cuvant si va trebui sa deseneze pe
                tabla acel cuvant iar restul de participanti vor trebui sa
                ghiceasca ce a desenat
              </li>
              <li>
                Cu cat participanti vor raspunde mai rapid cu atat vor primi mai
                multe puncte
              </li>
            </ul>
          </div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        animatePreScroll={true}
        animateIn="fadeInLeft"
        animateOnce={true}
        duration={1}
      >
        <div className="odd-game  grid grid-2">
          <div className="text-box">
            <p className="number">03</p>

            <ul className="reguli">
              <li>Participantii vor fi grupati in 3 echipe.</li>
              <li>
                Echipele una dupa alta, isi aleg regiunea de baza unde isi
                amplaseaza cetatea cu 3 turnuri.
              </li>
              <li>
                Echipele isi aleg o regiune invecinata pe care, daca raspund
                corect la intrebare, o ocupa.
              </li>
              <li>
                În fiecare rundă o echipa poate să atace doar o singură dată.
              </li>
            </ul>
          </div>
          <div className="img-box">
            <img
              src={process.env.PUBLIC_URL + "/triviador.svg"}
              alt="triviador logo"
              className="triviador-img"
            />
          </div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll
        animatePreScroll={true}
        animateIn="fadeInRight"
        animateOnce={true}
        duration={1}
      >
        <div className="even-game  grid grid-2">
          <div className="img-box">
            <img
              src={process.env.PUBLIC_URL + "/picniccuvant.svg"}
              alt="picnic cuvant logo"
              className="pixwords-img"
            />
          </div>
          <div className="text-box">
            <p className="number">04</p>

            <ul className="reguli">
              <li>regula 1</li>
              <li>regula 2</li>
              <li>regula 3</li>
              <li>regula4</li>
            </ul>
          </div>
        </div>
      </AnimationOnScroll>
      {/* <img src="blob.svg" alt="blob" className="blob" />
      <img src="blob2.svg" alt="blob" className="blob2" />
      <img src="blob3.svg" alt="blob" className="blob3" />
      <img src="blob4.svg" alt="blob" className="blob4" /> */}
    </div>
  );
}
