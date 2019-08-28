import React from 'react';

import { Container } from 'react-grid-system';
import ProjectCardGrid from '../components/ProjectCardGrid';


function App() {
  return (
    <div className="App">
        <h1>Home</h1>
        
        <Container>
          
          <ProjectCardGrid />
        </Container>
        
    </div>
  );
}

export default App;
