import React, {Component} from 'react';
import './Gallery.scss';
import axios from "axios";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }

    componentDidMount() {
        axios.get('https://api.flickr.com/services/feeds/photos_public.gne?tags=marilyn,monroe&format=json&nojsoncallback=true')
            .then(response => {
                response.data.items.forEach(el => {
                    this.setState({photos: [...this.state.photos, el.link]});
                })

            });
    }

    render() {

        return (
            <div>
               {this.state.photos.map((element,index)=>{
                   return <img key={index} src={element} alt=""/>
               })}
            </div>
        );
    }
}

export default Gallery;