import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
debugger;
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar /> 
      
      <div className="app-wrapper-content">
        {/* <Route path="/dialogs" component={Dialogs}/>
        <Route path="/profile" component={Profile}/> */}

        <Route path="/dialogs" render={()=> <DialogsContainer 
        store={props.store}
        // dialogs={props.state.dialogsPage.dialogs} 
        // messages={props.state.dialogsPage.messages}
        // dispatch={props.dispatch}
        />}/> 


        <Route path="/profile" render={()=> <Profile 
        store={props.store}/>}/>

        {/* <Route path="/news" component={Dialogs}/>
        <Route path="/Music" component={Profile}/> 
        <Route path="/Settings" component={Dialogs}/> */}
      </div> 
    </div>
  </BrowserRouter>)

}
export default App;


