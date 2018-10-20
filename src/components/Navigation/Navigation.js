import React, {Component} from 'react';
import './Navigation.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {NavLink} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div className={'bg_image'}/>
                    <div className={'main_nav'}>
                        <NavLink to={'/'} activeClassName="selected-user" className={'user_icon'}>
                            <FontAwesomeIcon icon="user"/>
                        </NavLink>
                        <NavLink to={'/Gallery'} activeClassName="selected-image" className={'image_icon'}>
                            <FontAwesomeIcon icon="image"/>
                        </NavLink>
                    </div>
                </nav>
            </header>

        );
    }
}

export default Navigation;
