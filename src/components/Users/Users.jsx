import React, {Component} from 'react';
import styles from "./Users.module.scss";
import userPhoto from '../../assets/img/default.png';
import {NavLink} from "react-router-dom";

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
                                        props.unfollow(u.id)
                                    }}>unfollow</button> :
                                    <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>}
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