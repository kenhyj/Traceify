import { combineReducers } from 'redux';
import diagnosisReducer from './reducers/diagnosis-reducer';
import websiteReducer from './reducers/website-reducer';
import mapReducer from './reducers/map-reducer';
import asyncReopenReducer from './reducers/reopening-reducer';

// This is where you import all the reducers and combine it into one
export default combineReducers({
  diagnosis: diagnosisReducer,
  website: websiteReducer,
  map: mapReducer,
  reopen: asyncReopenReducer,
});
