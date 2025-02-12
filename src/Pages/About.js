import React from 'react'
import '../Styles/About.css'
import Tile from '../Components/Tile.js'

const About = () => {
  return (
    <div className="About">
         
        <div className='homeContainer'>
{/* about */}

<div  className="aboutContentBox">
        <h1> About Us</h1>
        <p className='aboutPara'>
        Started in 2022, the RTP(Radio Telescope Project) at the Indian Institute of Technology in collaboration with PaAC(Physics and Astronomy Club) focuses on providing students with practical experience in radio astronomy. With a 5-meter aperture radio telescope, the project enables students to learn how to detect and analyze radio signals from space.
        <br/>
        <br/>
        The system has been tested with an Affordable Small Radio Telescope (ASRT) to ensure it meets the necessary standards for educational use. The main goal of the project is to give students hands-on training in astronomy while encouraging curiosity about astrophysics and space exploration.

        </p>
    </div>

       {/* our vission */}
       <div  className="aboutContentBox">
        <h1> Our Vision</h1>
        <p className='aboutPara'>
        Started in 2022, the RTP(Radio Telescope Project) at the Indian Institute of Technology in collaboration with PaAC(Physics and Astronomy Club) focuses on providing students with practical experience in radio astronomy. With a 5-meter aperture radio telescope, the project enables students to learn how to detect and analyze radio signals from space.
       
        </p>
    </div>
       {/* our mission */}
       <div  className="aboutContentBox">
        <h1>Our Mission</h1>
        <p className='aboutPara'>
        Started in 2022, the RTP(Radio Telescope Project) at the Indian Institute of Technology in collaboration with PaAC(Physics and Astronomy Club) focuses on providing students with practical experience in radio astronomy. With a 5-meter aperture radio telescope, the project enables students to learn how to detect and analyze radio signals from space.
        <br/>
        <br/>
        The system has been tested with an Affordable Small Radio Telescope (ASRT) to ensure it meets the necessary standards for educational use. The main goal of the project is to give students hands-on training in astronomy while encouraging curiosity about astrophysics and space exploration.

        </p>
    </div>



        </div>
       
       
       
        
       
    </div>
  )
}

export default About