import { combineReducers } from 'redux';
import  AboutReducer  from './reducer_about';
import PunaReducer from './reducer_puna';
import ClassesReducer from './reducer_classes';
import Contact from './reducer_contact';

const rootReducer = combineReducers({
  about: AboutReducer,
  puna: PunaReducer,
  classes: ClassesReducer,
  contact: Contact
});

export default rootReducer;
