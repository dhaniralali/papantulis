import {combineReducers} from 'redux'
import * as places from './places'
import { routerReducer } from 'react-router-redux'


const rootReducer = combineReducers({
    ...places,
    routing: routerReducer
});

export default rootReducer;