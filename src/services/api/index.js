import apiConfig from '../../config/apiConfig';

let url;

export const getEmployees = async () => {
  url = `${apiConfig.baseUrl}/employees`;
  const data = fetch(url, { method: 'GET' });
  return data;
};

export const viewEmployee = async id => {
  url = `${apiConfig.baseUrl}/employee/${id}`;
  const data = fetch(url, { method: 'GET' });
  return data;
};

export const createEmployee = async employee => {
  if (!employee) {
    return new Error(errorsHandler(employee));
  }
  url = `${apiConfig.baseUrl}/create`;
  const data = fetch(url, {
    method: 'POST',
    body: JSON.stringify(employee),
  });
  return data;
};

export const updateEmployee = async (id, employeeUpdated) => {
  url = `${apiConfig.baseUrl}/update/${id}`;
  const data = fetch(url, {
    method: 'PUT',
    body: JSON.stringify(employeeUpdated),
  });
  return data;
};

export const removeEmployee = async id => {
  url = `${apiConfig.baseUrl}/delete/${id}`;
  const data = fetch(url, { method: 'DELETE' });
  return data;
};
