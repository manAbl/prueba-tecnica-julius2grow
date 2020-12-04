import {
  NOTIFY_USER,
  CREATE_EMPLOYEE,
  SEARCH_EMPLOYEE,
  SET_EMPLOYEES_LIST,
  DELETE_EMPLOYEE,
  VIEW_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from '../../storeActionTypes';
import { toast } from 'react-toastify';

const reducer = (state, { payload, type }) => {
  let result;
  switch (type) {
    case `${SEARCH_EMPLOYEE}`:
      result = {
        ...state,
        search: {
          term: payload.term,
          query: payload.query
        }
      }
      break;
    case `${CREATE_EMPLOYEE}`:
      result = {
        ...state,
        employees: [...state.employees, payload],
      };
      break;
    case `${UPDATE_EMPLOYEE}`:
      result = {
        ...state,
        employees: state.employees.map(item => {
          if (item.id == payload.id) {
            return {
              ...payload,
            };
          } else return item
        }),
      };
      break;
    case `${DELETE_EMPLOYEE}`:
      result = {
        ...state,
        employees: state.employees.filter(item => item.id != payload),
      };
      break;
    case `${NOTIFY_USER}`:
      toast(payload);
      result = {
        ...state,
      };
    case `${VIEW_EMPLOYEE}`:
      result = {
        ...state,
        currentEmployee: payload,
      };
      break;
    case `${SET_EMPLOYEES_LIST}`:
      if (payload) {
        result = {
          ...state,
          employees: payload,
        };
      } else {
        result = {
          ...state,
        };
      }
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
