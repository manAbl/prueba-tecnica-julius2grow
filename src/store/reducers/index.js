import {
  UPDATE_EMPLOYEE,
  CREATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  SEARCH_EMPLOYEE,
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
    default:
      result = {
        ...state,
      };
      break;
  }
  return result;
};

export default reducer;
