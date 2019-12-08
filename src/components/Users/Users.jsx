import React, {Component} from 'react';
import styles from './Users.module.scss';

class Users extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let state = this.props;
        if (state.users.length === 0) {
            state.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://ped-kopilka.ru/upload/blogs2/2019/4/48360_a20cbb1367072944e6b589dfae37e0a0.jpg.jpg',
                    followed: false,
                    fullName: 'Sergey K',
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://ped-kopilka.ru/upload/blogs2/2019/4/48360_a20cbb1367072944e6b589dfae37e0a0.jpg.jpg',
                    followed: true,
                    fullName: 'Vladimir',
                    status: 'I am a boss too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://ped-kopilka.ru/upload/blogs2/2019/4/48360_a20cbb1367072944e6b589dfae37e0a0.jpg.jpg',
                    followed: false,
                    fullName: 'Andrey',
                    status: 'I am a boss too',
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
            ]);
        }
        return (
            <div className={styles.table}>
                {
                    state.users.map( u => <div key={u.id}>
                        <div  className={styles.tabletr} >
                            <div>
                                <div>
                                    <img src={u.photoUrl} className={styles.photo} />
                                </div>
                                <div>
                                    { u.followed ?
                                        <button onClick={ () => {state.unfollow(u.id)} }>unfollow</button> :
                                        <button onClick={ () => {state.follow(u.id)} }>Follow</button> }
                                </div>
                            </div>
                            <div>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        );
    }
}

export default Users;