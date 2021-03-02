import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components//Profile/ProfileContainer';
import {Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './Users/UsersContainer';
import LoginPage from './components/login/login';
import {connect} from "react-redux";
import {getAuthUserData, logout} from './redux/auth-reducer';
import { compose } from 'redux';
import {withRouter} from 'react-router-dom';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/preloader/preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      debugger;
      return <Preloader/>
    }
     

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar /> 
      
      <div className="app-wrapper-content">
  
        <Route path="/dialogs" 
        render={()=> <DialogsContainer  />}/> 

        <Route path="/profile/:userId?" 
        render={()=> <ProfileContainer  />}/>

        <Route path="/users" render={()=> <UsersContainer  />}/>
          
        <Route path="/login" render={()=> <LoginPage  />}/>


        {/* <Route path="/news" component={Dialogs}/>
        <Route path="/Music" component={Profile}/> 
        <Route path="/Settings" component={Dialogs}/> */}
      </div> 
    </div>
  )

  }
}


const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default compose (
  withRouter,
  connect (mapStateToProps, {initializeApp}))(App)


