import { FETCH_CONTACT } from '../actions/index';

const INITIAL_STATE = {

  contact: {
    phone: '303 303 3212',
    email: 'exmaplel@gmail.com'
  }

}


export default function (state= INITIAL_STATE, action) {

  switch(action.type) {
    case FETCH_CONTACT:
      return {...state, puna: INITIAL_STATE.contact }

    default:
    return state;
  }
}
