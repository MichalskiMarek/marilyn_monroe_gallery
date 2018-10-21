import React, {Component} from 'react';
import './App.scss';
import Navigation from "../Navigation/Navigation";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUser, faImage, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import Main from "../Main/Main";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Gallery from "../Gallery/Gallery";
import NoMatch from "../NoMatch/NoMatch";
import {Provider} from "react-redux";
import store from "../../store"

library.add(faUser, faImage, faMapMarkerAlt);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Navigation/>
                        <Switch>
                            <Route exact path={'/'} component={Main}/>
                            <Route path={'/Gallery'} component={Gallery}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
