import React from "react";
import "../Styles/ScientificHistory.css";
import StarryBackground from "../Pages/StarryBackground.js";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  {
    src: "https://public.nrao.edu/wp-content/uploads/2017/07/JanskyAntenna.jpg",
    alt: "Karl Jansky and his rotating antenna",
    legend: "Karl Jansky's Discovery (1931)",
  },
  {
    src: "https://public.nrao.edu/wp-content/uploads/2017/07/ReberTelescope.jpg",
    alt: "Grote Reber's Backyard Radio Telescope",
    legend: "Grote Reber's Parabolic Dish (1937)",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Lovell_Telescope.jpg",
    alt: "Lovell Telescope at Jodrell Bank",
    legend: "Jodrell Bank Observatory (1957)",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Arecibo_Observatory_Aerial_View.jpg",
    alt: "Arecibo Radio Telescope",
    legend: "Arecibo Observatory (1963)",
  },
  {
    src: "https://public.nrao.edu/wp-content/uploads/2017/07/VLA_overview.jpg",
    alt: "Very Large Array in New Mexico",
    legend: "Very Large Array (1980)",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5d/ALMA_andes.jpg",
    alt: "ALMA Array in Chile",
    legend: "Atacama Large Millimeter/submillimeter Array (2013)",
  },
];

const ScientificHistory = () => {
  return (
    <div className="scientific-history">
      <StarryBackground />
      <h1 className="title">Scientific History of Radio Telescopes</h1>
      
      {/* Image Carousel */}
      <div className="carousel-container">
        <Carousel showThumbs={false} autoPlay infiniteLoop>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} />
              <p className="legend">{image.legend}</p>
            </div>
          ))}
        </Carousel>
      </div>
      
      {/* Description Below Carousel */}
      {/* <div className="carousel-description">
        <p>
          The history of radio telescopes dates back to the 1930s when Karl Jansky first discovered radio waves from space. Over the years, advancements in technology led to the development of sophisticated radio telescopes such as the Arecibo Observatory, the Very Large Array, and ALMA. These instruments have significantly contributed to our understanding of celestial objects, allowing astronomers to study black holes, pulsars, and distant galaxies beyond the capabilities of optical telescopes.
        </p>
      </div> */}
      
      {/* Single Info Box */}
      <div className="info-box">
        <h2>History and Engineering</h2>
        <p>
          Radio astronomy, a revolutionary branch of astrophysics, began in the early 1930s. The field was first established when Karl Jansky, a radio engineer at Bell Telephone Laboratories, discovered unexpected radio waves emanating from the Milky Way while investigating sources of interference in transatlantic telephone lines. This discovery marked the first detection of radio emissions from a celestial source and laid the foundation for an entirely new way of exploring the universe beyond visible light.
        </p>
        <h2>Working of Radio Telescopes</h2>
        <p>
          Radio telescopes are a combination of antennas, receivers, amplifiers, and recorders that work together to detect and amplify radio waves from space.
        </p>
        <h3>Antennas</h3>
        <p>These collect radio waves from space. Most antennas are parabolic dishes that reflect the radio waves to a receiver.</p>
        <h3>Receivers and Amplifiers</h3>
        <p>These boost the weak radio signal to a measurable level. Amplifiers are often cooled to very low temperatures to reduce interference.</p>
        <h3>Recorders</h3>
        <p>These keep a record of the signal.</p>
      </div>
    </div>
  );
};

export default ScientificHistory;
