import React, {Component} from 'react';
import styles from './Users.module.scss';
import * as axios from "axios";
import userPhoto from '../../assets/img/default.png'

class Users extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {  // вызовется после render// все side effects размещаем тут
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        let state = this.props;

        return (
            <div>
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