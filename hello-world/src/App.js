import logo from './assets/BL_logo_square_jpg.jpg';
import './App.css';
import React from 'react';
class App extends React.Component{
  url="https://www.bridgelabz.com";
  constructor(){
    super();
    this.state={
      title:"Hello From BridgeLabz",
      usernName:'',
      nameError: ''
    }
  }

  onClick= ($event)=>{
    console.log("Save button is clicked",$event);
    window.open(this.url,"_blank");
  }
  onNameChange=(event) =>{
    console.log("Value is: ",event.target.value);
    const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    this.setState({usernName: event.target.value})
    if(nameRegex.test(event.target.value)){
      this.setState({nameError: ''})
    }
    else{
      this.setState({nameError:'Name is incorrect'})
    }
  }
  render(){
    return (
      <div>
        <div >
          <h1>
             Hello {this.state.usernName} from BridgeLabz
           </h1>
           <img src={logo} onClick={this.onClick} alt="Employability delivered"/>
        </div>
        <div>
        <input onChange={this.onNameChange}/>
        <span className="error">{this.state.nameError}</span>
       </div>
      </div>
     );
  }
}

export default App;
