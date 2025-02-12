import React from 'react';
import '../Styles/ResultsPublications.css';
import StarryBackground from '../Pages/StarryBackground.js';

const resultsData = [
  {
    type: 'RESULT',
    title: 'Result 1 Title',
    date: 'Published on January 15, 2023',
    description: 'A brief description of this result, covering key findings or details.',
    link: '#'
  },
  {
    type: 'PUBLICATION',
    title: 'Publication 1 Title',
    date: 'Published on February 12, 2023',
    description: 'An overview of this publication, mentioning its scope and significance.',
    link: '#'
  },
  // Add more entries as needed
];

const ResultsPublications = () => {
  return (
    <div className="results-publications">
      <StarryBackground />
      <h1>Results </h1>
      <div className="grid-container">
        {resultsData.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-type">{item.type}</div>
            <h2>{item.title}</h2>
            <p className="date">{item.date}</p>
            <p>{item.description}</p>
            <a href={item.link} className="more-link">Know More</a>
          </div>
        ))}
      </div>
      <div className="resources-section">
        <h3 className='head'>Resources</h3>
        {/* Links for resources can be added here */}
        <ul className="resource-list">
          <li><a href="hello.jg">Link 1</a></li>
          <li><a href="hello.jg">Link 2</a></li>
          <li><a href="hello.jg">Link 3</a></li>
          <li><a href="hello.jg">Link 4</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ResultsPublications;