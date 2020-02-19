import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme';
import jwtDecode from 'jwt-decode';

// Components
import Navbar from './components/navbar'

// Pages
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';

const theme = createMuiTheme(themeFile);

let authenticated;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = '/login'
    authenticated = false;
  } else {
    authenticated = true;
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
          <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
     );
  }
}

export default App;
