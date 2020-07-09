import { combineReducers } from 'redux';
import diagnosisReducer from './reducers/diagnosis-reducer';
import websiteReducer from './reducers/website-reducer';
import timeAndLocReducer from './reducers/timeAndLoc-reducer';

// This is where you import all the reducers and combine it into one
export default combineReducers({
    diagnosis: diagnosisReducer,
    website: websiteReducer,
    timeAndLoc: timeAndLocReducer,
});
