import React, {Component} from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './index.css';
import Navbar from './components/Sidebar/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


class App extends React.Component {

    render() {
        return (
                <div className="App">
                    <Header />
                    <Sidebar />
                    <div className='content' >
                        <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
                        <Route path='/dialogs' render={ () => <DialogsContainer />} />
                        <Route path='/users' render={ () => <UsersContainer />} />
                        <Route path='/news' render={ () => <News />} />
                        <Route path='/music' render={ () => <Music />} />
                        <Route path='/settings' render={ () => <Settings />} />


                        {/*<Route path='/settings' component={Settings} />*/}

                    </div>
                    <Footer />
                </div>
        );
    }

}

export default App;
