import React from 'react';
import information from './information.json'
import './styles.css'
import Header from'./Components/header'
import Skills from './Components/skills';
import Education from './Components/education';
import Experience from './Components/experience';
import Projects from './Components/projects';
import Footer from './Components/footer';

function App() {
  return (
    <div>
      <Header name={information.name} description={information.description} gitHubLink={information.gitHub} linkedInLink={information.linkedIn}/>
      <Skills skillDescription={information.skills}/>
      <Education education={information.education} />
      <Experience experience={information.experience}/>
      <Projects projects={information.projects}/>
      <Footer email={information.email} phone={information.phone}/>
    </div>
  );
}

export default App;
