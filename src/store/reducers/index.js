import {
  UPDATE_EMPLOYEE,
  CREATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  SEARCH_EMPLOYEE,
  SET_EMPLOYEES_LIST,
} from '../../storeActionTypes';

const reducer = (state, { payload, type }) => {
  let result;
  switch (type) {
    case `${CREATE_EMPLOYEE}`:
      console.log('create employee')
      break;
    case `${UPDATE_EMPLOYEE}`:
      console.log('update employee')
      break;
    case `${DELETE_EMPLOYEE}`:
      console.log('delete employee')
      break;
    case `${SEARCH_EMPLOYEE}`:
      console.log('search employee')
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
