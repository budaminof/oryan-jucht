import { combineReducers } from 'redux';
import  AboutReducer  from './reducer_about';

const rootReducer = combineReducers({
  about: AboutReducer
});

export default rootReducer;
