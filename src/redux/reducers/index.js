import diagnosisReducer  from './diagnosis-reducer';

import {combineReducers} from 'redux';

const reducers = combineReducers({
    diagnosisReducer: diagnosisReducer,
})

export default reducers;