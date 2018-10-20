import React, {Component} from 'react';
import './NoMatch.scss';

class NoMatch extends Component {
    render() {
        return (
            <div className={'noMatch'}>
                Not found :(
                <img src="https://i.kym-cdn.com/photos/images/original/001/043/243/419.gif" alt={'Confused Vincent Vega'}/>
            </div>
        );
    }
}

export default NoMatch;