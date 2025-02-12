import React from 'react';
import '../Styles/Home.css';
import Tile from '../Components/Tile.js';
import StarryBackground from '../Pages/StarryBackground.js';
import Star from "../Components/Star"; 

const Home = () => {
  return (
    <div className="Home">
      <StarryBackground />
      <div className='homeContainer'>
        
        {/* About */}
        <div className="homeContentBox">
          <h1>What is RTP?</h1>
          <p className='homePara'>
            The Radio Telescope Project (RTP) is a one-of-its-kind initiative undertaken by students at IIT Roorkee to promote scientific research and development in the field of radio astronomy. It focuses on research by students at educational institutions.
          </p>
          <p className='homePara'>
            Started during the pandemic, the team has come a long way to build working models for the actual 5-meter radio telescope from scratch. The system has been tested with an Affordable Small Radio Telescope (ASRT) to ensure it meets the necessary standards for educational use.
          </p>
        </div>

        {/* Our Vision */}
        <div className="homeContentBox">
          <h1>Our Vision</h1>
          <p className='homePara'>
            Providing a platform for students to explore radio astronomy, develop practical skills, and fuel their passion for astrophysics through innovative learning and collaboration.
          </p>
        </div>

        {/* Our Mission */}
        <div className="homeContentBox">
          <h1>Our Mission</h1>
          <p className='homePara'>
            The primary purpose of this project is to probe astronomical sources such as the Sun, the Moon, the 21-cm Hydrogen line coming from our very own Milky Way Galaxy, and even artificial satellites.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="homeContentBox">
          <h1>Project Timeline</h1>
          <ul className="timeline">
            <li><strong>2019-2020:</strong> Project initiated by Piyush Marmat and supported by PaAC. Developed theoretical papers, initial disk design, budget, and project roadmap.</li>
            <li><strong>2020-2022:</strong> Project halted due to COVID-19.</li>
            <li><strong>2022-2023:</strong> 
              <ul>
                <li>Aru Sir’s summer project started with a team working on ASRT using a TV dish.</li>
                <li>Developed an electrical pipeline with new team members: Shivam, Krish, Asray, Priyanshu, Kastuv.</li>
                <li>Mechanical team designed a 5m dish model and identified usable dishes on campus.</li>
                <li>Kastuv developed a data pipeline for ASRT analysis.</li>
              </ul>
            </li>
            <li><strong>2023-2024:</strong>
              <ul>
                <li>Electrical pipeline for the 1420 MHz horn created.</li>
                <li>1420 MHz horn and stand built by mechanical team + Kastuv.</li>
                <li>Kaustav, Amit, and the data team developed a pipeline for generating 1420 MHz plots.</li>
                <li>Motorization of ASRT to capture Kuiper Belt readings.</li>
              </ul>
            </li>
            <li><strong>2024-2025:</strong>
              <ul>
                <li>Development of a new 1420 MHz horn.</li>
                <li>Implementation of interface meters.</li>
                <li>Improved motorization for ASRT.</li>
              </ul>
            </li>
            <li><strong>Side Projects:</strong>
              <ul>
                <li>Microwave circuit development (2023-2024) for data pipeline on a PCB.</li>
                <li>Generation of SNR vs. Gain plots for horn designs (2022-2023).</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Scientific History */}
        <div className="homeContentBox">
          <h1>History and Engineering</h1>
          <p className='homePara'>
            Radio astronomy, a revolutionary branch of astrophysics, began in the early 1930s. Karl Jansky, a radio engineer at Bell Telephone Laboratories, discovered unexpected radio waves emanating from the Milky Way while investigating sources of interference in transatlantic telephone lines. This discovery marked the foundation of an entirely new way of exploring the universe beyond visible light.
          </p>
        </div>

        {/* Working of Radio Telescopes */}
        <div className="homeContentBox">
          <h1>Working of Radio Telescopes</h1>
          <p className='homePara'>Radio telescopes are a combination of antennas, receivers, amplifiers, and recorders that work together to detect and amplify radio waves from space.</p>
          <h4>Antennas</h4>
          <p className='homePara'>These collect radio waves from space. Most antennas are parabolic dishes that reflect the radio waves to a receiver.</p>
          <h4>Receivers and Amplifiers</h4>
          <p className='homePara'>These boost the weak radio signal to a measurable level. Amplifiers are often cooled to very low temperatures to reduce interference.</p>
          <h4>Recorders</h4>
          <p className='homePara'>These keep a record of the signal.</p>
        </div>

      </div>
    </div>
  );
};

export default Home;
