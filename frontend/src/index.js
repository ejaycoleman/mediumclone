import React from 'react';
import ReactDOM from 'react-dom';
import {pink500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Container from './App';

import './index.css';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: pink500,
  },
  appBar: {
    height: 50,
  },
});



const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Container />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
