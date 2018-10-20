import React, {Component} from 'react';
import './App.scss';
import Navigation from "../Navigation/Navigation";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUser, faImage, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Main from "../Main/Main";

library.add(faUser,faImage,faMapMarkerAlt);

class App extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Main/>
            </div>
        );
    }
}

export default App;
