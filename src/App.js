
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'

import About from './pages/About';
import Contact from './pages/Contact';
import GlobalStyle from './theme/globalStyle'

function App() {
  return (
    <>
      <div className="">
        <Router>
          <GlobalStyle />
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
