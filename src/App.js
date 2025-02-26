import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import MyCarousel from './Components/Carousel.js';
import './App.css';
import About from './Pages/About.js';
import Home from './Pages/Home.js';
import TeamPage from './Pages/TeamPage.js';
import EventPage from './Pages/EventPage.js';
import StarryBackground from './Pages/StarryBackground.js';
import ResultsPublications from './Pages/ResultsPublications.js';
import ScientificHistory from './Pages/ScientificHistory.js';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TelescopeWeHave from './Pages/TelescopesWeHave.js';

function App() {
  return (
    
           <div className="App">
           
      <Navbar />
      
      <div className="content"> {/* This ensures the content expands and pushes the footer down */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/telescopes" element={<TelescopeWeHave />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/resultsAndPublication" element={<ResultsPublications />} />
          <Route path="/scientificHistory" element={<ScientificHistory />} />
        </Routes>
      </div>
      
      <Footer />
     
    </div>
   
 
  );
}

export default App;
