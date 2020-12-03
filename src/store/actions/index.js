import {
  UPDATE_EMPLOYEE,
  CREATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  SEARCH_EMPLOYEE,
  VIEW_EMPLOYEE,
} from '../../storeActionTypes';


export const createEmployee = (payload) => ({
  type: CREATE_EMPLOYEE,
  payload,
});

export const updateEmployee = (payload) => ({
  type: UPDATE_EMPLOYEE,
  payload,
});

export const deleteEmployee = (payload) => ({
  type: DELETE_EMPLOYEE,
  payload,
});

export const searchEmployee = (payload) => ({
  type: SEARCH_EMPLOYEE,
  payload,
});

export const viewEmployee = (payload) => ({
  type: VIEW_EMPLOYEE,
  payload,
});
