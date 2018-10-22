import {FETCH_PHOTOS} from "./types";
import axios from "axios";

export const fetchPhotos = () => dispatch => {
    const tags = ['marilyn', 'monroe'];
    const format = 'json';
    const noJSONcallback = 'true';
    axios.get(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${tags.join(',')}&format=${format}&nojsoncallback=${noJSONcallback}`)
        .then(response => {
            dispatch({
                type: FETCH_PHOTOS,
                payload: response.data.items
            })
        });
};