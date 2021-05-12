import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import React from 'react';
import Location from './pages/Location';
import Contact from './pages/Contact';
import Products from './pages/Products';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/globalStyle';
import 'mapbox-gl/dist/mapbox-gl.css'


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
            <Route exact path="/location" component={Location} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
