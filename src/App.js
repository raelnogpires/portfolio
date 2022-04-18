import { Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    // <>
    //   <Route exact path="/" component={ Home } />
    //   <Route path="/about" component={ About } />
    // </>
    // <p>oi</p>
    <Home />
  );
}

export default App;
