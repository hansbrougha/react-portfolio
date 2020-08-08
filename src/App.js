import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/Main.js";
import Contact from "./pages/Contact.js";
import Portfolio from "./pages/Portfolio.js";
import Nav from "./components/Nav/Nav.js";
import Box from "@material-ui/core/Box";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#000000",
      transparent: "#00000000",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ffffff",
      main: "#ffffff",
      dark: "#ffffff",
      contrastText: "#000"
    },
    danger: {
      light: "#ffffff",
      main: "#8C1D34",
      dark: "#580415",
      contrastText: "#000"
    },
    openTitle: "#1D8B75",
    protectTitle: "#1D8B50",
    type: "dark"
  }
});

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Box>
          <Nav />

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
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
