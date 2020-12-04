import { createEmployee, updateEmployee } from '../services/api';
import { errorsHandler } from '../services/notifications';
import { notify } from '../store/actions';

export function handleCreateEmployee(data) {
  return function (dispatch) {
    return createEmployee(data)
      .then(async res => {
        let { status, message } = await res.json();
        dispatch(
          notify(status == 'success' ? message : 'Something wrong happened..')
        );
        return Promise.resolve();
      })
      .catch(errorsHandler);
  };
}

export function handleUpdateEmployee(data) {
  return function (dispatch) {
    return updateEmployee(data)
      .then(async res => {
        let { status, message } = await res.json();
        dispatch(
          notify(status == 'success' ? message : 'Something wrong happened..')
        );
        return Promise.resolve();
      })
      .catch(errorsHandler);
  };
}
