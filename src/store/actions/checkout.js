import { CHECKOUT_ORDER } from 'store/types';
import axios from 'config/axios';

export const checkoutOrder = (payload) => (dispatch) => {
  dispatch({
    type: CHECKOUT_ORDER,
    payload: payload,
  });
};

export const submitOrder = (payload) => () => {
  return axios.post(`/booking-page`, payload, {
    headers: { contentType: 'multipart/form-data' },
  });
};
