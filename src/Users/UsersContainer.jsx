import React from 'react';
import {connect} from "react-redux";
import {follow, unfollow,  setCurrentPage,  toggleFollowingProgress, getUsers  } from '../redux/usersReducer';
import * as axios from 'axios';
import userPhoto from '../Users/user.png';
import Users from './Users';
import Preloader from '../components/common/preloader/preloader';
import { usersAPI } from '../api/api';
import {withAuthReddirect} from '../hoc/WithAuthReddirect';
import { compose } from 'redux';
import {getUsersHere, getTotalUsersCount, getPageSize, getCurrentPage, getIsFetching, getFollowingInProgress } from './users-selectors';

class UsersContainer extends React.Component { 
     
    componentDidMount() {

        this.props.getUsers(  this.props.currentPage, this.props.pageSize);
    }
 
    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);
        
    }
    render() {


        return <>
        {this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                userPhoto={userPhoto}
                getUsers={this.props.getUsers}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress = {this.props.followingInProgress}
            />
        </>
    }
}

// let mapStateToProps = (state) => {
//     console.log(state);
//     return {
//         users: state.usersPage.users,
//         pageSize:state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }
let mapStateToProps = (state) => {
    console.log(state);
    return {
        users: getUsersHere(state),
        pageSize:getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

    export default compose(
        withAuthReddirect,
        connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers})
        )(UsersContainer);