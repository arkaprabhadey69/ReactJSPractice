import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App() {
//   return (
//    <div className="App">
 
//         <h1>
//           Hello from BridgeLabz
//         </h1>
   
//      </div>
//   );
// }
class App extends React.Component{
  constructor(){
    super();
    this.state={
      title:"Hello From BridgeLabz"
    }
  }
  render(){
    return (
      <div className="App">
    
           <h1>
             {this.state.title}
           </h1>
      
        </div>
     );
  }
}

export default App;
