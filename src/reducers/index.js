import { combineReducers } from 'redux';
import  AboutReducer  from './reducer_about';
import PunaReducer from './reducer_puna';
import ClassesReducer from './reducer_classes';

const rootReducer = combineReducers({
  about: AboutReducer,
  puna: PunaReducer,
  classes: ClassesReducer,
});

export default rootReducer;
