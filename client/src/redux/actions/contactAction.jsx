import axios from 'axios';
import { GET_ERRORS, CONTACT_LOADING } from './contactTypes'; // Contact User

export const contactUser = (userData, history) => dispatch => {
    axios
      .post('/api/user_contact/contact', userData)
      .then((res) => {
        // dispatch({type: 'Some call',payload: res})
        history.push('/') // re-direct to login on successful register
      }) 
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
      );
  }; 


// COntact loading
export const setContactLoading = () => {
    return {
      type: CONTACT_LOADING
    };
  }; 