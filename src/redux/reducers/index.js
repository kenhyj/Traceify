import diagnosisReducer  from './diagnosis-reducer';

import {combineReducers} from 'redux';

const reducers = combineReducers({
    diagnosis: diagnosisReducer,
})

export default reducers;