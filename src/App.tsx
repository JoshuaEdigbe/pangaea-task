// react libraries
import React from 'react';

// third-party libraries
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Home from 'pages/Home';

// styles
import './App.scss';

const App: React.FC<any> = () => {
  return (
    <div className="App">
      <p>Hello World</p>

      <Router>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
};

export default App;
