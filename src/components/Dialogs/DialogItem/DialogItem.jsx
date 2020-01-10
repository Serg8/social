import React from 'react';
import s from './DialogItem.module.scss';
import {NavLink} from "react-router-dom";

class DialogItem extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div className={s.dialog +  ' ' + s.active} >
                <NavLink to={"/dialogs/" + this.props.id}>{this.props.name}</NavLink>
            </div>
        );
    }
}

export default DialogItem;