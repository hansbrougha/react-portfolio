import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main.js";
import Contact from "./pages/Contact.js";
import Portfolio from "./pages/Portfolio.js";
import Nav from "./components/Nav/Nav.js";
import Box from "@material-ui/core/Box";
// import theme from './components/Theme/theme'
// import { ThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Box>
          <Switch>
            <Route exact path={["/", "/main"]}>
              <Main />
            </Route>
            <Route exact path={["/contact"]}>
              <Contact />
            </Route>
            <Route exact path={["/portfolio"]}>
              <Portfolio />
            </Route>
          </Switch>
        </Box>
      </Router>
    </div>
  );
}

export default App;
