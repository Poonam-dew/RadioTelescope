import React from "react";
import "../Styles/TelescopesWeHave.css";
import MyCarousel from "../Components/Carousel.js";
import horn from "../Assets/horn.jpg";
import blackDish from "../Assets/blackDish.jpg";
import redDish from "../Assets/redDish.jpg";
import radioLogo from "../Assets/radioLogo.png";
import StarryBackground from '../Pages/StarryBackground.js';

const Telescopes = [
  {
    Heading: "Feed Horn",
    info: "A pyramidal feed horn capable of detecting the neutral hydrogen (HI) line at 1.42 GHz from the Milky Way galaxy has been designed and implemented.The observations help plot the galaxy's rotation curve, contributing to our understanding of its dynamics.",
    description: "",
    image: horn,
    mechanicalH1: "Pyramidal Design",
    mechanicalPara1: "The feedhorn features a pyramidal shape optimized for maximum gain at the targeted frequency. This design enhances the collection of weak HI signals from cosmic sources",
    mechanicalH2: "Construction",
    mechanicalPara2: "Made from Stainless Steel Sheets to reduce weight while maintaining structural integrity, this feedhorn facilitates easy integration into existing telescopic setups.",
    electicalH1: "Signal Amplification",
    electricalH2: "Receiver Integration",
    electricalPara1: "Incorporates a low-noise amplifier (LNA) to boost the weak signals received by the feedhorn, improving detection sensitivity.",
    electricalPara2: "The feedhorn is connected to a Software Defined Radio (SDR) for real-time signal processing and analysis.",
    achievement: "Successfully detected neutral hydrogen emissions from the Milky Way, contributing to data accumulation for the galaxy's rotation curve analysis.",
    applications:
      "This feedhorn can be utilized in radio astronomy to study the structure and dynamics of galaxies, particularly their rotation curves and dark matter distribution.",
    futurePlans:
      "To further enhance its capabilities by integrating more advanced signal processing algorithms and expanding the frequency range to capture additional celestial phenomena.",
  },


  {
    Heading: "Motorized Small Radio Telescope (MSRT)  ",
    info: "The MSRT is a 70 cm small radio telescope capable of operating at 11.2 	GHz (Ku band) with features that allow for precise tracking of celestial objects	through motorized control. It is an upgraded version of the Affordable Small 	Radio Telescope (ASRT). ",
    description: "",
    image: blackDish,
    mechanicalH1: "Motorized Mount",
    mechanicalH2:"Inclinometer and Gyroscope",
    mechanicalPara1:"The telescope is equipped with a motorized altitude-azimuth mount that allows for precise positioning and tracking of astronomical 	 targets. ",
    mechanicalPara2:"These components provide real-time feedback for maintaining accurate orientation during observations. ",
    electicalH1:"Computer Control",
    electricalH2:"Closed Loop System",
    electricalPara1:"The motors are controlled via a computer interface, allowing for automated tracking and adjustments during observations.",
    electricalPara2:"The integration of a magnetometer along with the inclinometer and gyroscope forms a closed-loop positioning system,enhancing the accuracy of the telescope's tracking capabilities.",
    achievement:"Successfully created a functional small radio telescope capable of tracking 	and receiving signals from celestial sources, contributing to ongoing research 	in astrophysics. ",
    applications:"This telescope can be used for various astronomical observations, including 	tracking satellites, studying solar and lunar radiation, and conducting research 	 in astrophysics. ",
    futurePlans:"To expand the capabilities of the telescope by developing a more robust GNURadio pipeline with SDR for enhanced data processing and integrating 	additional sensors for improved observational precision. ",

  },

  {
    Heading: " Affordable Small Radio Telescope (ASRT)",
    info: "The ASRT is a 65 cm telescope designed for initial testing and educational purposes. It focuses on ease of use and accessibility.",
    description: "",
    image: redDish,
    mechanicalH1: "TV Dish Design",
    mechanicalH2:"Inclined Plane Setup",
    mechanicalPara1:"Utilizes a repurposed TV dish mounted on an inclined plane, allowing for manual positioning to capture radio signals.",
    mechanicalPara2:"This design allows for simpler assembly and positioning compared to more complex mount systems, making it ideal for initial testing phases. ",
    electicalH1:"LNB and SDR Testing",
    electricalH2:"Satellite Finder Integration",
    electricalPara1:"The system includes a low-noise block downconverter (LNB) to collect radio signals, with an SDR employed to analyze and visualize the received data. ",
    electricalPara2:"Initial tests are conducted using a satellite finder to identify and tune into the desired signals independently. ",
    achievement:"Completed the initial testing phase successfully, demonstrating the telescope's ability to detect signals using affordable and accessible components.",
    applications:"This telescope can serve as an educational tool for students and hobbyists interested in radio astronomy, providing hands-on experience with radio signal detection and analysis. ",
    futurePlans:"To improve the design and functionality of the telescope by automating the positioning system and enhancing signal processing capabilities, making it more user-friendly for broader applications in educational settings. ",

  },


  
];

const TelescopeWeHave = () => {
  return (
    <div className="TelescopesWeHave">
      <StarryBackground/>
      <div className="topTele">
        <MyCarousel />
      </div>
      <div className="bottomTele">
        <h1>Our Telescopes</h1>
        <div className="TelescopeContainer">
          {Telescopes.map((Telescope, index) => (
            <TelescopeCard key={index} Telescope={Telescope} isReversed={index % 2 === 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TelescopeCard = ({ Telescope, isReversed }) => {
  return (
    <div className={`Telescope-card ${isReversed ? "reverse" : ""}`}>
      <div className="imgSide">
        <img src={Telescope.image} alt={Telescope.Heading} className="tele-image" />
      </div>
      <div className="contentSide">
        <h2>{Telescope.Heading}</h2>
        <p className="telePara">{Telescope.info}</p>
        <div className="scrollable-content">
          <p className="tele-description">{Telescope.description}</p>
          <h5>Mechanical contributions</h5>
          <p>
            <b>{Telescope.mechanicalH1}: </b>
            {Telescope.mechanicalPara1}
          </p>
          <p>
            <b>{Telescope.mechanicalH2}: </b>
            {Telescope.mechanicalPara2}
          </p>
          <h5>Electrical contributions</h5>
          <p>
            <b>{Telescope.electicalH1}: </b>
            {Telescope.electricalPara1}
          </p>
          <p>
            <b>{Telescope.electricalH2}: </b>
            {Telescope.electricalPara2}
          </p>
          <h5>Achievements</h5>
          <p>{Telescope.achievement}</p>
          <h5>Applications</h5>
          <p>{Telescope.applications}</p>
          <h5>Future Plans</h5>
          <p>{Telescope.futurePlans}</p>
        </div>
      </div>
    </div>
  );
};

export default TelescopeWeHave;
