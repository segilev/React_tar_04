import React, { Component } from 'react';
import './App.css';
import { Route, Link, HashRouter as Router } from 'react-router-dom';
import Show from './Show';
import Findperson from './Findperson';

var arr1=[];

class App extends Component {
  constructor(props){
    super(props);
    
  }

  

  render() {
    return (
      <div className="App">
        <Router>
          <div> 
           <Route path="/"             component={Findperson} exact />
             <Route path="/Show/"  component={Show} exact />           
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
