import { combineReducers } from 'redux';
import diagnosisReducer from './reducers/diagnosis-reducer';
<<<<<<< HEAD
// import websiteReducer from './reducers/website-reducer';
=======
import websiteReducer from './reducers/website-reducer';
>>>>>>> origin/mandy

// This is where you import all the reducers and combine it into one
export default combineReducers({
    diagnosis: diagnosisReducer,
<<<<<<< HEAD
    // website: websiteReducer
=======
    website: websiteReducer
>>>>>>> origin/mandy
});
