import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToPropsForReddirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthReddirect = (Component) => {


    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }
    
    
   let ConnectedAuthRedirectComponent = connect(mapStateToPropsForReddirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}