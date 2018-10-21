import React, {Component} from 'react';
import './Gallery.scss';
import {connect} from 'react-redux';
import { fetchPhotos} from "../../actions/photoAction";

class Gallery extends Component {

    componentWillMount() {
     this.props.fetchPhotos();
    }

    render() {
        const photos = this.props.photos.map((element, index) => {
            return index<9 ? <a href={element.link} target={'blank'} key={index}><img className={'galleryPhoto'} src={element.media.m} alt="Marilyn Monroe tags"/></a> : null
        });
        return (
            <section className={'gallery'}>
                {photos}
            </section>
        );
    }
}

const mapStateToProps = state => ({
    photos: state.photos.items
});

export default connect(mapStateToProps, {fetchPhotos})(Gallery);