import { CHECKOUT_ORDER } from 'store/types';

const initialState = null;

export default function (state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_ORDER:
      return action.payload;
    default:
      return state;
  }
}
