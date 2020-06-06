import diagnosisReducer  from './diagnosis-reducer';

import {combineReducers} from 'redux';
// import { chosensymptoms, choosesymptoms } from '../actions/diagnosis-actions';

const reducers = combineReducers({
    diagnosis: diagnosisReducer,
})

export default reducers;