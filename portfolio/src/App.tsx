import React from 'react';
import information from './information.json'
import './styles.css'
import Header from'./Components/header'
import Skills from './Components/skills';
import Education from './Components/education';

function App() {
  return (
    <div>
      <Header name={information.name} description={information.description} gitHubLink={information.gitHub} linkedInLink={information.linkedIn}/>
      <Skills skillDescription={information.skills}/>
      <Education education={information.education} />
    </div>
  );
}

export default App;
