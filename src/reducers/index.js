import {combineReducers} from "redux";
import photoReducer from "./photoReducer.js"

export default combineReducers({
    photos: photoReducer
});