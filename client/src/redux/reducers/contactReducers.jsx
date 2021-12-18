import { SET_CURRENT_CONTACT, CONTACT_LOADING } from '../actions/contactTypes';
const initialState = {
  user: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_CONTACT:
      return {
        ...state,
        user: action.payload
      };
    case CONTACT_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
