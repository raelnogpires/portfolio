import { Route } from 'react-router-dom';

import './App-dark.css';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Route exact path="/" component={ Home } />
      <Route path="/about" component={ About } />
      <Route path="/projects" component={ Projects } />
    </>
  );
}

export default App;
