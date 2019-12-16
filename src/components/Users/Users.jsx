import React, {Component} from 'react';
import styles from './Users.module.scss';
import * as axios from "axios";
import userPhoto from '../../assets/img/default.png'

class Users extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {  // вызовется после render// все side effects размещаем тут
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        let state = this.props;
        let pagesCount = Math.ceil(state.totalUsersCount / state.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i ++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={styles.pagination}>
                    {pages.map(p => {
                       return <span className={ state.currentPage === p && styles.selectPage}
                       onClick={(e) => { this.onPageChanged(p); }}
                       >{p}</span>
                    })}
                </div>
                <div className={styles.table}>
                    {
                        state.users.map( u => <div key={u.id}>
                            <div  className={styles.tabletr} >
                                <div>
                                    <div>
                                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.photo} />
                                    </div>
                                    <div>
                                        { u.followed ?
                                            <button onClick={ () => {state.unfollow(u.id)} }>unfollow</button> :
                                            <button onClick={ () => {state.follow(u.id)} }>Follow</button> }
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
        );
    }
}

export default Users;