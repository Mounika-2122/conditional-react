//import logo from './logo.svg';
//import './App.css';

//function App() {
  //return (
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
        //  Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
         // className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
       // >
         // Learn React
       // </a>
      //</header>
    //</div>
 // );
//}

//export default App;

import React, { Component } from 'react';

class App extends Component{
  render(){
    var i=6;
    return(
        <div>
          <h1>{i==6 ? 'True' : 'False'}</h1>
          <h1>'The Subraction Of 20 and 10 is'{10-20} </h1>
        </div>
    );
  }
}


 export default App;
