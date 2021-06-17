import React from 'react';
import Navbvar from './Navbar'; 
import LoadingBar from 'react-redux-loading-bar';
import Login from './Login';
import { connect } from 'react-redux';
class App extends React.Component {
  state = {
    isLoginMenuOpen: false,
  };
  handleClick = e => {
    // Can you suggest a better way to reference the button ? 
    const button = document.querySelector('.login__expand-button');
    if (button !== e.target && ! button.contains(e.target)) { 
      this.setState({
        isLoginMenuOpen: false,
      });
    }
    else if (button === e.target){
      e.preventDefault();
      this.setState( prevState => ({
          isLoginMenuOpen: ~prevState.isLoginMenuOpen,
      }));
    }
  }
  render(){
    return (
      <div onClick={this.handleClick}>
        <LoadingBar />
        <Navbvar />
        <Login isOpen={this.state.isLoginMenuOpen} />
      </div>
  );
  }
}

export default App;
