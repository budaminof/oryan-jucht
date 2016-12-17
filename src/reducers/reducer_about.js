import { FETCH_ABOUT } from '../actions/index';

const INITIAL_STATE = {
  about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 

}


export default function (state= INITIAL_STATE, action) {

  switch(action.type) {
    case FETCH_ABOUT:
      return {...state, about: INITIAL_STATE.about }

    default:
    return state;
  }
}
