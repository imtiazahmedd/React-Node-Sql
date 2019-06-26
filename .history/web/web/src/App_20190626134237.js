import React from 'react';
import Button from 'react-bootstrap/Button';

import './App.css';

function App() {
  return (
    <div className="App">
      <p>React Web</p>
      <Button className="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
    </div>
  );
}

export default App;
