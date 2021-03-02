import React from 'react';
import styles from './users.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { usersAPI } from '../api/api';
import {follow, unfollow} from '../redux/usersReducer';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
        <button onClick={props.getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : props.userPhoto}
                                className={styles.userPhoto} alt="no picta" />
                        </NavLink>
                    </div>
                    <div>
                        
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {props.unfollow( u.id);

                            }} >Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                            onClick={() => {props.follow(u.id);
                                
                            }} >Follow</button>}

                    </div>
                </span>

                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;