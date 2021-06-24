import React from 'react';
import Navbvar from './Navbar'; 
import LoadingBar from 'react-redux-loading-bar';
import Login from './Login';
import Home from './Home';
import QuestionPage from './QuestionPage';
import ComposeQuestion from './ComposeQuestion';
import LeaderBoard from './LeaderBoard';
import Page404 from './Page404';
import { handleReceiveUsers } from '../actions/users';
import { handleReceiveQuestions } from '../actions/questions';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
class App extends React.Component {
  state = {
    isLoginMenuOpen: false,
  };
  componentDidMount() {
    this.props.dispatch(handleReceiveUsers());
    this.props.dispatch(handleReceiveQuestions());
  }
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
  // handleHomePage = loggedUser => {
  //   if (loggedUser)
  //     return <Home />;
  //   return <Redirect to='/login' />;
  // }
  render(){
    return (
      <div onClick={this.handleClick}>
        <LoadingBar style={{backgroundColor: '#0a92cc',}}/>
        <Navbvar />
        <Switch>
          {
            !this.props.loggedUser  ? <Route> <Login isOpen={this.state.isLoginMenuOpen} /> </Route> : null
          }
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/question/:id" component={QuestionPage} />
          <Route exact path="/add" component={ComposeQuestion} />
          <Route exact path="/leaderboard" component={LeaderBoard} />
          <Route>
            <Page404 />
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