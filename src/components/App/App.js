import React, {Component} from 'react';
import './App.scss';
import Navigation from "../Navigation/Navigation";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUser, faImage } from '@fortawesome/free-solid-svg-icons'


library.add(faUser);
library.add(faImage);

class App extends Component {
    render() {
        return (
            <div>
                <Navigation/>
            </div>
        );
    }
}

export default App;
