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
                response.data.items.forEach((element, index) => {
                    if (index < 9) {
                        this.setState({photos: [...this.state.photos, element]})
                    }
                })
            });
    }

    render() {
        const photos = this.state.photos.map((element, index) => {
            return <a href={element.link} target={'blank'} key={index}><img className={'galleryPhoto'} src={element.media.m} alt="Marilyn Monroe tags"/></a>
        });
        return (
            <section className={'gallery'}>
                {photos}
            </section>
        );
    }
}

export default Gallery;