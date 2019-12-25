import React, {Component} from 'react';
import styles from "./Users.module.scss";
import userPhoto from '../../assets/img/default.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i ++) {
        pages.push(i);
    }

    return <div>
        <div className={styles.pagination}>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}
                >{p}</span>
            })}
        </div>
        <div className={styles.table}>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={styles.tabletr}>
                        <div>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={styles.photo}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                           {
                                               withCredentials: true,
                                               headers: {
                                                   "API-KEY" : "21bae5d7-f255-4442-a408-6a1927347146"
                                               }
                                           })
                                            .then(response => {
                                                if (response.data.resultCode == 0) {
                                                    props.unfollow(u.id)
                                                }
                                            });
                                    }}>unfollow</button> :
                                    <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {},
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY" : "21bae5d7-f255-4442-a408-6a1927347146"
                                                }
                                            })
                                            .then(response => {
                                                if (response.data.resultCode == 0) {
                                                    props.follow(u.id)
                                                }
                                            });

                                        }}>Follow</button>
                                }
                            </div>
                        </div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    </div>
}


export default Users;