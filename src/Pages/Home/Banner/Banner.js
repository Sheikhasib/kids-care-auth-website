import React from "react";
import { Carousel } from "react-bootstrap";

// https://i.ibb.co/gwVKVgh/Banner-1.jpg
// https://i.ibb.co/bzBnvBB/Banner-2.jpg
// https://i.ibb.co/zRNGHS6/Banner-3.jpg
// https://ibb.co/8x36NWC
// https://ibb.co/QKBrhXX
// https://ibb.co/C2pdVbm
// It is not how much you do but how much love you put in the doing.
// I may be compelled to face danger, but never fear it, and while our soldiers can stand and fight, I can stand and feed and nurse them.
// The charity is a trifle to us can be precious to others.

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/PWpwF7L/Pediatrician-doctor-woman-doing-medical-examination-of-baby-boy-Listening-to-kid-heart-rate-with-ste.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-dark">First slide label</h3>
            <p className="text-dark">
              It is not how much you do but how much love you put in the doing.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/jrKgqHH/Parents-and-kid-visiting-pediatrician-Couple-with-child-consulting-family-doctor-or-assistant-in-pha.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-dark">Second slide label</h3>
            <p className="text-dark">
              I may be compelled to face danger, but never fear it, and while
              our soldiers can stand and fight, I can stand and feed and nurse
              them.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/0tpNYCm/Pediatrician-and-woman-with-girl-sit-in-medical-office-Vector-cartoon-illustration-of-cabinet-interi.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-dark">Third slide label</h3>
            <p className="text-dark">The charity is a trifle to us can be precious to others.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
