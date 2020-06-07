import { combineReducers } from 'redux';
import diagnosisReducer from './reducers/diagnosis-reducer';

// This is where you import all the reducers and combine it into one
export default combineReducers({
    symptoms: diagnosisReducer
});
