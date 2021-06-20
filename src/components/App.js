import React from 'react';
import Navbvar from './Navbar'; 
import LoadingBar from 'react-redux-loading-bar';
import Login from './Login';
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
class App extends React.Component {
  state = {
    isLoginMenuOpen: false,
  };
  handleClick = e => {
    const button = document.querySelector('.login__expand-button');
    if (button){
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
  }
  handleHomePage = loggedUser => {
    if (loggedUser)
      return <Home />;
    return <Redirect to='/login' />;
  }
  render(){
    return (
      <div onClick={this.handleClick}>
        <LoadingBar />
        <Navbvar />
        <Switch>
          <Route exact path="/login">
            <Login isOpen={this.state.isLoginMenuOpen} />
          </Route>
          <Route exact path="/">
            { this.handleHomePage(this.props.loggedUser)}
          </Route>
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    loggedUser: state.users[state.loggedUserId],
    loadingBar: state.loadingBar,
  };
}

export default connect(mapStateToProps)(App);