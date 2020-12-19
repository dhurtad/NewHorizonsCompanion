import React, { Component } from 'react';
import CardFrame from '../CardFrame';
import SiteBanner from '../SiteBanner';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <CssBaseline />
        <SiteBanner />        
        <CardFrame />        
      </div>      
    );
  }
}
export default App;
