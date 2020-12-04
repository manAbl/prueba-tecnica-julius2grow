import {
  createEmployee,
  updateEmployee,
  removeEmployee,
  viewEmployee,
} from '../services/api';
import { errorsHandler } from '../services/notifications';
import {
  notify,
  addEmployee,
  deleteEmployee,
  setSelectedEmployee,
  saveUpdatedEmployee,
} from '../store/actions';

export function handleCreateEmployee(data) {
  return function (dispatch) {
    return createEmployee(data)
      .then(async res => {
        let {
          status,
          data: { id },
          message,
        } = await res.json();
        let msg = status == 'success' ? message : 'Something wrong happened..';
        dispatch(notify(msg));

        if (status == 'success') {
          dispatch(
            addEmployee({
              ...data,
              id,
            })
          );
          return Promise.resolve();
        } else {
          return Promise.reject();
        }
      })
      .catch(errorsHandler);
  };
}

export function handleUpdateEmployee(data) {
  return function (dispatch) {
    return updateEmployee(data.id, data)
      .then(async res => {
        let { status, message } = await res.json();
        let msg = status == 'success' ? message : 'Something wrong happened..';
        dispatch(notify(msg));

        if (status == 'success') {
          dispatch(
            saveUpdatedEmployee({
              ...data,
            })
          );
          return Promise.resolve();
        } else {
          return Promise.reject();
        }
      })
      .catch(errorsHandler);
  };
}

export function handleDeleteEmployee(id) {
  return function (dispatch) {
    return removeEmployee(id)
      .then(async res => {
        let { status, message } = await res.json();
        let isSuccess = status == 'success';
        let msg = isSuccess ? message : 'Something wrong happened..';

        dispatch(notify(msg));

        if (isSuccess) {
          dispatch(deleteEmployee(id));
          return Promise.resolve();
        } else {
          return Promise.reject();
        }
      })
      .catch(errorsHandler);
  };
}

export function handleGetEmployeeData(id) {
  return function (dispatch) {
    return viewEmployee(id)
      .then(async res => {
        let { status, data } = await res.json();
        let isSuccess = status == 'success';
        if (isSuccess) {
          dispatch(setSelectedEmployee(data));
          return Promise.resolve();
        } else {
          return Promise.reject();
        }
      })
      .catch(errorsHandler);
  };
}
