import React from 'react';
import information from './information.json'
import './styles.css'
import Header from'./Components/header'

function App() {
  return (
    <div>
      <Header name={information.name} description={information.description} gitHubLink={information.gitHub} linkedInLink={information.linkedIn}/>
    </div>
  );
}

export default App;
