import {FETCH_PHOTOS} from "./types";
import axios from "axios";

export const fetchPhotos = () => dispatch => {
    axios.get('https://api.flickr.com/services/feeds/photos_public.gne?tags=marilyn,monroe&format=json&nojsoncallback=true')
        .then(response => {
            dispatch({
                type: FETCH_PHOTOS,
                payload: response.data.items
            })
        });
};