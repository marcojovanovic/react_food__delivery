import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/globalStyle';

import { FoodContext } from './context';

function App() {
  const { LightTheme, DarkTheme, themes, theme } = React.useContext(FoodContext);

  return (
    <>
      <Router>
        <GlobalStyle />
        <ThemeProvider theme={themes[theme]}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/about" component={Products} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
