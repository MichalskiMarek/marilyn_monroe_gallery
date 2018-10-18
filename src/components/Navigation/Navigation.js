import React, {Component} from 'react';
import './Navigation.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

    class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className={'bg_image'}/>
                <div className={'main_nav'}>
                    <FontAwesomeIcon icon="user" className={'user_icon'}/>
                    <FontAwesomeIcon icon="image" className={'image_icon'}/>
                </div>
            </nav>
        );
    }
}

export default Navigation;
