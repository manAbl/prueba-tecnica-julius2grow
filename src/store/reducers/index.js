import {
  NOTIFY_USER,
  SEARCH_EMPLOYEE,
  SET_EMPLOYEES_LIST,
} from '../../storeActionTypes';
import { toast } from 'react-toastify';

const reducer = (state, { payload, type }) => {
  let result;
  switch (type) {
    case `${SEARCH_EMPLOYEE}`:
      console.log('search employee');
      break;
    case `${NOTIFY_USER}`:
      toast(payload);
      break;
    case `${SET_EMPLOYEES_LIST}`:
      result = {
        ...state,
        employees: payload,
      };
      break;
    default:
      result = {
        ...state,
      };
      break;
  }
  return result;
};

export default reducer;
