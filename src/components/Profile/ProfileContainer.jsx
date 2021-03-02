import React from 'react';
import Profile from './Profile';
import { getUserProfileAC, getStatus, updateStatus } from '../../redux/profileReducer';
// import profileReducer from '../../redux/profileReducer';
import {connect} from "react-redux";
import * as axios from 'axios';
import {withRouter} from 'react-router-dom';
import {Redirect} from "react-router-dom";
import {withAuthReddirect} from '../../hoc/WithAuthReddirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {  
            userId = this.props.authorisedUserId;
            if(!userId) {
                this.props.history.push('/login'); // стараться делать реже - пытаться через JSX
            }
        }
        this.props.getUserProfileAC(userId);
        this.props.getStatus(userId);
    }

    render() {
        console.log('RENDER PROFILE');
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
} 

let mapStateToProps = (state) => {
    console.log('mapStateToProps PROFILE');
   return ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
   })
};


export default compose (
    connect(mapStateToProps, {getUserProfileAC, getStatus, updateStatus}),
    withRouter,
    // withAuthReddirect
)(ProfileContainer);
 